import { exec } from 'node:child_process';

export type PluginProps = {
	command?: string;
};

export const runCommand = (command): any => {
	return {
		name: 'run-command',
		closeBundle: async () => {
			return exec(command, (response, error) => {
				if (error) console.error(error);
				if (response) console.log(response);
				return exec('npx yalc push', (response, error) => {
					if (error) console.error(error);
					if (response) console.log(response);
				});
			});
		},
	};
};

export const runCombined = (): any => {
	return {
		name: 'run-combined',
		closeBundle: async () => {
			return exec('dts-bundle-generator --config dts.config.ts', (response, error) => {
				if (error) console.error(error);
				if (response) console.log(response);
				return exec('npx yalc push', (response, error) => {
					if (error) console.error(error);
					if (response) console.log(response);
				});
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

// Docs
// https://github.com/vitejs/vite/discussions/9217
