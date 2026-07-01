import Image from 'next/image';
import service_img from '@/assets/images/service_img.jpg';
const ServiceOverview = () => {
  return (
    <section className="bg-[#FFF5F1] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

        {/* Left Side: Image */}
        <div className="flex-1 w-full">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={service_img}
              alt="Professional Skin Care"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D35] leading-tight">
            Let us handle your <br />
            screen <span className="text-[#EC4D87]">Professionally</span>.
          </h2>

          <p className="text-[#6B6B84] text-base md:text-lg leading-relaxed max-w-lg">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>

          {/* Stats Section */}
          <div className="flex gap-12 pt-4">
            {/* Stat 1 */}
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-[#EC4D87]">500+</h3>
              <p className="text-[#1D1D35] font-medium">Happy Customer</p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-[#EC4D87]">16+</h3>
              <p className="text-[#1D1D35] font-medium">Total Service</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceOverview;