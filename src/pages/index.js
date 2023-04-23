

import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";

const graphCms = new GraphQLClient(
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clgowzcyf74ut01t2cog0fw3k/master"
);

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
    revalidate: 10,
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

  return (
    <>
      <Head>
        <title>Blog | Home</title>
        <link rel="icon" href="/favicon.ico" />
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
              className="border rounded-[4px] py-1 px-3 font-medium hover:bg-transparent hover:text-black hover:border-2 hover:border-black bg-black text-white"
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
