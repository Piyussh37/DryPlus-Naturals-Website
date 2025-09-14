import React from 'react';

const About = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: '100% Natural',
      description: 'No preservatives, additives, or artificial chemicals. Pure, natural goodness.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Long Shelf Life',
      description: 'Properly dehydrated products last up to 2 years while maintaining quality.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Nutrient Rich',
      description: 'Our process preserves essential vitamins, minerals, and antioxidants.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Convenient',
      description: 'Easy to store, transport, and use. Perfect for busy lifestyles.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nature-green mb-6">
              About Dry Plus Naturals
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Dry Plus Naturals, we believe in preserving nature's bounty through 
              traditional dehydration methods combined with modern quality standards. 
              Our mission is to bring you the freshest, most nutritious dehydrated 
              vegetables and herbs.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We carefully select the finest fresh produce and use gentle dehydration 
              techniques that preserve maximum nutrients, flavor, and aroma. Each product 
              is processed in small batches to ensure consistent quality and taste.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-fresh-green rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Traditional Methods:</strong> We use time-tested dehydration techniques 
                  that have been refined over generations.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-fresh-green rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Quality Control:</strong> Every batch is tested for moisture content, 
                  flavor, and nutritional value.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-fresh-green rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Sustainable:</strong> Our process reduces food waste and extends 
                  the life of fresh produce.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dehydration process"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-green/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <h3 className="font-semibold text-nature-green mb-2">Our Process</h3>
              <p className="text-sm text-gray-600">
                Fresh produce → Cleaning → Slicing → Dehydration → Quality Check → Packaging
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-nature-green mb-12">
            Why Choose Our Products?
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-warm-beige hover:bg-fresh-green hover:text-white transition-all duration-300 group"
              >
                <div className="text-fresh-green group-hover:text-white mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3 group-hover:text-white">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-200">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
