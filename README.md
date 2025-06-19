# Overview
 A yalc plugin for Vite-based library projects.

## Prerequisites
- Node
- Yalc

## Installation
```
npm i vite-plugin-yalc
```

## Usage
To push your build into the store, simply do the following:
```ts
# vite.config.ts

import { runYalc } from 'vite-plugin-yalc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			lib: {
				entry: path.resolve(__dirname, 'src/index.ts'),
				name: 'Yalc',
				formats: ['es', 'cjs'],
				fileName: format => `index.${format}.js`,
			},
		},
		plugins: [runYalc()],
		resolve: {
			alias: {
				src: path.resolve(__dirname, '/src'),
			},
		},
	};
});

```

Or, to build types and then push your build into the store do the following:

```ts
# vite.config.ts

import { runDts, runYalc } from 'vite-plugin-yalc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			lib: {
				entry: path.resolve(__dirname, 'src/index.ts'),
				name: 'Yalc',
				formats: ['es', 'cjs'],
				fileName: format => `index.${format}.js`,
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
