import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-10">
      <Helmet>
        <title>Privacy Policy | LuckyGen</title>
        <meta
          name="description"
          content="Privacy Policy explaining how LuckyGen collects, uses, and protects user information."
        />
        <link
          rel="canonical"
          href="https://www.luckygen.click/privacy-policy"
        />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Last updated: {new Date().toDateString()}
      </p>

      <section className="space-y-4 text-sm leading-relaxed">
        <p>
          LuckyGen respects your privacy and is committed to protecting your
          personal information. This Privacy Policy explains how we collect,
          use, and safeguard your data.
        </p>

        <h2 className="font-semibold text-base">Information We Collect</h2>
        <p>
          We do not require users to create accounts. We may collect anonymous
          usage data such as browser type, device information, and page visits
          for analytics purposes.
        </p>

        <h2 className="font-semibold text-base">How We Use Information</h2>
        <p>
          Collected information is used solely to improve website performance,
          functionality, and user experience.
        </p>

        <h2 className="font-semibold text-base">Cookies</h2>
        <p>
          LuckyGen may use cookies or similar technologies to analyze traffic
          and usage patterns. You may disable cookies through your browser
          settings.
        </p>

        <h2 className="font-semibold text-base">Third-Party Services</h2>
        <p>
          We may use third-party tools such as analytics or advertising services
          that collect data in accordance with their own privacy policies.
        </p>

        <h2 className="font-semibold text-base">Policy Changes</h2>
        <p>
          This Privacy Policy may be updated from time to time. Continued use
          of the website constitutes acceptance of the revised policy.
        </p>
      </section>
    </div>
  );
}
