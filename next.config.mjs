// /** @type {import('next').NextConfig} */
// const nextConfig = {
    // swcMinify: true,
  // };
  
  // export default nextConfig;
//   /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// const isWindows = process.platform === "win32";

// module.exports = {
//     swcMinify: true, // Enable SWC minifier
//     experimental: {
//         swcLoader: !isWindows, // Use SWC loader only on non-Windows
//         swcMinify: !isWindows, // Use SWC minifier only on non-Windows
//     },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Enable SWC minifier
  experimental: {
      swcLoader: process.platform !== "win32", // Use SWC loader only on non-Windows
      swcMinify: process.platform !== "win32", // Use SWC minifier only on non-Windows
  },
};

export default nextConfig;
