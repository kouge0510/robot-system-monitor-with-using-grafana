import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

let scene, camera, renderer, controls, model, group;

function init() {
  // Scene
  scene = new THREE.Scene();

  // Group to hold all objects that need to rotate together
  group = new THREE.Group();
  scene.add(group);

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(1, 1, -1);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true; // Enable shadow maps
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: Set shadow map type
  document.getElementById('container').appendChild(renderer.domElement);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  // Lights
  const ambientLight = new THREE.AmbientLight(0x404040, 1); // Ambient light
  group.add(ambientLight);

  const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemisphereLight.position.set(0, 200, 0);
  group.add(hemisphereLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0, 200, 100);
  directionalLight.castShadow = true; // Enable shadow casting
  directionalLight.shadow.mapSize.width = 2048; // Increase shadow map resolution
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.near = 0.5; // Shadow camera near plane
  directionalLight.shadow.camera.far = 500; // Shadow camera far plane
  directionalLight.shadow.camera.left = -50;
  directionalLight.shadow.camera.right = 50;
  directionalLight.shadow.camera.top = 50;
  directionalLight.shadow.camera.bottom = -50;
  group.add(directionalLight);

  // Load GLTF model
  const loader = new GLTFLoader();
  loader.load('/models/cangkuxin.gltf', function (gltf) {
    model = gltf.scene;
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true; // Enable shadow casting for the model
        // Identify the ground mesh and enable receiving shadows
        if (child.name === '06_lantai' || child.name.toLowerCase().includes('06_lantai')) { // Identify ground by name
          child.receiveShadow = true;
        }
      }
    });
    group.add(model);


    // Assume the car model is the first child in the model hierarchy
    const car = model.children[0];

    // Make the camera look at the car
    camera.position.set(1, 1, -1); // Adjust camera position as needed
    camera.lookAt(car.position);
  }, undefined, function (error) {
    console.error(error);
  });

  // Load and apply equirectangular background texture
  const rgbeLoader = new RGBELoader();
  rgbeLoader.load('/models/ersisd-Schoten_Warehouse_4k.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
  });

  // Resize handler
  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  // Auto-rotate the whole group
  group.rotation.y += 0.002; // Control rotation speed

  renderer.render(scene, camera);
}

init();
animate();
