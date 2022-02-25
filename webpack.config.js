const path = require("path");
module.exports = {
  mode: "development",
  target: "node",
  entry: {
    server: "./src/server/index.ts",
    "public/client": "./src/client/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }],
      },
    ],
  },
  resolve: {
    fallback: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      crypto: require.resolve("crypto-browserify"),
      zlib: require.resolve("browserify-zlib"),
      fs: require.resolve("fs"),
      http: require.resolve("stream-http"),
      assert: require.resolve("assert/"),
    },
    extensions: [".ts", ".js", ".tsx"],
  },
  // node: {
  //   fs: "empty",
  //   net: "empty",
  // },
};
