import Image from 'next/image';
import banner_img from '@/assets/images/banner_img.jpg';
const Banner = () => {
  return (
    <section className="bg-[#FFF5F1] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1D1D35] leading-[1.1] uppercase tracking-tight">
            Beauty Salon <br /> For Every Women
          </h1>
          
          <p className="text-[#6B6B84] text-lg max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Purus commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          
          <button className="bg-[#EC4D87] hover:bg-[#d43f75] text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 shadow-sm">
            Get an Appointment
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-lg">
          <div className="relative aspect-[4/5] md:aspect-square w-full">
            <Image
              src={banner_img}
              alt="Beauty Salon Model"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;