import Header from "@/components/layout/Header";
import React from "react";
import PostCard from "@/components/common/PostCard";
import { GetStaticProps } from "next";
import { Post } from "@/interfaces/interfaces";
import PostModal from "@/components/common/PostModal";
interface PostsPageProps {
  posts: Post[]; // Array of Post objects
}

const posts = ({ posts }: PostsPageProps) => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-8">
        <PostModal />
        {posts.map((post: Post) => (
          <PostCard
            key={post.userId}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </>
  );
};

export default posts;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts }, // This will be passed to your page component
  };
};
