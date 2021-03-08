module.exports = {
  env: {
    node: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint'],

  extends: ['eslint:recommended'],

  /**
   * @see https://eslint.org/docs/rules/
   */
  rules: {
    'array-bracket-spacing': ['warn', 'never'],

    'arrow-parens': ['warn', 'as-needed'],

    'arrow-spacing': 'warn',

    'comma-dangle': ['warn', 'always-multiline'],

    'dot-location': ['warn', 'property'],

    'func-call-spacing': 'warn',

    'indent': ['warn', 2],

    'key-spacing': 'warn',

    'keyword-spacing': 'warn',

    'max-depth': 'error',

    'max-len': ['warn', { code: 100 }],

    'max-statements-per-line': 'error',

    'multiline-ternary': ['warn', 'always-multiline'],

    'new-parens': 'warn',

    'no-console': 'error',

    'no-duplicate-imports': 'warn',

    'no-else-return': 'warn',

    'no-empty': 'error',

    'no-empty-function': 'error',

    'no-eval': 'error',

    'no-extend-native': 'error',

    'no-extra-label': 'warn',

    'no-implicit-globals': 'error',

    'no-lonely-if': 'warn',

    'no-multi-assign': 'warn',

    'no-multi-spaces': 'warn',

    'no-multiple-empty-lines': 'warn',

    'no-negated-condition': 'warn',

    'no-trailing-spaces': 'warn',

    'no-undef': 'error',

    'no-unneeded-ternary': 'warn',

    'no-unused-vars': 'warn',

    'no-var': 'error',

    'no-whitespace-before-property': 'warn',

    'object-curly-newline': 'warn',

    'object-curly-spacing': ['warn', 'always'],

    'operator-linebreak': ['warn', 'before'],

    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'break',
          'case',
          'cjs-export',
          'cjs-import',
          'class',
          'continue',
          'default',
          'do',
          'if',
          'for',
          'function',
          'return',
          'switch',
          'throw',
          'try',
          'while',
        ],
      },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],

    'quote-props': ['warn', 'consistent-as-needed'],

    'space-before-blocks': 'warn',

    'space-before-function-paren': ['warn', { named: 'never' }],

    'space-in-parens': 'warn',

    'space-unary-ops': 'warn',

    'spaced-comment': 'warn',

    'switch-colon-spacing': 'warn',

    'template-curly-spacing': 'warn',

    'unicode-bom': 'error',

    'wrap-iife': ['warn', 'inside'],

    'camelcase': 'warn',

    'complexity': 'error',

    'curly': 'warn',

    'eqeqeq': ['error', 'smart'],

    'quotes': ['warn', 'single'],

    'semi': ['warn', 'never'],

    'strict': 'error',

    'yoda': ['warn', 'never', { exceptRange: true }],
  },

  overrides: [
    {
      files: ['*.vue'],

      extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:nuxt/recommended'],

      /**
       * @see https://eslint.vuejs.org/rules/
       */
      rules: {
        'vue/component-name-in-template-casing': ['warn', 'PascalCase'],

        'vue/html-indent': ['warn', 2, {
          alignAttributesVertically: false,
        }],

        'vue/max-attributes-per-line': 'off',

        'vue/max-len': ['warn', { code: 100 }],

        'vue/require-default-prop': 'off',

        'vue/script-indent': ['warn', 2, { baseIndent: 1, switchCase: 1 }],

        'vue/no-v-html': 'off',

        'indent': 'off',
      },
    },
  ],
}
