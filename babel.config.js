module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@config': '../config.ts',
          '@features': './src/features',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@generated': './src/generated',
        },
      },
    ],
  ],
};
