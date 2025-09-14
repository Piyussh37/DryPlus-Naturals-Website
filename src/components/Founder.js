import React from 'react';

const Founder = () => {
  return (
    <section id="founder" className="section-padding bg-warm-beige">
      <div className="container-max">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square lg:aspect-auto lg:h-full">
                <img 
                  src="/products/Founder.jpg"
                  alt="Founder of Dry Plus Naturals"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-green/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-nature-green font-semibold text-sm">Founder & Owner</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-nature-green mb-4">
                  Meet Our Founder
                </h2>
                <h3 className="text-xl text-fresh-green font-semibold mb-2">
                  Pratik Mahajan
                </h3>
                <p className="text-gray-600 text-sm uppercase tracking-wide">
                Bachelor of Business Administration
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  "My journey began with a simple belief: that nature's gifts should be 
                  preserved and shared without compromise. After years of witnessing 
                  the decline in food quality and the increasing use of harmful 
                  preservatives, I knew there had to be a better way."
                </p>
                
                <p>
                  "At Dry Plus Naturals, we're not just dehydrating vegetables and herbs – 
                  we're preserving the essence of nature itself. Our mission is to provide 
                  families with healthy, preservative-free food that maintains its nutritional 
                  value and extends shelf life naturally."
                </p>
                
                <p>
                  "Every product we create is a testament to our commitment to quality, 
                  sustainability, and the belief that good food should nourish both body 
                  and soul. We're proud to be part of your journey toward healthier living."
                </p>
              </div>

              {/* Founder Stats */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                {/* <div className="text-center">
                  <div className="text-2xl font-bold text-nature-green">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div> */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-nature-green">100%</div>
                  <div className="text-sm text-gray-600">Natural Products</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-2xl font-bold text-nature-green">5000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div> */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-nature-green">11</div>
                  <div className="text-sm text-gray-600">Product Varieties</div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-20 p-6 bg-nature-green/5 rounded-xl border-l-4 border-fresh-green">
                <blockquote className="text-gray-700 italic">
                "Building Dry Plus Naturals isn't just about business, it's about creating a healthier tomorrow with every product we deliver."
                </blockquote>
                <cite className="text-sm text-fresh-green font-medium mt-2 block">
                  — Pratik Mahajan, Founder
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
