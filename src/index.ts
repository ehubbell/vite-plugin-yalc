import { exec } from 'node:child_process';

export type PluginProps = {
	command?: string;
};

export const runCommand = (command: string): any => {
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
