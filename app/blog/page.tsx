import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  { slug: "pourquoi-la-dd-prend-6-semaines", category: "M&A", date: "Avr 2026", title: "Pourquoi la DD prend encore 6 semaines en 2026", excerpt: "Les processus de due diligence n'ont pas fondamentalement changé depuis 20 ans. Voici pourquoi — et comment les équipes les plus avancées commencent à changer.", readTime: "8 min" },
  { slug: "palantir-foundry-explique-ma", category: "Palantir", date: "Mar 2026", title: "Palantir Foundry expliqué aux équipes M&A", excerpt: "Ce que Foundry fait vraiment, pourquoi c'est différent des outils IA classiques, et pourquoi c'est la meilleure infrastructure pour le M&A enterprise.", readTime: "12 min" },
  { slug: "5-red-flags-analyses-manquent", category: "M&A", date: "Fév 2026", title: "5 red flags que les analystes ratent sous pression", excerpt: "Concentration client, dette hors bilan, clauses d'earn-out ambiguës. Ces risques sont systématiquement sous-évalués quand les équipes manquent de temps.", readTime: "5 min" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <section style={{ padding: "100px 0 64px", background: "white", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Blog</span>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 24 }}>Insights M&A & IA</h1>
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.65 }}>Analyses, best practices et perspectives sur le M&A augmenté par l'IA.</p>
          </div>
        </section>

        <section style={{ background: "white", padding: "64px 0" }}>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {posts.map((post, i) => (
                <AnimatedSection key={i} delay={i * 60}>
                  <Link href={`/blog/${post.slug}`} style={{ display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 40, padding: "32px 0", borderBottom: "1px solid #e4e4e7", alignItems: "start", textDecoration: "none", transition: "background 0.15s" }}
                    className="blog-row">
                    <div>
                      <span style={{ padding: "3px 8px", border: "1px solid #e4e4e7", fontSize: 10, fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 8, width: "fit-content" }}>{post.category}</span>
                      <span style={{ fontSize: 12, color: "#a1a1aa", fontFamily: "monospace" }}>{post.date}</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001012", letterSpacing: "-0.01em", marginBottom: 8, lineHeight: 1.25 }}>{post.title}</h3>
                      <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.6 }}>{post.excerpt}</p>
                    </div>
                    <div style={{ fontSize: 12, color: "#a1a1aa", whiteSpace: "nowrap", paddingTop: 4 }}>{post.readTime}</div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        <style>{`@media(max-width:768px){.blog-row{grid-template-columns:1fr!important}.blog-row>div:last-child{display:none!important}}`}</style>
      </main>
      <Footer />
    </>
  );
}
