const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react-hooks'],
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.config.js',
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      WARN,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react-hooks/rules-of-hooks': ERROR,
    'react/prop-types': OFF,
    'react/no-unescaped-entities': OFF,
    'react/require-default-props': WARN,
    'react/default-props-match-prop-types': WARN,
    'react/no-unused-prop-types': WARN,
    'react/forbid-prop-types': WARN,
    'no-underscore-dangle': OFF,
    'linebreak-style': OFF,
    'import/imports-first': [ERROR, 'absolute-first'],
    'import/newline-after-import': ERROR,
    'import/prefer-default-export': OFF,
    'no-unused-prop-types': OFF,
    'no-default-export': OFF,
    'no-debugger': WARN,
    'jsx-a11y/alt-text': OFF,
  },
  env: {
    jest: true,
    browser: true,
  },
  parser: 'babel-eslint',
}
