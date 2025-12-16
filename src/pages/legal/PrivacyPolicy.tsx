import { Helmet } from "react-helmet-async";


export default function PrivacyPolicy() {
return (
<div className="container max-w-3xl mx-auto px-4 py-10">
<Helmet>
<title>Privacy Policy | LuckyGen</title>
<meta name="description" content="Privacy Policy for LuckyGen website." />
<link rel="canonical" href="https://yourdomain.com/privacy-policy" />
</Helmet>


<h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
<p className="text-sm text-muted-foreground">Last updated: {new Date().toDateString()}</p>


{/* Privacy Policy – LuckyGen

At LuckyGen, accessible from our website, protecting your privacy is one of our main priorities. This Privacy Policy document outlines the types of information that are collected and recorded by LuckyGen and how we use it.

Information We Collect

We may collect non-personal information such as browser type, device information, IP address, and usage behavior for analytics and website optimization purposes.

Cookies and Web Beacons

LuckyGen uses cookies to store information about visitors’ preferences and optimize user experience by customizing our web page content based on visitors’ browser type or other information.

Advertising Partners

Some of our advertising partners may use cookies and web beacons. These technologies are used to measure the effectiveness of advertising campaigns and/or to personalize the advertising content that you see.

Third Party Privacy Policies

LuckyGen’s Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of third-party ad servers for more detailed information.

Consent

By using our website, you hereby consent to our Privacy Policy and agree to its terms. */}
</div>
);
}