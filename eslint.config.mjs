module.export = {
  root: true,
  plugins: ['@typescript-eslint', 'tailwindcss'],
  extends: [
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        projectService: true,
        tsconfigRootDir: __dirname
      },
      extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:tailwindcss/recommended',
        'prettier'
      ]
    }
  ],
  rules: {
    'tailwindcss/classnames-order': 'off'
  }
};
