const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://edith-store-e3tcpmoot-pb-rockz.vercel.app";
