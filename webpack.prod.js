const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: false, // Отключаем минификацию
  },
});
