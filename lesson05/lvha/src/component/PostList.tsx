import React, { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};
export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((pesponse) => pesponse.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
