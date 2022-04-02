export const AppConfig = {
  site_name: 'Taiki NFTs',
  title: "Taiki",
  description:
    'Taiki Non Fungible Tokens',
  locale: 'en',
};

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const NEXT_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';
