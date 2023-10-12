import styles from '../styles/css/Home.module.css'
import Link from "next/link";
import { client } from "/libs/client";
import { Header } from '/components/Header';
import { Headline } from '/components/Headline';
import { MainVisual } from '/components/MainVisual';

export default function Home({ blog ,category, tag}) {
  return (
    <>
    <Header  title="とっぷ" discription="インデックスDisc"/>
    <Headline/>
    <MainVisual />
      <div>
        <ul>
          {tag.map((tag) => (
            <li key={tag.id}>
              <Link href={`/tag/${tag.id}`}>{tag.name}</Link>
            </li>
          ))}
        </ul>
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
  const tagData = await client.get({ endpoint: "tag" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
      tag: tagData.contents,
    },
  };
};