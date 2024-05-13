import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import image from "../assets/textures/texture1.png";
import { FaCircleArrowRight } from "react-icons/fa6";

const Whywe = () => {
  return (
    <Layout>
      <HeroSection title="Why We Choose " image={image} />
      <section className="">
        <div className="w-full">
          <div className="xl:max-w-6xl w-auto mx-auto xl:py-28 md:py-16 py-10 xl:px-0 px-10">
            <h3 className="text-gray-900 text-center lg:text-4xl text-3xl font-bold leading-10 mb-5">
              Why Choose Adna Naturals for Your Baby Care Needs?
            </h3>
            <p className="text-gray-500 text-center text-lg font-normal leading-7 lg:mb-14 mb-6">
              Choosing the right baby care products is essential for your little
              one's health and well-being. At Adna Naturals, we understand the
              importance of providing gentle, safe, and effective care for your
              baby's delicate skin.
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-4 lg:pb-24 pb-10 border-b border-gray-200 max-w-lg mx-auto md:max-w-3xl lg:max-w-full">
              <div className="p-8 group  hover:rounded-2xl transition-all duration-500 hover:shadow-md cursor-pointer">
                <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                  Natural Ingredients
                </h4>
                <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                  Our products are crafted with carefully selected natural
                  ingredients that are gentle on your baby's skin. We believe in
                  harnessing the power of nature to provide nourishing care
                  without the use of harsh chemicals or toxins.
                </p>
              </div>
              <div className="p-8 group hover:rounded-2xl transition-all duration-500 hover:shadow-md cursor-pointer">
                <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                  Safety and Quality
                </h4>
                <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                  Your baby's safety is our top priority. That's why all our
                  products undergo rigorous testing and quality control measures
                  to ensure they meet the highest safety standards. You can
                  trust that our products are safe, effective, and gentle for
                  your little one.
                </p>
              </div>
              <div className="px-8 group pt-8 lg:pb-8 pb-4 transition-all duration-500 hover:rounded-2xl hover:shadow-md cursor-pointer md:col-span-2 lg:col-span-1 md:w-1/2 lg:w-full md:mx-auto">
                <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                  Environmental Responsibility
                </h4>
                <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                  Sustainability is at the core of our brand values. We strive
                  to minimize our environmental footprint by using eco-friendly
                  packaging materials, sourcing responsibly harvested
                  ingredients, and implementing sustainable manufacturing
                  practices
                </p>
              </div>
            </div>
            <div className="lg:mt-24 mt-10 bg-gradient-to-l from-green-100 to-green-600 p-12 rounded-2xl ">
              <div className="lg:flex items-center justify-between gap-6">
                <div className="lg:mb-0 mb-10">
                  <h3 className="text-white font-manrope lg:text-4xl text-3xl font-semibold leading-10 mb-5">
                    trusted partner in your parenting journey
                  </h3>
                  <p className="text-black text-xl font-normal leading-8">
                    Join the thousands of parents who have made the switch to
                    Adna Naturals and experience the difference for yourself.
                  </p>
                </div>
                <button className="px-2.5 h-12 flex items-center justify-center text-white text-lg font-semibold leading-7 gap-2 rounded-full bg-green-900 whitespace-nowrap px-4">
                  {" "}
                  Send Message <FaCircleArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Whywe;
