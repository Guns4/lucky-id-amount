import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-10">
      <Helmet>
        <title>Contact Us | LuckyGen</title>
        <meta
          name="description"
          content="Contact LuckyGen team for support, inquiries, or feedback."
        />
        <link rel="canonical" href="https://www.luckygen.click/contact" />
      </Helmet>

      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>

      <p className="text-muted-foreground mb-6">
        If you have any questions, feedback, or partnership inquiries, please
        reach out to us.
      </p>

      <ul className="space-y-2 text-sm">
        <li>Email: support@luckygen.click</li>
        <li>Website: https://www.luckygen.click</li>
      </ul>
    </div>
  );
}
