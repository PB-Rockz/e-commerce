import "@/styles/globals.css";
import Providers from "@/components/Providers";
import Headers from "@/components/Header/Header";

export const metadata = {
  title: "Amazon 2.0",
  description: "A Stripe powered E-Commerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-gray-100"}>
        <Providers>
          <Headers />
          {children}
        </Providers>
      </body>
    </html>
  );
}
