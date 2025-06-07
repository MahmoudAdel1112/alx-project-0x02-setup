"use client";
import { PostProps } from "@/interfaces/interfaces";
import React, { useState, FormEvent } from "react";
import Card from "./Card";

const PostModal = () => {
  const [titleValue, setTitleValue] = useState<string>("");
  const [contentValue, setContentValue] = useState<string>("");
  const [posts, setPosts] = useState<PostProps[]>([]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!titleValue.trim() || !contentValue.trim()) return; // Don't add empty posts
    setPosts((prev) => [...prev, { title: titleValue, content: contentValue }]);
    setTitleValue("");
    setContentValue("");
  }

  return (
    <div className="min-h-screen  ">
      {/* Form Section */}
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Create a Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              id="title"
              value={titleValue}
              type="text"
              placeholder="Enter post title"
              onChange={(e) => setTitleValue(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <input
              id="content"
              value={contentValue}
              type="text"
              placeholder="Enter post content"
              onChange={(e) => setContentValue(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit Post
          </button>
        </form>
      </div>

      {/* Posts Section */}
      <div className="">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Posts</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500 italic">
            No posts yet. Create one above!
          </p>
        ) : (
          <div className="space-y-4">
            {posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostModal;
