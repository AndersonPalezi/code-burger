export default {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Ativa as regras do Prettier
  ],
  plugins: ['prettier'], // Ativa o plugin do Prettier
  rules: {
    'prettier/prettier': 'error', // Define as regras do Prettier como erro
  },
};
