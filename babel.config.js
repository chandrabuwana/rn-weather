module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@views": "./src/views",
            "@layouts": "./src/layouts",
            "@hooks": "./src/hooks",
            "@navigator": "./src/navigator",
            "@utils": "./src/utils",
            "@theme": "./src/theme",
            "@modules": "./src/modules",
          },
        },
      ],
    ],
  };
};
