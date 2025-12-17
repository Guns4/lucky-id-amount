<<<<<<< HEAD
import { Helmet } from "react-helmet-async";


interface FAQItem {
question: string;
answer: string;
}


interface FaqSchemaProps {
items: FAQItem[];
}


export default function FaqSchema({ items }: FaqSchemaProps) {
const schema = {
"@context": "https://schema.org",
"@type": "FAQPage",
mainEntity: items.map((item) => ({
"@type": "Question",
name: item.question,
acceptedAnswer: {
"@type": "Answer",
text: item.answer,
},
})),
};


return (
<Helmet>
<script type="application/ld+json">
{JSON.stringify(schema)}
</script>
</Helmet>
);
=======
import { Helmet } from "react-helmet-async";


interface FAQItem {
question: string;
answer: string;
}


interface FaqSchemaProps {
items: FAQItem[];
}


export default function FaqSchema({ items }: FaqSchemaProps) {
const schema = {
"@context": "https://schema.org",
"@type": "FAQPage",
mainEntity: items.map((item) => ({
"@type": "Question",
name: item.question,
acceptedAnswer: {
"@type": "Answer",
text: item.answer,
},
})),
};


return (
<Helmet>
<script type="application/ld+json">
{JSON.stringify(schema)}
</script>
</Helmet>
);
>>>>>>> 97c73a6 (update)
}