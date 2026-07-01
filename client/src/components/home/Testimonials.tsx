import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Nash Patrik",
    role: "CEO, Manpol",
    image: "/avatar1.png", // Replace with your actual image paths
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
    rating: 5
  },
  {
    id: 2,
    name: "Miriam Barron",
    role: "CEO, Manpol",
    image: "/avatar2.png", 
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
    rating: 5
  },
  {
    id: 3,
    name: "Bria Malone",
    role: "CEO, Manpol",
    image: "/avatar3.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F1F1F] mb-16">
          Testimonials
        </h2>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <div key={item.id} className="flex flex-col space-y-4">
              {/* PROFILE HEADER */}
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F1F1F] leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-[#4A4A4A]">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* REVIEW TEXT */}
              <p className="text-[#707070] leading-relaxed text-base">
                {item.review}
              </p>

              {/* STAR RATING */}
              <div className="flex space-x-1">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#FFAC0C]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          <button 
            className="w-3 h-3 rounded-full bg-[#1F1F1F]" 
            aria-label="Page 1"
          />
          <button 
            className="w-3 h-3 rounded-full bg-[#E1E1E1] hover:bg-gray-400 transition-colors" 
            aria-label="Page 2"
          />
          <button 
            className="w-3 h-3 rounded-full bg-[#E1E1E1] hover:bg-gray-400 transition-colors" 
            aria-label="Page 3"
          />
        </div>
      </div>
    </section>
  );
}