import { exec } from 'node:child_process';

export type PluginProps = {
	command?: string;
};

const pushBasic = () => {
	return {
		name: 'yalc-push',
		closeBundle: async () => {
			exec('npx yalc push', (response, error) => (error ? console.error(error) : null));
		},
	};
};

const pushCustom = (props?: PluginProps) => {
	return {
		name: 'yalc-push',
		closeBundle: async () => {
			if (props?.command) {
				return exec(props?.command, (response, error) => {
					if (error) console.error(error);
					if (response) console.log(response);
					exec('npx yalc push', (response, error) => (error ? console.error(error) : null));
				});
			}
			return exec('npx yalc push', (response, error) => (error ? console.error(error) : null));
		},
	};
};

const pushDTS = () => {
	return {
		name: 'yalc-push',
		closeBundle: async () => {
			exec('dts-bundle-generator --config dts.config.ts', (response, error) => {
				if (error) console.error(error);
				if (response) console.log(response);
				exec('npx yalc push', (response, error) => (error ? console.error(error) : null));
			});
		},
	};
};

export { pushBasic, pushCustom, pushDTS };

// Docs
// https://github.com/vitejs/vite/discussions/9217
