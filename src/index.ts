import { execSync } from 'node:child_process';

export const runCommand = ({ command = '', format = '' }) => {
	let outputOptions;
	return {
		apply: 'build',
		name: 'run-command',
		outputOptions(options) {
			outputOptions = options;
			return null;
		},
		closeBundle(error) {
			try {
				if (error) return;
				if (format && format !== outputOptions.format) return;
				execSync(command, { stdio: 'inherit' });
				execSync('npx yalc push', { stdio: 'inherit' });
			} catch (error) {
				console.error(error);
			}
		},
	};
};

export const runYalc = ({ format = '' }) => {
	let outputOptions;

	return {
		apply: 'build',
		name: 'run-yalc',
		outputOptions(options) {
			outputOptions = options;
			return null;
		},
		closeBundle(error) {
			try {
				if (error) return;
				if (format && format !== outputOptions.format) return;
				execSync('npx yalc push', { stdio: 'inherit' });
			} catch (error) {
				console.error(error);
			}
		},
	};
};

// Docs
// https://github.com/vitejs/vite/discussions/9217
