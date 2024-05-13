import HeroSection from "../../components/HeroSection";
import image from "../../assets/textures/texture1.png";
import Layout from "../../components/Layout";
import { policy } from "../../data/privacypolicy/PrivactPolicy";

const Privacy = () => {
  return (
    <Layout>
      <HeroSection title="Privacy Policy" image={image} />

      <div className="flex items-center justify-center flex-col  py-20   ">
        <ul className="max-w-2xl mx-4 mt-20 divide-y gap-2  rounded-xl">
          {policy.map((data, index) => (
            <li key={index} className="w-full">
              <details className="group w-72   md:w-96">
                <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer bg-leaf mb-2">
                  <svg
                    className="w-5 h-5 text-heading-color transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                  <span className="text-heading-color max-w-sm primary-font">
                    {data.heading}
                  </span>
                </summary>

                <article className="px-4 pb-4 py-2 max-w-sm bg-yellow-500 rounded-sm">
                  <p className="secondary-font">{data.description}</p>
                </article>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Privacy;
