/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'], // Allow Firebase Storage URLs
      },
};

export default nextConfig;
