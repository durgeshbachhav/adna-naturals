import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import products from "../data/products/products.js";
import Card from "../components/Card" 
import image from "../assets/textures/texture1.png";

const Products = () => {
  return (
    <Layout>
      <HeroSection title="Our Quality Products" image={image} />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
