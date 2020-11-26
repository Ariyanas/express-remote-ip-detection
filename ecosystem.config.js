module.exports = {
  apps: [
    {
      name: "remote-ip-detector",
      script: "./index.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
