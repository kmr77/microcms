import styles from '/components/css/Home.module.css'
import Link from "next/link";
import { client } from "/libs/client";
import { Header } from '/components/Header';
import { Headline } from '/components/Headline';
import { MainVisual } from '/components/MainVisual';
import Breadcrumb from 'components/Breadcrumb';
import TopContents from 'components/TopContents';

export default function Home({ blog ,category, tag}) {
  return (
    <>
    <Header  title="とっぷ" discription="インデックスDisc"/>
    <Headline/>
      <div className={styles.content}>
        <MainVisual />
        <Breadcrumb />
        <div className={`${styles.top_section} ${styles.arrival}`}>
          <div className={styles.inner}>
            <TopContents />
          </div>
        </div>
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
        <ul className={`${styles.article_list} ${styles.arrival} ${styles.top}`}>
        <li className={styles.articles_item}>
          <a className={styles.articles_img} href={`/`}>
          </a>
          <div className={styles.articles_content}>
            <div className={styles.articles_author}></div>
            <p className={styles.articles_date}></p>
            <a className={styles.articles_link} href={`/`}>
              <h3 className={styles.articles_title}></h3>
            </a>
            <p className={styles.articles_category}>
              <span className={styles.articles_category_item}></span>
            </p>
          </div>
        </li>
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