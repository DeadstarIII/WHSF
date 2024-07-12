/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    env: {
      NEXT_PUBLIC_FORMSPREE_FORM_ID: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID,
    },
  };
  
  export default nextConfig;
  