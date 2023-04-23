// import { GraphQLClient, gql } from "graphql-request";

// const graphCms = new GraphQLClient(
//   "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clgowzcyf74ut01t2cog0fw3k/master"
// );

// const QUERY = gql`
//   query Post($slug: String!) {
//     post(where: { slug: $slug }) {
//       id
//       title
//       slug
//       coverPhoto {
//         url
//       }
//       content {
//         html
//       }
//       datePublished
//       author {
//         id
//         name
//         avatar {
//           url
//         }
//       }
//     }
//   }
// `;

// const SLUGLIST = gql`
//   {
//     posts {
//       slug
//     }
//   }
// `;

// export async function getStaticPaths() {
//   const { posts } = await graphCms.request(SLUGLIST);
//   return {
//     paths: posts.map((post) => ({ params: { slug: post.slug } })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const slug = params.slug;
//   const data = await graphCms.request(QUERY, { slug });
//   const post = data.post;
//   return {
//     props: {
//       post,
//     },
//     revalidate: 5,
//   };
// }

// const BlogPost = ({ post }) => {
//   return (
//     <main className="w-[90%]  m-auto">
//       <div className="w-full ">
//         <img
//           className=" mb-1 h-60 md:h-[350px] lg:h-[450] border rounded-xl"
//           src={post.coverPhoto.url}
//           alt=""
//         />
//         <h3 className="  mb-1 text-gray-600">
//           {post.author.name} - {post.datePublished}
//         </h3>
//         <h2 className=" mb-1 font-bold text-xl md:text-2xl">{post.title}</h2>
//         <div className="mb-3  text-gray-600 text-sm md:text-base text-left md:text-justify  font-normal " dangerouslySetInnerHTML={{__html: post.content.html}}>

//       </div>
//       </div>
//     </main>
//   );
// };

// export default BlogPost;

import { GraphQLClient, gql } from "graphql-request";
import { useRouter } from "next/router";

const graphCms = new GraphQLClient(
  process.env.GRAPH_CMS_API_KEY
);

const POST_QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      coverPhoto {
        url
      }
      content {
        html
      }
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
    }
  }
`;

const SLUGLIST_QUERY = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphCms.request(SLUGLIST_QUERY);
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphCms.request(POST_QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 5,
  };
}

const BlogPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-[90%]  m-auto">
      <div className="w-full ">
        <img
          className=" mb-1 h-60 md:h-[350px] lg:h-[450] border rounded-xl"
          src={post.coverPhoto.url}
          alt=""
        />
        <h3 className="  mb-1 text-gray-600">
          {post.author.name} - {post.datePublished}
        </h3>
        <h2 className=" mb-1 font-bold text-xl md:text-2xl">{post.title}</h2>
        <div
          className="mb-3  text-gray-600 text-sm md:text-base text-left md:text-justify  font-normal "
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </div>
    </main>
  );
};

export default BlogPost;
