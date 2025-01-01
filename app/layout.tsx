import type { Metadata } from "next";
import "./globals.css";
import TopBar from "./_components/top-bar";
import { fontBody } from "./_utils/_fonts";
import Footer from "./_components/footer"


export const metadata: Metadata = {
  title: "Angola TODAY - o teu jornal online ",
  description: "O teu jornal online",
  icons: {
    icon: '/logo-light.png'
  },
  authors: [
    {name: "Luis Domingos Marques", url: "https://www.linkedin.com/in/luís-marques369/"},
    {name: "SupInovation"}
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={fontBody.className}>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
