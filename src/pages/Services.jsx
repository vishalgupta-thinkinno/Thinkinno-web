import React from "react";
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
  const services = [
    {
      icon: <FaCode />,
      title: "Web Apps",
      desc: "The custom-based web application projects help to take care of the problems/challenges in the business or to increase customer delight."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      desc: "The custom-based mobile applications help to take care of the problems/challenges in the business to perform, monitor, enable better decisions, and meet their business goals."
    },
    {
      icon: <FaBrain />,
      title: "AI-based Apps",
      desc: "Experience AI in action with LIVE projects, from Speech to Text, Text to Speech, Face Recognition, Object Recognition, Data Analytics, Predictive Analytics, Knowledgebank Search, and much more."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Consulting",
      desc: "We know how to apply unique ideas in any capacity. If your business requires attention, we can help develop a solution that tackles the problem in an innovative way."
    },
    {
      icon: <FaSearch />,
      title: "Software Testing Services",
      desc: "You got the project developed but need help testing it. We can test your project manually and through scripts and can give you a list of errors in your project."
    },
    {
      icon: <FaMoneyBill />,
      title: "Finance Based Projects",
      desc: "Developed various projects like Will Mgmt., Loan Mgmt., Competitive Analysis, Forecasting, Interest Rate Risk Mgmt., Goal Mgmt., FDIC Data Analysis, Banks Budgeting & much more."
    }
  ];

  const testimonials = [
    {
      name: "Mr. Craig Hartman",
      company: "Plansmith Corporation (USA)",
      review: "Love this company",
      flag: "🇺🇸",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Ms. Susan West",
      company: "Plansmith Corporation (USA)",
      review: "Hiring a company to code",
      flag: "🇺🇸",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Ms. Gargi Bhave",
      company: "Ameretat Technologies (INDIA)",
      review: "We contacted Thinkinno",
      flag: "🇮🇳",
      img: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Mr. Preetish Gupta",
      company: "Doodle Worldwide (UAE)",
      review: "I worked with Thinkinno",
      flag: "🇦🇪",
      img: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      name: "Mr. C Hartman",
      company: "Plansmith Corporation (USA)",
      review: "Thinkinno has been with",
      flag: "🇺🇸",
      img: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      name: "Mr. George Mueller",
      company: "Plansmith Corporation (USA)",
      review: "Thinkinno has done an excellent",
      flag: "🇺🇸",
      img: "https://randomuser.me/api/portraits/men/25.jpg"
    }
  ];

  return (
    <div>
      <section
        className="relative h-[350px] flex items-center justify-center text-white"
        style={{
          background:
            "url(https://www.thinkinno.com/wp-content/uploads/2023/08/BannerImage.jpg) center/cover no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold">Services</h1>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
          <p>We are passionate about delivering software solutions. It is not about just developing solutions, but adding value to our business partners by understanding and analyzing their need.</p>
          <p className="mt-4">We are specialized in developing software solutions and exploit the experience and capability to develop faster and better.</p>
          <p className="mt-4">With great teamwork and diverse specialists, we aspire to develop and deliver solutions that are inspirational.</p>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://www.thinkinno.com/wp-content/uploads/2023/09/whatwedo.png"
            alt="What We Do"
            className="w-full"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-600 mb-6">
              We develop an understanding of requirements and build custom software solutions. We combine creativity and technical know-how to build custom business experiences.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">
              Contact Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold">Services</p>
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-gray-500">Varied varieties of services to enable your business growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-200 p-8 text-center rounded hover:-translate-y-2 transition shadow-sm">
                <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center rounded-full mx-auto text-2xl">
                  {service.icon}
                </div>
                <h4 className="font-bold mt-4">{service.title}</h4>
                <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="bg-red-600 text-white px-4 py-1 text-sm font-semibold">
              TESTIMONIAL
            </span>
            <h2 className="text-3xl font-bold mt-4">What Clients' Says</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="border p-6 rounded-md">
                <div className="flex items-center gap-3 text-xl font-semibold text-gray-700">
                  <FaQuoteLeft className="text-gray-400 text-2xl" />
                  <span>Custom Apps</span>
                  <span className="text-lg">{item.flag}</span>
                </div>

                <div className="flex mt-5 gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover border"
                  />
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.review}
                    </p>
                    <a href="#" className="text-gray-700 text-sm font-medium hover:underline">
                      Read more
                    </a>
                    <p className="mt-3 text-gray-700 font-medium">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;