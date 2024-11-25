import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";



export const metadata = {
  title: "Tarefa front",
  description: "Sei q nada sei",
  charset: 'UTF-8',
  author: 'Rodolfo',
  keywords: 'Nunca diga nunca'


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
