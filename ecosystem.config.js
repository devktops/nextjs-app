// example ecosystem.config.js
// ecosystem.config.js
module.exports = {
    apps: [
    {
    name: "next-app",
    script: "npm",
    args: "start -p 3000",
    watch: true,
    
    instances: 4,
    exec_mode: "cluster",
    
    env: {
    NODE_ENV: "production",
    },
    },
    ],
    };