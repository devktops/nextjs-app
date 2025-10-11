module.exports = {
  apps: [
    {
      name: 'devktops-b3',
      script: 'npm',
      args: 'start -p 3000',
      exec_mode: 'cluster', // Use 'cluster' for horizontal scaling, 'fork' for single instance
      instances: 1,
      watch: true, // Set to true to enable watching for file changes and automatic restarts
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};