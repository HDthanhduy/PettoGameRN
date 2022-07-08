/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const extraNodeModules = require('node-libs-browser');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    assetExts: [
      'obj',
      'dae',
      'scn',
      'zip',
      'png',
      'svg',
      'jpg',
      'glb',
      'gltf',
      'fbx',
      'lib',
      'mtl',
      'bin',
      'tif',
      'xpng',
      'xjpg',
      'xjpeg',
    ],
  },
};
