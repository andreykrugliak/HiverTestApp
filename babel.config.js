module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {src: './src'},
      },
      ...(process.env.NODE_ENV === 'production'
        ? ['transform-remove-console']
        : []),
    ],
  ],
};
