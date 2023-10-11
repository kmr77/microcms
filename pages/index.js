import styles from '../styles/css/Home.module.css'
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog ,category}) {
  return (
    <>
      <div className={styles.container}>
        <ul>
          {category.map((category) => (
            <li key={category.id}>
              <Link href={`/category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  const categoryData = await client.get({ endpoint: "category" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};