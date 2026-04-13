import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { products } from "@/lib/content/products";

const SLUG = "reporting";

export default function Page() {
  const p = products.find((x) => x.slug === SLUG)!;
  return (
    <>
      <Navbar />
      <ProductPageTemplate p={p} />
      <Footer />
    </>
  );
}
