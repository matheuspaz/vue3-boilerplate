/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-strongly-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier',
		'plugin:prettier/recommended',
	],
	env: {
		'vue/setup-compiler-macros': true,
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [2, { useTabs: true }],
		'no-unused-vars': [
			'error',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: false },
		],
	},
};
