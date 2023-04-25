import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";

const graphCms = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY);

const POSTS_PER_PAGE = 3; // number of posts to show per page

const QUERY = gql`
  query getPosts($skip: Int!, $first: Int!) {
    posts(orderBy: datePublished_DESC, skip: $skip, first: $first) {
      id
      title
      datePublished
      slug
      summary
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }

      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphCms.request(QUERY, {
    skip: 0,
    first: POSTS_PER_PAGE,
  });
  return {
    props: {
      initialPosts: posts,
    },
    revalidate: 60,
  };
}

const Home = ({ initialPosts }) => {



  const [posts, setPosts] = useState(initialPosts.slice(0, POSTS_PER_PAGE));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    const { posts: newPosts } = await graphCms.request(QUERY, {
      skip: page * POSTS_PER_PAGE,
      first: POSTS_PER_PAGE,
    });
    setPage(page + 1);
    setPosts([...posts, ...newPosts]);
    setLoading(false);
  };
  const metaTitle = "Latest Blog Posts | Explore Our Insights and Ideas";
  const metaDescription = "Stay up to date with our latest blog posts. Our team of experts share insights and ideas on various topics. From technology to lifestyle, we cover it all. Check out our blog now!";
  const metaKeywords = "blog, posts, technology, lifestyle, insights, ideas";
  const metaAuthor = "Gerald";
  const metaImageUrl = "/logo.png";
  
  return (
    <>
      <Head>
        <title>Blog | Home</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content={metaAuthor} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImageUrl} />
        <meta property="og:url" content="https://gridblog.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Head>
      <div>
        <main>
          <BlogCard posts={posts} />
          {loading ? (
            <button
              disabled
              className="border rounded-[4px] py-1 px-3 font-medium bg-gray-300 cursor-not-allowed"
            >
              Loading...
            </button>
          ) : (
            <button
              className="border transition hover:ease-in rounded-[4px] py-1 px-3 font-medium hover:bg-transparent hover:text-black hover:border-2 hover:border-black bg-black text-white"
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </main>
    
      </div>
    </>
  );
};

export default Home;
