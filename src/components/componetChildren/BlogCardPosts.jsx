// import React from "react";
// import Link from "next/link";

// const BlogCardPosts = ({ posts }) => {
//   return (
//     <div>
//       <h3>Trending News</h3>
//       <div className="grid justify-center gap-5 md:grid-cols-3 ">
//         {posts.map((post) => (
//           <div key={post.id} className="w-100% p-2 h-[300px] md:h-[400px]  shadow shadow-lg hover:shadow-2xl rounded-lg ">
//             <Link href={`/posts/${post.slug}`}>
//             <img className="w-[100%] border-0 rounded-md  md:h-[50%]" src={post.coverPhoto.url} alt="" />
//             <div className="mt-4">
//             <h3 className="  mb-1 text-gray-600" >{post.author.name} - {post.datePublished}</h3>

//             <h2 className=" mb-1 font-semibold text-lg">{post.title}</h2>

//             {/* <div className="text-sm text-gray-600"  ></div> */}
//             <div
//              {...post.sumaryContent && post.sumaryContent.sumary && (
//                 <div dangerouslySetInnerHTML={{ __html: post.sumaryContent.sumary.html }} />
//               )}
//           ></div>
//             </div>

//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogCardPosts;
import React from "react";
import Link from "next/link";

const BlogCardPosts = ({ posts }) => {
  return (
    <div>
      <h3 className="text-gray-600 font-semibold">Trending News</h3>
      <div className="grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 ">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="w-100% p-2 h-[350px] md:h-[420px] lg:h-[400px]  shadow-lg transition hover:ease-in hover:shadow-2xl rounded-lg "
          >
            <Link href={`/posts/${post.slug}`}>
              <img
                className="w-[100%] md:w-[100%]  object-cover md:m-0 m-auto border-0 rounded-md xxs:h-[20%]  h-[40%] md:h-[45%] lg:h-[50%]"
                src={post.coverPhoto.url}
                alt=""
              />

              <div className="mt-4">
                <h3 className="  mb-1 text-gray-600">
                  {post.author.name} - {post.datePublished}
                </h3>
                <h2 className=" mb-1 font-medium text-lg">{post.title}</h2>
                <p className="mb-2 text-xs md:text-[13px] font-poppins font-normal  text-gray-600 ">
                  {post.summary}
                </p>
                <button className="border transition hover:ease-in rounded-[4px] py-1 px-3 font-medium hover:bg-transparent hover:text-black hover:border-2 hover:border-black bg-black text-white">
                  Read More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCardPosts;
