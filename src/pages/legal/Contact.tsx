import { Helmet } from "react-helmet-async";


export default function Contact() {
return (
<div className="container max-w-3xl mx-auto px-4 py-10">
<Helmet>
<title>Contact Us | LuckyGen</title>
<meta
name="description"
content="Contact LuckyGen for questions, feedback, or business inquiries."
/>
<link rel="canonical" href="https://www.luckygen.click/contact" />
</Helmet>


<h1 className="text-2xl font-bold mb-4">Contact Us</h1>


<section className="space-y-4 text-sm leading-relaxed">
<p>
We welcome feedback, suggestions, and general inquiries regarding
LuckyGen.
</p>


<p>
Please reach us via email:
<br />
<strong>support@luckygen.click</strong>
</p>


<p>
We aim to respond to all legitimate inquiries within a reasonable time
frame.
</p>
</section>
</div>
);
}