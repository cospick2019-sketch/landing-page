import Hero from "@/components/Hero";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section5_1 from "@/components/Section5_1";
import Section6 from "@/components/Section6";
import Section7_1 from "@/components/Section7_1";
import Section8 from "@/components/Section8";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Section 1 */}
      <Hero />
      {/* Section 2 */}
      <Section2 />
      {/* Section 3 */}
      <Section3 />
      {/* Section 4 */}
      <Section4 />
      {/* Section 5 */}
      <Section5 />
      {/* Section 5_1 */}
      <Section5_1 />
      {/* Section 6 */}
      <Section6 />
      {/* Section 7 */}
      <Section7_1 />
      {/* Section 8 */}
      <Section8 />
    </main>
  );
}
