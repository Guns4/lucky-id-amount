import { Helmet } from "react-helmet-async";


export default function PrivacyPolicy() {
return (
<div className="container max-w-3xl mx-auto px-4 py-10">
<Helmet>
<title>Privacy Policy | LuckyGen</title>
<meta name="description" content="Privacy Policy for LuckyGen website." />
<link rel="canonical" href="https://www.luckygen.click/privacy-policy" />
</Helmet>


<h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
<p className="text-sm text-muted-foreground">Last updated: {new Date().toDateString()}</p>


{/* Paste content here */}
</div>
);
}