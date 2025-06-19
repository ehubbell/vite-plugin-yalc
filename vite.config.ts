import { pushDTS } from './src';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			ssr: true,
			sourcemap: mode !== 'production',
			lib: {
				entry: path.resolve(__dirname, 'src/index.ts'),
				name: 'Yalc',
				formats: ['es', 'cjs'],
				fileName: format => `index.${format}.js`,
			},
		},
		plugins: [pushDTS()],
		resolve: {
			alias: {
				src: path.resolve(__dirname, '/src'),
			},
		},
	};
});
