module.exports = {
  apps: [
    {
      name: "deploytest",
      script: "npm run start",
      cwd: "/Users/guhada/Desktop/exercise/deploytest",
      args: "start",
      //   instances: 3,
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "2G",
    },
  ],
};
