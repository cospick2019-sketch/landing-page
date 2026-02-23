import type { Metadata } from "next";
import "./globals.css";
import { ConsultModalProvider } from "@/components/ConsultModal";

export const metadata: Metadata = {
  title: "팔리는 랜딩페이지 | 장사꾼이 만드는 전환 페이지",
  description: "연매출 30억 찍어본 장사꾼이 직접 만드는 랜딩페이지. 효과 없으면 100% 환불.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        <ConsultModalProvider>
          {children}
        </ConsultModalProvider>
      </body>
    </html>
  );
}
