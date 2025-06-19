import { runDts, runYalc } from './src';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			ssr: true,
			sourcemap: mode !== 'production',
			lib: {
				entry: path.resolve(__dirname, 'src/index.ts'),
				formats: ['es', 'cjs'],
				name: 'Yalc',
				fileName: (format, entryName) => `index.${format}.js`,
			},
			rollupOptions: {
				external: [
					'node:child_process',
				],
				output: {
					globals: {
						childProcess: 'node:child_process'
					},
				},
				plugins: [peerDepsExternal()],
			},
		},
		plugins: [runDts(), runYalc()],
		resolve: {
			alias: {
				src: path.resolve(__dirname, '/src'),
			},
		},
	};
});
