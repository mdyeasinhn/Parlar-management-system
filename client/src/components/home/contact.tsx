"use client";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form logic here
    console.log("Form Submitted");
  };

  return (
    <section className="bg-[#FFF5F1] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D35] text-center mb-12">
          Let us handle your <br /> project, professionally.
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-[#EC4D87] outline-none text-gray-700 bg-white shadow-sm"
            />
            {/* Last Name */}
            <input
              type="text"
              placeholder="Last Name"
              required
              className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-[#EC4D87] outline-none text-gray-700 bg-white shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-[#EC4D87] outline-none text-gray-700 bg-white shadow-sm"
            />
            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-[#EC4D87] outline-none text-gray-700 bg-white shadow-sm"
            />
          </div>

          {/* Message Area */}
          <textarea
            placeholder="Your Message"
            rows={6}
            required
            className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-[#EC4D87] outline-none text-gray-700 bg-white shadow-sm resize-none"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#EC4D87] hover:bg-[#d43f75] text-white px-10 py-3 rounded-md font-semibold transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;