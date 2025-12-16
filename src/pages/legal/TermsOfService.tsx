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


{/* Terms of Service – LuckyGen

By accessing this website, you agree to be bound by these Terms and Conditions of Use. If you do not agree with any of these terms, you are prohibited from using or accessing this site.

Use License

Permission is granted to temporarily download one copy of the materials on LuckyGen’s website for personal, non-commercial transitory viewing only.

Disclaimer

The materials on LuckyGen’s website are provided on an ‘as is’ basis. LuckyGen makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.

Limitations

In no event shall LuckyGen or its suppliers be liable for any damages arising out of the use or inability to use the materials on the website.

Changes

LuckyGen may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.*/}
</div>
);
}