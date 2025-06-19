import { exec } from 'node:child_process';

export type PluginProps = {
	command?: string;
};

export const runYalc = (): any => {
	return {
		name: 'run-yalc',
		closeBundle: async () => {
			return exec('npx yalc push', (response, error) => {
				if (error) console.error(error);
				if (response) console.log(response);
			});
		},
	};
};

export const runCommand = (props?: PluginProps): any => {
	return {
		name: 'run-command',
		closeBundle: async () => {
			return exec(props?.command, (response, error) => {
				if (error) console.error(error);
				if (response) console.log(response);
			});
		},
	};
};

export const runDts = (): any => {
	return {
		name: 'run-dts',
		closeBundle: async () => {
			return exec('dts-bundle-generator --config dts.config.ts', (response, error) => {
				if (error) console.error(error);
				if (response) console.log(response);
			});
		},
	};
};

// Docs
// https://github.com/vitejs/vite/discussions/9217
