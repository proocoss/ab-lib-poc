import type { RollupOptions } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';

const config: RollupOptions = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      plugins: [terser()]
    },
    {
      dir: 'dist/es',
      format: 'es',
      exports: 'named',
      plugins: [terser()]
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    commonjs(
      {
        include: 'node_modules/**',
        requireReturnsDefault: 'auto'
      }
    ),
    nodeResolve({ extensions: [...Object.keys(pkg.peerDependencies || {})] }),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      include: ['src/**/*'],
      exclude: ['node_modules/**'],
      extensions: ['.js', '.jsx', '.ts', 'tsx'],
      presets: [
        ["@babel/preset-env"],
        "@babel/preset-typescript",
        ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]
      ],
      plugins: ['@emotion/babel-plugin']
    })
  ]
};

export default config;
