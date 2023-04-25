import Link from "next/link";
import BlogCardPosts from "./componetChildren/BlogCardPosts";
import { Typewriter } from "react-simple-typewriter";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper";

const BlogCard = ({ posts }) => {
  return (
    <>
      <div className="mb-5">
       
        <div className="hidden md:block">
          <Swiper
            spaceBetween={0}
            effect={'slide'}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 7000,
              // disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, EffectFade, Pagination]}
            className="  relative w-[100%] mb-3 md:h-[450px] lg:h-[550px] border rounded-xl "
          
          >
            {posts.map((post0) => (
              <SwiperSlide   key={post0.id} className="overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center border rounded-xl "
                  src={post0.coverPhoto.url}
                  alt=""
                />
                <div className=" border rounded-xl absolute z-[5] top-0 left-0 bg-black w-full h-full opacity-70 " />
                <div className="absolute z-[10] text-white  md:top-[40%] left-[1.5rem] right-[1rem]">
                  <h1 className=" mb-2 font-semibold text-xl md:text-4xl ">
                    {post0.title}
                  </h1>
                  <div className="mb-3 text-sm font-chivo font-normal md:text-xl">
                    <p className=" ">{post0.summary}</p>
                  </div>
                  <Link href={`/posts/${post0.slug}`}>
                    <button className="border rounded-[4px] transition hover:ease-in py-1 px-3 font-medium hover:bg-transparent hover:text-white hover:border-2 bg-white text-slate-800 ">
                      Read more
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
        <div className="text-center my-6">
          <h5 className=" mb-2 text-base md:text-xl font-semibold text-gray-600">
            The Blog
          </h5>
          <div className="text-2xl lg:text-5xl font-semibold text-black">
            <Typewriter
              words={[
                "Writings From Our Team",
                "News at its Best",
                "Trending news to keep you intrigued",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={110}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <h5 className=" my-2 text-base md:text-xl font-semibold text-black">
            The latest news, interviews, technologies, and resources
          </h5>
        </div>
        <BlogCardPosts posts={posts} />
      </div>
    </>
  );
};

export default BlogCard;
