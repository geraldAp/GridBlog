import Link from "next/link";
import styles from "../styles/BlogCard.module.css";
import BlogCardPosts from "./componetChildren/BlogCardPosts";
import { Typewriter } from "react-simple-typewriter";
{
  /* <BlogCard
title={post.title}
author={post.author}
coverPhoto={post.coverPhoto}
datePublished={post.datePublished}
slug={post.slug}
key={post.id}
/> */
  {
    /* <div className=" w-3/4 py-32 m-auto grid justify-center gap-5 md:grid-cols-2">
{posts.map((post) => (
  <div key={post.id} className="border rounded-xl h-96 w-96">
    <Link href={`/posts/${post.slug}`}>
      <img className="h-[200px] w-[400px]" src={post.coverPhoto.url} alt="" />
    </Link>
    <div>
      <h2>{post.title}</h2>
      <div>
        <div className="p-4 flex gap-2 items-center">
          <img
            className="rounded-[50%] h-16 w-16"
            src={post.author.avatar.url}
            alt=""
          />
          <h3>{post.author.name}</h3>
        </div>
        <div>
          <h3>{post.datePublished}</h3>
        </div>
      </div>
    </div>
  </div>
))}
</div> */
  }
}

const BlogCard = ({ posts }) => {
  return (
    <>
      <div className="mb-5">
        <div className="text-center mb-6">
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
          <h5 className=" my-2 text-base md:text-xl font-semibold text-gray-600">
            The latest news, interviews, technologies, and resources
          </h5>
        </div>

        <div className="relative hidden md:block w-[100%] h-[300px] mb-3 md:h-[400px] border rounded-xl ">
          <img
            className="w-full h-full border rounded-xl "
            src={posts[0].coverPhoto.url}
            alt=""
          />
          <div className=" border rounded-xl absolute z-[5] top-0 left-0 bg-black w-full h-full opacity-70 " />
          <div className="absolute z-[10] text-white top-[100px] md:top-[150px] left-[1.5rem] right-[1rem]">
            <h1 className=" mb-2 font-semibold text-xl md:text-4xl ">
              {posts[0].title}
            </h1>
            <div className="mb-3 text-sm font-chivo font-normal md:text-xl">
              <p className=" hidden md:block">{posts[0].summary}</p>
            </div>
            <Link href={`/posts/${posts[0].slug}`}>
              <button className="border rounded-[4px] py-1 px-3 font-medium hover:bg-transparent hover:text-white hover:border-2 bg-white text-slate-800 ">
                Read more
              </button>
            </Link>
          </div>
        </div>
        <BlogCardPosts posts={posts} />
      </div>
    </>
  );
};

export default BlogCard;
