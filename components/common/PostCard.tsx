import { PostProps } from "@/interfaces/interfaces";
import React from "react";

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{content}</p>
      <div className="text-sm text-gray-500">User ID: {userId}</div>
    </div>
  );
};

export default PostCard;
