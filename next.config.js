/** @type {import('next').NextConfig} */
module.exports = {
  historyApiFallback: true,
  contentBase: './',
  hot: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/' : { page: '/' },
      '/tutorial' : { page: '/tutorial' },
      '/team' : { page: '/team'},
    }
  },
}


