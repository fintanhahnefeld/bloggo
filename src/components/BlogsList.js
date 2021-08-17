import firebase from "../firebase";
import { useState, useEffect } from "react";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("blogs");

  function getData() {
    setLoading(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setBlogs(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <h4>{blog.date}</h4>
            <p>{blog.content}</p>
          </div>
        );
      })}
    </>
  );
};

export default BlogsList;
