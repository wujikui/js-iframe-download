import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import del from 'rollup-plugin-delete';


module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/js-iframe-download.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/js-iframe-download.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/js-iframe-download.umd.js',
      format: 'umd',
      name: 'jsIframeDownload',
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
