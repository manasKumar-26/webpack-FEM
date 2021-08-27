const { merge } = require("webpack-merge");

function presets(env) {
  const { presets } = env;
  const presetsList = [].concat(...[presets]);
  const mergedConfig = presetsList.map((preset) =>
    require(`./presets/${preset}.config`)(env)
  );

  return merge({}, ...mergedConfig);
}

module.exports = presets;
