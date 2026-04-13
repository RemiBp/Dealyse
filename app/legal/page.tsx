import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SegmentPageTemplate from "@/components/SegmentPageTemplate";
import { segments } from "@/lib/content/segments";

const SLUG = "legal";

export default function Page() {
  const s = segments.find((x) => x.slug === SLUG)!;
  return (
    <>
      <Navbar />
      <SegmentPageTemplate s={s} />
      <Footer />
    </>
  );
}
