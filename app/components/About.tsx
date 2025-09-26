import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpg" // replace with real about image
            alt="About Fizsee Designs"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Trust in <span className="text-primary">Excellence</span>, Build
            with Precision.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Established in 2021, Fizsee Design has grown into a trusted name in
            construction, interiors, and exterior fabrications. We blend design
            innovation, engineering expertise, and uncompromising quality to
            deliver spaces that inspire.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center md:text-left mb-8">
            <div>
              <h3 className="text-2xl font-bold text-primary">35K+</h3>
              <p className="text-gray-600 text-sm">Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">40K+</h3>
              <p className="text-gray-600 text-sm">Units Ready</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">10K+</h3>
              <p className="text-gray-600 text-sm">Units Sold</p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-lg hover:bg-[#233720] transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
