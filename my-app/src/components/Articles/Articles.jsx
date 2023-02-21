import React, { useState } from "react";
import axios from "axios";
import styles from "./Articles.module.scss";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Articles</h1>
      {loading && "Загрузка..."}

      <div className={styles.wrapper}></div>

      {posts.map((post) => (
        <div key={post.id} className={styles.card}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <Link to="">Read now</Link>
        </div>
      ))}
    </div>
  );
};

export default Articles;
