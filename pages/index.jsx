import styles from '/components/css/Home.module.css'
import Link from "next/link";
import { client } from "/libs/client";
import { Header } from '/components/Header';
import { Headline } from '/components/Headline';
import { MainVisual } from '/components/MainVisual';
import Breadcrumb from 'components/Breadcrumb';

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
          <h2 className={styles.primary_title}>
                <span className={styles.primary_title_ico}></span>
                <div className={styles.primary_title_txt}>
                    <p className={styles.jp}>新着の記事</p>
                    <p className={styles.en}>LATEST ARTICLE</p>
                </div>
            </h2>
            <ul>
            
              <li>
              </li>
            
          </ul>
          <ul className={`${styles.article_list} ${styles.arrival} ${styles.top}`}>
          {blog.map((blog) => (
          <li key={blog.id} className={styles.articles_item}>
            <Link className={styles.articles_img} href={`/blog/${blog.id}`}>
            </Link>
            <div className={styles.articles_content}>
              <div className={styles.articles_author}></div>
              <p className={styles.articles_date}></p>
              <Link className={styles.articles_link} href={`/blog/${blog.id}`}>
              {blog.title}
                <h3 className={styles.articles_title}></h3>
              </Link>
              <p className={styles.articles_category}>
                <span className={styles.articles_category_item}></span>
              </p>
            </div>
          </li>
          ))}
          </ul>
          </div>
        </div>
        <div>
          {/* <ul>
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
          </ul> */}
          </div>
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