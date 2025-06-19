# Overview
 A yalc plugin for Vite library projects.

## Prerequisites
- Node
- Yalc

## Quick Start
```
npm i vite-plugin-yalc
```

```ts
# vite.config.ts

import { pushDTS } from 'vite-plugin-yalc';
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

```

## Development

Surprise! This project uses [yalc](https://npmjs.com/package/yalc) for local development.

- npm run dev
- switch to project
- npx yalc add vite-plugin-yalcs
- After that, this library will hot reload into the consuming application

## Scripts

- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`

## Husky

- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Author

- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com
