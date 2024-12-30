import { ryoppippi } from '@ryoppippi/eslint-config';

export default ryoppippi({
	svelte: false,
	unocss: false,
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
});
