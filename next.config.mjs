/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol: "https",
            hostname: "i.hizliresim.com"
        }]
    }
};

export default nextConfig;
