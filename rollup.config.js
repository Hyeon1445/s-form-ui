import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

const rollupConfig = {
  input: "./src/lib/index.tsx",
  output: {
    file: "./dist/bundle.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript(),
  ],
};

export default rollupConfig;
