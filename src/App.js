import React, { useState } from "react";
import Tbody from "./dars_1/Navbar";
import "./style/style_app.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, language: "Python", stack: "Mern stack" },
    { id: 2, language: "c++", stack: "Full-stack" },
    { id: 3, language: "c#", stack: "Mern stack" },
  ]);
  const deletePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };
  return (
    <div className="app w-50 mx-auto">
      <form>
        <h3 className="text-center">Create your first post</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Programming languages"
        />
        <input
          type="text"
          className="form-control my-3"
          placeholder="Enter your favourite stack"
        />
        <button
          className="btn btn-primary w-100"
          onClick={(e) => {
            e.preventDefault();
            let input = document.querySelectorAll("input");
            let obj = {
              id: Date.now(),
              language: input[0].value,
              stack: input[1].value,
            };
            setPosts([...posts, obj]);
            input.forEach((item) => (item.value = ""));
          }}
        >
          Add post
        </button>
      </form>
      {posts.length ? (
        <>
          <h5 className="text-center mt-4">Favourite Programming languages</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Programming languages</th>
                <th>Stack</th>
                <th>Actions</th>
              </tr>
            </thead>
            {posts.map((post, index) => (
              <Tbody
                post={post}
                number={index + 1}
                deletePost={deletePost}
                key={post.id}
              />
            ))}
          </table>
        </>
      ) : (
        <h6 className="text-center py-3">
          Kechirasiz sizda hech qanday malumot qolmadi
        </h6>
      )}
    </div>
  );
}

export default App;
