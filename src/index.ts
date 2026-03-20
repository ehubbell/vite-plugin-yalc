import { execSync } from 'node:child_process';

export const runCommand = ({ command = '', format = '' }) => ({
	apply: 'build',
	name: 'run-command',
	writeBundle: outputOptions => {
		try {
			if (format && format !== outputOptions.format) return;
			execSync(command, { stdio: 'inherit' });
			execSync('npx yalc push', { stdio: 'inherit' });
		} catch (error) {
			console.error(error);
		}
	},
});

export const runYalc = ({ format = '' }) => ({
	apply: 'build',
	name: 'run-yalc',
	writeBundle(outputOptions) {
		try {
			if (format && format !== outputOptions.format) return;
			execSync('npx yalc push', { stdio: 'inherit' });
		} catch (error) {
			console.error(error);
		}
	},
});

// Docs
// https://github.com/vitejs/vite/discussions/9217
