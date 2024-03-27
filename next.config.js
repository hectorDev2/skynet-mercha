module.exports = {
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    config.externals.push ({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    });
    return config;
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },

  noImplicitAny: false,

  async redirects () {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/tshirts', // Redirige a /dashboard/tshirts
        permanent: false, // Cambia a true si deseas una redirección permanente (308)
      },
    ];
  },
};
