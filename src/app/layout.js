import "./globals.css";
import ClientLayout from "@/components/global/ClientLayout";

export const metadata = {
  title: "Trappetrin 117",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
