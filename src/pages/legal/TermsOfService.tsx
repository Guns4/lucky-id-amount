import { Helmet } from "react-helmet-async";

export default function TermsOfService() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-10">
      <Helmet>
        <title>Terms of Service | LuckyGen</title>
        <meta
          name="description"
          content="Terms of Service governing the use of the LuckyGen website and its number generator tools."
        />
        <link
          rel="canonical"
          href="https://www.luckygen.click/terms-of-service"
        />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>

      <p className="text-sm text-muted-foreground mb-6">
        Last updated: {new Date().toDateString()}
      </p>

      <section className="space-y-4 text-sm leading-relaxed">
        <p>
          By accessing and using LuckyGen, you agree to comply with and be bound
          by the following terms and conditions.
        </p>

        <h2 className="font-semibold text-base">Use of the Website</h2>
        <p>
          LuckyGen provides number pattern and generator tools for informational
          and entertainment purposes only. You agree not to misuse the website
          or attempt to disrupt its operation.
        </p>

        <h2 className="font-semibold text-base">No Guarantees</h2>
        <p>
          LuckyGen does not guarantee any specific outcomes, results, or benefits
          from using the tools or information provided on this website.
        </p>

        <h2 className="font-semibold text-base">Intellectual Property</h2>
        <p>
          All content, branding, and software on this website are the property
          of LuckyGen unless otherwise stated. Unauthorized use is prohibited.
        </p>

        <h2 className="font-semibold text-base">Limitation of Liability</h2>
        <p>
          LuckyGen shall not be held liable for any direct or indirect damages
          arising from the use or inability to use this website.
        </p>

        <h2 className="font-semibold text-base">Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time.
          Continued use of the website constitutes acceptance of the updated
          terms.
        </p>
      </section>
    </div>
  );
}
