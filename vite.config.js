import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3001,  // ÉèÖÃ·þÎñÆ÷¶Ë¿ÚÎª3001
    host: '0.0.0.0',  // ¼àÌýËùÓÐµÄ IP µØÖ·£¬ÒÔ±ã¾ÖÓòÍøÖÐµÄÆäËûÉè±¸¿ÉÒÔ·ÃÎÊ
    open: true,  // ÔÚÆô¶¯Ê±×Ô¶¯´ò¿ªä¯ÀÀÆ÷
    cors: true,  // ÔÊÐí¿çÓò×ÊÔ´¹²Ïí
    watch: {
      usePolling: true,  // Ê¹ÓÃÂÖÑ¯Ä£Ê½ÒÔ±ãÔÚÒ»Ð©ÌØÊâÇé¿öÏÂÊµÊ±¸üÐÂ
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',  // ÉèÖÃÊä³öÎÄ¼þÃûÄ£°å
      },
    },
  },
});
