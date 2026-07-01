import Image from 'next/image';

const services = [
  {
    id: 1,
    title: "Anti Age Face Treatment",
    price: "$199",
    description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product.",
    image: "/service1.png" // Replace with your local image path
  },
  {
    id: 2,
    title: "Hair Color & Styleing",
    price: "$99",
    description: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    image: "/service2.png" // Replace with your local image path
  },
  {
    id: 3,
    title: "Skin Care Treatment",
    price: "$299",
    description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    image: "/service3.png" // Replace with your local image path
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F1F1F] mb-16">
          Our Awesome <span className="text-[#F63E7B]">Services</span>
        </h2>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 group
                ${index === 1 
                  ? 'shadow-[0px_20px_40px_rgba(0,0,0,0.08)] bg-white scale-105 z-10' 
                  : 'hover:shadow-lg bg-transparent'
                }`}
            >
              {/* SERVICE ICON */}
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-[#FFF0F5] group-hover:bg-[#F63E7B]/10 transition-colors">
                <div className="relative w-12 h-12">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-2 leading-tight">
                {service.title}
              </h3>

              {/* PRICE */}
              <p className="text-[#F63E7B] font-bold text-lg mb-4">
                {service.price}
              </p>

              {/* DESCRIPTION */}
              <p className="text-[#666666] text-sm leading-relaxed max-w-[280px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* EXPLORE BUTTON */}
        <div className="flex justify-center">
          <button className="bg-[#F63E7B] text-white px-10 py-3 rounded-lg font-medium text-sm hover:bg-[#e0306c] transition-all transform active:scale-95 shadow-md">
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
}