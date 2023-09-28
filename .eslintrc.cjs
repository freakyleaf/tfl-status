module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [ 'eslint-plugin-react' ],
  'rules': {
    'array-bracket-spacing': [
      'error',
      'always',
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'comma-dangle': [ 'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline',
      },
    ],
    'curly': [
      'error',
      'multi-line',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'indent': [
      'error',
      2,
    ],
    'keyword-spacing': [ 'error',
      {
        'after': true,
        'before': true,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
