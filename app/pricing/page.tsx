import type { Metadata } from "next";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "가격 안내 | Pickso",
  description: "Pickso 랜딩페이지 제작 가격 안내. 라이트, 베이직, 프리미엄 플랜.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header forceSolid />
      <PricingSection />
    </main>
  );
}
