import { defineConfig } from "rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

import packageJson from "./package.json";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      // sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      // sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true })
  ],
  external: ['react', 'react-dom', 'prop-types'],
});

