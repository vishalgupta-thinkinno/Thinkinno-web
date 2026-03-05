
import React from "react";
import { useSelector } from "react-redux";
import {
  FaCode,
  FaMobileAlt,
  FaBrain,
  FaLightbulb,
  FaSearch,
  FaMoneyBill,
  FaQuoteLeft
} from "react-icons/fa";

function Services() {

const content = useSelector((state) => state.textContentSlice?.[0]);

const servicesPage = content?.pages?.find(
(page) => page.id === "page3"
);

const hero = servicesPage?.sections?.[0];
const intro = servicesPage?.sections?.[1];
const whatWeDo = servicesPage?.sections?.[2];
const services = servicesPage?.sections?.[3];
const testimonials = servicesPage?.sections?.[4];

if (!hero) return <h2 className="text-center mt-10">Loading...</h2>;

const icons = [
<FaCode />,
<FaMobileAlt />,
<FaBrain />,
<FaLightbulb />,
<FaSearch />,
<FaMoneyBill />
];

const testimonialImages = [
"https://www.thinkinno.com/wp-content/uploads/2023/07/Craig-2.jpg",
// "https://randomuser.me/api/portraits/women/44.jpg",
// "https://randomuser.me/api/portraits/women/65.jpg",
// "https://randomuser.me/api/portraits/men/12.jpg",
// "https://randomuser.me/api/portraits/men/15.jpg",
// "https://randomuser.me/api/portraits/men/25.jpg"
];

return (
<div>

{/* HERO */}

<section
className="relative h-[350px] flex items-center justify-center text-white"
style={{
background: `url(${hero.imageLink}) center/cover no-repeat`
}}
>
<div className="absolute inset-0 bg-black/50"></div>

<h1 className="relative text-4xl md:text-5xl font-bold">
{hero.title}
</h1>

</section>


{/* INTRO */}

<section className="py-16">

<div className="max-w-6xl mx-auto px-6 text-center text-gray-600">

<p>{intro.subheading1}</p>

<p className="mt-4">{intro.subheading2}</p>

<p className="mt-4">{intro.subheading3}</p>

</div>

</section>


{/* WHAT WE DO */}

<section className="bg-gray-100 py-16">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

<img
src={whatWeDo.imageLink}
alt="What we do"
className="w-full"
/>

<div>

<h2 className="text-3xl font-bold mb-4">
{whatWeDo.title}
</h2>

<p className="text-gray-600 mb-6">
{whatWeDo.subheading}
</p>

<button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">
{whatWeDo.button}
</button>

</div>

</div>

</section>


{/* SERVICES */}

<section className="bg-gray-100 py-16">

<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-12">

<p className="text-red-600 font-semibold">
{services.title1}
</p>

<h2 className="text-3xl font-bold">
{services.title2}
</h2>

<p className="text-gray-500">
{services.subheading}
</p>

</div>


<div className="grid md:grid-cols-3 gap-6">

{[1,2,3,4,5,6].map((num,index)=>{

const title = services[`serviceTitle${num}`];
const desc = services[`serviceDesc${num}`];

return(

<div
key={index}
className="bg-gray-200 p-8 text-center rounded hover:-translate-y-2 transition shadow-sm"
>

<div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center rounded-full mx-auto text-2xl">
{icons[index]}
</div>

<h4 className="font-bold mt-4">{title}</h4>

<p className="text-gray-600 mt-2 text-sm">
{desc}
</p>

</div>

)

})}

</div>


<div className="text-center mt-10">

<button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">
{services.button}
</button>

</div>

</div>

</section>


{/* TESTIMONIAL */}

<section className="bg-gray-100 py-16">

<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-12">

<span className="bg-red-600 text-white px-4 py-1 text-sm font-semibold">
{testimonials.title1}
</span>

<h2 className="text-3xl font-bold mt-4">
{testimonials.title2}
</h2>

</div>


<div className="grid md:grid-cols-3 gap-6">

{[1,2,3,4,5,6].map((num,index)=>{

return(

<div key={index} className="border p-6 rounded-md">

<div className="flex items-center gap-3 text-xl font-semibold text-gray-700">

<FaQuoteLeft className="text-gray-400 text-2xl" />

<span>{testimonials[`serviceType${num}`]}</span>

<span className="text-lg">
{testimonials[`country${num}`]}
</span>

</div>


<div className="flex mt-5 gap-4">

<img
src={testimonialImages[index]}
alt="client"
className="w-16 h-16 object-cover rounded-full border"
/>

<div>

<p className="text-gray-600 text-sm leading-relaxed">
{testimonials[`review${num}`]}
</p>

<a
href="#"
className="text-gray-700 text-sm font-medium hover:underline"
>
{testimonials[`readMore${num}`]}
</a>

<p className="mt-3 text-gray-700 font-medium">
{testimonials[`clientName${num}`]}
</p>

<p className="text-gray-500 text-sm">
{testimonials[`clientCompany${num}`]}
</p>

</div>

</div>

</div>

)

})}

</div>


<div className="text-center mt-10">

<button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">
{testimonials.button}
</button>

</div>

</div>

</section>

</div>
);
}

export default Services;
