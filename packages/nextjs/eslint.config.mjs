import nextPlugin from '@next/eslint-plugin-next';
import { ryoppippi } from '@ryoppippi/eslint-config';

export default ryoppippi({
	svelte: false,
	typescript: {
		tsconfigPath: './tsconfig.json',
		overrides: {
			'ts/no-misused-promises': ['error', {
				checksVoidReturn: false,
			}],
		},
	},
}, {
	name: 'next',
	plugins: {
		'@next/next': nextPlugin,
	},
	rules: {
		...nextPlugin.configs.recommended.rules,
		...nextPlugin.configs['core-web-vitals'].rules,
	},
});
