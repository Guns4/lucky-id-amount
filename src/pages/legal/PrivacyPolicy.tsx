import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-10">
      <Helmet>
        <title>Privacy Policy | LuckyGen</title>
        <meta
          name="description"
          content="Privacy Policy of LuckyGen explaining how we collect, use, and protect user information on our website."
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
          LuckyGen respects your privacy and is committed to protecting any
          information you may provide while using our website.
        </p>

        <h2 className="font-semibold text-base">Information We Collect</h2>
        <p>
          We do not require users to create accounts or submit personal
          information. However, we may collect non-personal data such as browser
          type, device information, and usage statistics for analytics and
          website improvement purposes.
        </p>

        <h2 className="font-semibold text-base">Cookies</h2>
        <p>
          LuckyGen may use cookies and similar technologies to enhance user
          experience, analyze traffic, and serve relevant advertisements.
          Users can disable cookies through their browser settings.
        </p>

        <h2 className="font-semibold text-base">Third-Party Services</h2>
        <p>
          We may use third-party services such as analytics providers or
          advertising networks. These services may collect information in
          accordance with their own privacy policies.
        </p>

        <h2 className="font-semibold text-base">Advertising</h2>
        <p>
          Advertisements displayed on LuckyGen may be delivered by advertising
          partners who may use cookies or web beacons to collect non-personal
          information.
        </p>

        <h2 className="font-semibold text-base">Changes to This Policy</h2>
        <p>
          LuckyGen reserves the right to update this Privacy Policy at any time.
          Any changes will be posted on this page.
        </p>

        <h2 className="font-semibold text-base">Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy, please
          contact us through the contact page on our website.
        </p>
      </section>
    </div>
  );
}
