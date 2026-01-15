import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flattened English | Linguistic Labor Audit",
  description: "Measuring Linguistic Labor in AI-Mediated Knowledge Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
        <footer className="bg-[#fbfbfd] py-12 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-[#86868b]">
              © 2026 Flattened English. Built by Herman Justino.
            </div>
            <div className="flex gap-8 text-sm text-[#86868b]">
              <a href="https://www.hermanjustino.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Website</a>
              <a href="https://github.com/hermanjustino/flattened-english" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/hermanjustino/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
