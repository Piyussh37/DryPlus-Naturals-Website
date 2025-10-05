import React from "react";
// ✅ Import all product images
import Lemon from "../assets/Lemon.png";
import Onion from "../assets/Onion1.png";
import Curry from "../assets/Curry.png";
import Garlic from "../assets/Garlic1.png";
import Ginger from "../assets/Ginger.png";
import Coriander from "../assets/Coriander.png";
import Moringa from "../assets/Moringa.png";
import Mint from "../assets/Mint.png";
import Karela from "../assets/Karela.png";
import Okra from "../assets/Okra.png";
import Fenugreek from "../assets/Fenugreek.png";

const Products = () => {
  const products = [
    {
      name: "Dehydrated Lemon",
      description:
        "Tangy and aromatic, perfect for teas, cooking, and baking",
      image: Lemon,
    },
    {
      name: "Dehydrated Onion",
      description:
        "Concentrated flavor for soups, stews, and seasoning blends",
      image: Onion,
    },
    {
      name: "Curry Leaves",
      description:
        "Essential for South Indian cuisine, rich in antioxidants",
      image: Curry,
    },
    {
      name: "Dehydrated Garlic",
      description:
        "Intense garlic flavor without the mess, great for rubs and marinades",
      image: Garlic,
    },
    {
      name: "Dehydrated Ginger",
      description:
        "Warm and spicy, ideal for teas, curries, and health drinks",
      image: Ginger,
    },
    {
      name: "Dehydrated Coriander",
      description:
        "Fresh herb flavor preserved for year-round use in cooking",
      image: Coriander,
    },
    {
      name: "Moringa Leaves",
      description:
        "Superfood packed with nutrients, perfect for smoothies and teas",
      image: Moringa,
    },
    {
      name: "Mint Leaves",
      description:
        "Refreshing and cooling, great for beverages and desserts",
      image: Mint,
    },
    {
      name: "Dehydrated Karela",
      description:
        "Bitter gourd with health benefits, perfect for traditional recipes",
      image: Karela,
    },
    {
      name: "Dehydrated Okra",
      description:
        "Tender and nutritious, maintains texture when rehydrated",
      image: Okra,
    },
    {
      name: "Fenugreek Leaves",
      description:
        "Aromatic herb with medicinal properties, essential for Indian cooking",
      image: Fenugreek,
    },
  ];

  return (
    <section id="products" className="section-padding bg-warm-beige">
      <div className="container-max">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nature-green mb-6">
            Our Premium Products
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Carefully selected and expertly dehydrated to preserve maximum nutrition,
            flavor, and aroma. Each product is naturally dried without any preservatives.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-nature-green mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-fresh-green font-semibold">
                    Premium Quality
                  </span>
                  <button className="text-nature-green hover:text-fresh-green transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

