# Three.js + Node.js Service with Grafana Integration

## Project Overview

This is an open-source project that integrates Three.js with Node.js to send data from `main.js` to a server, and visualize that data using Grafana.The present file mainly provides an environment for linux arm64.
急速分拣2-1725252223801.json is the main panel for grafana,you can import it easily.
## Technology Stack

- **Three.js**: A JavaScript library used to create and display 3D graphics.
- **Node.js**: A JavaScript runtime used for building server-side applications.
- **Grafana**: An open-source platform for monitoring and visualizing data.

## Features

1. **Three.js 3D Visualization**: Utilizes Three.js to create 3D graphics and scenes.
2. **Node.js Service**: A Node.js server that sends data from `main.js` to a remote server.
3. **Grafana Integration**: Visualizes and monitors the data received from the Node.js service using Grafana.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kouge0510/robot-system-monitor-with-using-grafana.git
cd robot-system-monitor-with-using-grafana
```

### 2. Install Dependencies

```bash
npm install three
```

### 3. Configure the Node.js Service

- Edit the `config.js` file to set your server address and port.
- Ensure the data sending logic in `main.js` meets your requirements.

### 4. Start the Node.js Service

```bash
npm start
```

### 5. Configure Grafana

- Connect Grafana to your data source.
- Set up dashboards to visualize the data from the Node.js service.

## Usage

1. **Run the Service**: Start the Node.js service and ensure it is running.
2. **Access the Three.js Application**: Open a web browser to view the 3D graphics and data.
3. **View in Grafana**: Log into Grafana to view and analyze the data visualizations.

https://github.com/user-attachments/assets/b699e0e4-3660-46f2-9caa-af61b66a0fe7
