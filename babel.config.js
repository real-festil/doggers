module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // [
    //   'module:react-native-dotenv',
    //   {
    //     envName: 'APP_ENV',
    //     moduleName: '@env',
    //     path: '.env',
    //     safe: false,
    //     allowUndefined: true,
    //     verbose: false,
    //   },
    // ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          src: './src',
          i18n: './src/shared/i18n',
        },
      },
    ],
  ],
};
