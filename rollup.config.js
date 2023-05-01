import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const rollupConfig = {
  input: "./src/lib/index.tsx",
  output: {
    file: "./dist/bundle.js",
    format: "esm",
    sourcemap: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    babel({
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
        "@emotion/babel-preset-css-prop",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
  ],
};

export default rollupConfig;
