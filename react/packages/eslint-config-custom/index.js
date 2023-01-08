module.exports = {
  extends: ['next/core-web-vitals', 'next', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
}
