import Layout from "../components/Layout";
import SwiperComponent from "../servicesComponent/Swiper";
import Card from "../components/Card";
import ReviewCard from "../components/ReviewCard";
import blogs from "../data/blogs/blogsdata.js";
import products from "../data/products/products.js";
import reviewData from "../data/reviews/reviews.json";
import Blog from "../components/Blog.jsx";
const Home = () => {
  return (
    <Layout>
      <SwiperComponent />
      {/* card start */}
      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <h2 className="font-manrope font-bold text-4xl text-black mb-8  text-center">
            Product list
          </h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* card end */}

      {/* blog start */}
      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-4xl text-black mb-8  text-center">
            Our Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.slice(0, 4).map((blog, index) => (
              <Blog key={index} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* blog end */}

      {/* review start */}
      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-4xl text-black mb-8  text-center">
            Our Reviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewData.reviews.slice(0, 3).map((review, index) => (
              <ReviewCard key={index} reviewdata={review} />
            ))}
          </div>
        </div>
      </section>
      {/* review end */}
    </Layout>
  );
};

export default Home;
