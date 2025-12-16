import { Helmet } from "react-helmet-async";


export function AboutUs() {
return (
<div className="container max-w-3xl mx-auto px-4 py-10">
<Helmet>
<title>About Us | LuckyGen</title>
<meta
name="description"
content="Learn more about LuckyGen, a global platform providing lucky number and amount generators."
/>
<link rel="canonical" href="https://www.luckygen.click/about-us" />
</Helmet>


<h1 className="text-2xl font-bold mb-4">About LuckyGen</h1>


<section className="space-y-4 text-sm leading-relaxed">
<p>
LuckyGen is a digital platform designed to help users generate visually
appealing and psychologically attractive number patterns.
</p>


<p>
Our tools are used globally for inspiration, experimentation, and
entertainment. We focus on simplicity, accessibility, and performance
across all devices.
</p>


<p>
LuckyGen is not affiliated with any gambling operators or financial
institutions. The platform operates independently as an informational
tool.
</p>
</section>
</div>
);
}


export default AboutUs;