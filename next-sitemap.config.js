/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://collectivestorytelling.com',
    generateRobotsTxt: true, // Automatically create robots.txt
    exclude: ['/contact'], // Exclude specific pages
  };
  
  module.exports = config;
  