import { runCommand } from './src';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			ssr: true,
			sourcemap: mode === 'development',
			lib: {
				entry: path.resolve(__dirname, 'src/index.ts'),
				formats: ['es', 'cjs'],
				name: 'Yalc',
				fileName: (format, entryName) => `${entryName}.${format}.js`,
			},
			rollupOptions: {
				external: ['node:child_process'],
				plugins: [peerDepsExternal()],
			},
		},
		plugins: [runCommand('npm run build:ts')],
		resolve: {
			alias: {
				src: path.resolve(__dirname, '/src'),
			},
		},
	};
});
