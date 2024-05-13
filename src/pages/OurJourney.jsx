import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import { GiTwirlyFlower } from "react-icons/gi";
import image from "../assets/textures/texture1.png";

import { Link } from "react-router-dom";

const OurJourney = () => {
  return (
    <Layout>
      <HeroSection title="Our Journey" image={image} />
      <div className="about">
        <div className=" py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto  lg:text-center flex flex-col justify-center items-center">
              <h1 className="text-3xl   font-bold   text-center ">
                A Story of Love, Innovation, and Dedication
              </h1>
              <p className=" mt-6 text-lg  max-w-5xl text-center">
                At Adna Earth, our journey is a testament to the power of love,
                innovation, and unwavering dedication. It is a journey that
                spans generations, continents, and countless moments of
                inspiration. Join us as we take you through the remarkable story
                behind our brand.
              </p>
            </div>
            <div className="w-full  mt-8 ">
              <div className=" flex flex-col items-center justify-center gap-4">
                <div className=" flex items-center justify-center flex-col gap-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <h2 className="font-bold text-2xl text-center">
                      {" "}
                      Generations United by Love
                    </h2>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>

                  <p className="  mt-6 text-lg  max-w-5xl text-center">
                    Our journey began with a simple yet profound idea – to
                    create products that embody the love and care passed down
                    through generations. It all started with a grandmother's
                    wisdom, a mother's nurturing touch, and an uncle's
                    protective instincts. United by a shared commitment to
                    providing the best for our babies, we embarked on a journey
                    fueled by love and guided by ancestral knowledge.
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col gap-2 ">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="font-bold text-2xl text-center">
                      Inspiration from Nature's Bounty
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>
                  <p className=" mt-6 text-lg  max-w-5xl text-center ">
                    As we delved into the creation of our products, we found
                    inspiration in the boundless beauty and wisdom of nature.
                    From the lush forests of India to the serene landscapes of
                    Tanzania and the innovative hubs of the USA, we explored the
                    Earth's bounty to discover the finest natural ingredients.
                    Each plant, herb, and extract became a testament to the
                    power of nature in nurturing and caring for our little ones.
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="font-bold text-2xl text-center">
                      Innovating with Purpose
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>

                  <p className=" mt-6 text-lg  max-w-5xl text-center">
                    Driven by a relentless pursuit of excellence, we immersed
                    ourselves in research, development, and innovation. For nine
                    months, we tirelessly worked to formulate products that meet
                    the highest standards of safety, efficacy, and environmental
                    responsibility. Every ingredient, every formulation, and
                    every decision was made with one goal in mind – to create
                    products that parents can trust and babies can thrive on.
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="font-bold text-2xl text-center">
                      A Commitment to Sustainability
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>

                  <p className=" mt-6 text-lg  max-w-5xl text-center">
                    Our journey is not just about creating products – it's about
                    making a positive impact on the world around us. That's why
                    we are committed to sustainability in every aspect of our
                    business. From sourcing eco-friendly ingredients to
                    minimizing our carbon footprint, we strive to leave a
                    lasting legacy of care and responsibility for future
                    generations.
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="font-bold text-2xl text-center">
                      Celebrating Milestones and Moments
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>

                  <p className=" mt-6 text-lg  max-w-5xl text-center">
                    Along the way, we have celebrated countless milestones and
                    cherished moments. From the birth of our brand to the smiles
                    on babies' faces, each moment has been a reminder of why we
                    do what we do. As we continue on our journey, we invite you
                    to join us in celebrating the beauty of nature, the joy of
                    parenthood, and the infinite possibilities that lie ahead.
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                    <div className="text-2xl font-bold">
                      Join Us on the Journey
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                      <GiTwirlyFlower color="green" size={20} />
                    </div>
                  </div>

                  <p className=" mt-6 text-lg  max-w-5xl text-center">
                    As we reflect on our journey so far, we are filled with
                    gratitude for the love and support that has brought us to
                    where we are today. We invite you to join us on this
                    remarkable journey – a journey fueled by love, inspired by
                    nature, and dedicated to creating a brighter, more
                    sustainable future for all.
                  </p>
                </div>
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
                      <div>
                        <p className="text-lg max-w-3xl">
                          Thank you for being a part of our story. Together, we
                          can make a difference – one gentle touch, one loving
                          embrace, and one Earth-friendly product at a time.
                        </p>
                      </div>
                      <Link
                        to={"/products"}
                        className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
                      >
                        Join Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurJourney;
