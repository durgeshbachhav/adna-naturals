import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import image from "../assets/textures/texture1.png";
import { Link } from "react-router-dom";
import earth from "../assets/earth.jpg";
import about1 from "../assets/about1.png";

const About = () => {
  return (
    <Layout>
      <HeroSection title="About Us" image={image} />
      {/*  */}
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
            <div className="w-full lg:w-1/2">
              <h2 className="font-bold text-2xl px-6 text-center md:text-start md:px-0">
                Nurturing Generations, Nurturing Nature
              </h2>
              <p className="text-lg py-5 text-center md:text-start">
                Welcome to Adna Earth, where our story is a testament to the
                enduring power of love, family, and our deep connection to the
                earth.
              </p>

              <h2 className="font-bold text-2xl text-center md:text-start">
                A Journey of Love and Care
              </h2>

              <p className="text-lg text-center md:text-start">
                Adna Earth was born from the collective wisdom and love of three
                generations – a grandmother, a mother, and an uncle – who shared
                a vision of providing the purest, most nurturing care for babies
                worldwide. Our journey began with a simple yet profound desire
                to create products that reflect the natural goodness of our
                ancestors' remedies while embracing modern science and
                sustainability.
              </p>
            </div>
            {/* images */}
            <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
              <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                <img
                  src={about1}
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
                />
                <img
                  src={about1}
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
                />
                <img
                  src={about1}
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
                />
                <img
                  src={about1}
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
                />
                <img
                  src={about1}
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
                />
                <img
                  src={about1}
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <div className=" py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            <div className="p-2 rounded-lg lg:border-2 ">
              <h2 className="my-4 text-3xl text-center  font-bold   md:mb-6 md:text-left peer ">
                Our Mission
              </h2>
              <h2 className="mb-4 text-2xl text-center  font-bold   md:mb-6 md:text-left ">
                Building Trust with Skincare
              </h2>

              <p className="mb-6 bg-green-200 rounded-lg text-lg md:mb-8 peer-hover:border-2 peer-hover:rounded-lg peer-hover:bg-[#A91D3A] peer-hover:text-white peer-hover:shadow-lg p-4">
                Our mission is simple yet profound: to provide the most
                earth-friendly, safe products for your baby. We strive to
                elevate standards in baby care by carefully crafting products
                that are not only gentle on your baby's skin but also on our
                planet. With Link commitment to using only the purest,
                plant-based ingredients, we ensure that every product is free
                from toxins and harmful chemicals.
              </p>
            </div>
            <div className="lg:border-2 p-2 rounded-lg ">
              <h2 className="my-4 text-3xl text-center  font-bold   md:mb-6 md:text-left peer ">
                Our Vision
              </h2>
              <h2 className="mb-4 text-2xl text-center  font-bold   md:mb-6 md:text-left ">
                Babies Safety First, the Natural Way
              </h2>

              <p className="mb-6 bg-green-200 rounded-lg text-lg md:mb-8 peer-hover:border-2 peer-hover:rounded-lg peer-hover:bg-[#A91D3A] peer-hover:text-white peer-hover:shadow-lg p-4">
                At Adna Naturals, we envision Link world where every baby is
                nurtured with love and care, using products that are not only
                safe but also environmentally responsible. Our unified vision
                prioritizes the well-being of babies while promoting
                sustainability and purity in everything we do.
              </p>
            </div>
            <div className="lg:border-2 p-2 rounded-lg ">
              <h2 className="my-4 text-3xl text-center  font-bold   md:mb-6 md:text-left peer ">
                Core Values
              </h2>
              <h2 className="mb-4 text-2xl text-center  font-bold   md:mb-6 md:text-left ">
                Empathy, Sensitivity, and Environmental Responsibility
              </h2>

              <p className="mb-6 bg-green-200 rounded-lg text-lg md:mb-8 peer-hover:border-2 peer-hover:rounded-lg peer-hover:bg-[#A91D3A] peer-hover:text-white peer-hover:shadow-lg p-4">
                We are driven by core values that guide us in every aspect of
                our business. Our empathy for both the earth and your baby's
                skin fuels our commitment to creating products that are not only
                effective but also environmentally friendly. With Link
                zero-tolerance policy for toxicity, we ensure that every product
                is Link testament to nature's best.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
              <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
                Nurturing the Earth and Your Baby
              </h2>
              <p className="mb-8 max-w-md text-gray-400">
                We invite you to become a part of our global family, where each
                purchase is a step towards a brighter, greener future for
                generations to come.
              </p>
              <div className="mt-auto">
                <Link
                  to={"/products"}
                  className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  Join Now
                </Link>
              </div>
            </div>
            <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
              <img
                src={earth}
                loading="lazy"
                alt="Photo by Dom Hill"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </Layout>
  );
};

export default About;
