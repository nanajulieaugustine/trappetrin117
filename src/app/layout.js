import "./globals.css";
import ClientLayout from "@/components/global/ClientLayout";

export const metadata = {
  icons: {
    icon: "/favicon.ico",
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
