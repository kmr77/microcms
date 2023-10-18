import { client } from '/libs/client';
import styles from '/components/css/Home.module.css';
import Link from "next/link";
import Breadcrumb from 'components/Breadcrumb';
import { Headline } from 'components/Headline';
import { Header } from 'components/Header';
import Side from 'components/Side';

export default function BlogId({ blog, category }) {
  return (
    <>
    <Header title="記事詳細" discription="記事詳細のDisc" />
    <Headline />
    <div className={styles.content}>
      <div className={styles.page_article}>
          <Breadcrumb />
        <div className={styles.inner}>
          <article>
          <div className={styles.article_thumb}>
            <div className={styles.article_thumb_img}>
              <img width="1160" height="476" src="https://weeklyandmonthly.com/journal/wp-content/uploads/2022/01/tokushima-workcation.jpg" className="eyecatch_img wp-post-image" alt="" loading="lazy" srcset="https://weeklyandmonthly.com/journal/wp-content/uploads/2022/01/tokushima-workcation.jpg 1160w, https://weeklyandmonthly.com/journal/wp-content/uploads/2022/01/tokushima-workcation-600x246.jpg 600w, https://weeklyandmonthly.com/journal/wp-content/uploads/2022/01/tokushima-workcation-768x315.jpg 768w" sizes="(max-width: 1160px) 100vw, 1160px" />
            </div>
            <time className={styles.article_dates} datatime="2023/07/20" itemprop="dateModified">
              <span className={styles.entry_month}>Jul</span>
              <span className={styles.entry_date}>20</span>
              <span className={styles.entry_year}>2023</span>
            </time>
          </div>
          </article>
          <div className={styles.article_flex}>
            <div className={styles.main}>
              <h1 className={styles.title}>{blog.title}</h1>
              <div className={styles.sns_intro}>
                <div className={styles.sns_container}>
                  <ul className={styles.sns_list}>
                    <li className={`${styles.sns_list_cont} ${styles.facebook}`}>
                      <a className={styles.sns_list_link} href="http://www.facebook.com/share.php?u=<?php echo get_the_permalink(); ?>" target="_blank" rel="nofollow noopener">
                        <i className={`${styles.sns_list_ico} ${styles.fab} ${styles.fa_facebook}`}></i><span>シェア</span>
                      </a>
                    </li>
                    <li className={`${styles.sns_list_cont} ${styles.twitter}`}>
                      <a className={styles.sns_list_link} href="https://twitter.com/share?url=<?php echo get_the_permalink();?>&text=<?php echo get_the_title();?>" target="_blank" rel="nofollow noopener">
                        <i className={`${styles.sns_list_ico} ${styles.fab} ${styles.fa_twitter}`}></i><span>ツイート</span>
                      </a>
                    </li>
                    <li className={`${styles.sns_list_cont} ${styles.line}`}>
                      <a className={`${styles.sns_list_link}`} href="https://social-plugins.line.me/lineit/share?url=<?php echo get_the_permalink(); ?>" target="_blank" rel="nofollow noopener">
                        <i className={`${styles.sns_list_ico} ${styles.fab} ${styles.fa_line}`}></i><span>LINEで送る</span>
                      </a>
                    </li>
                    <li className={`${styles.sns_list_cont} ${styles.hatena}`}>
                      <a className={styles.sns_list_link} href="https://b.hatena.ne.jp/entry/panel/?url=<?php echo get_the_permalink();?>&btitle=<?php echo get_the_title();?>">
                        <i className={`${styles.sns_list_ico} ${styles.fab} ${styles.fa_hatebu}`}></i><span>ブックマーク</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <p className={styles.category}>{blog.category && blog.category.name}</p> */}
              <p className={styles.category}>
                        {category.map((category) => (
                            <span key={category.id} className={styles.articles_category_item}>
                              <Link href={`/category/${category.id}`}>{category.name}</Link><span>　/　</span>
                            </span>
                        ))}
                        </p>
                        {/* これではカテゴリが全部出てしまっている */}
              <p className={styles.publishedAt}>{blog.publishedAt}</p>
              <div className={styles.article_contents}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${blog.body}`,
                  }}
                  className={styles.post}
                >
                </div>
              </div>
              <button><Link href={`/`}>TOPへ戻る</Link></button>
            <div className={styles.article_bonus}></div>
            </div>
            <Side />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  const categoryData = await client.get({ endpoint: "category" });

  return {
    props: {
      blog: data,
      category: categoryData.contents,
    },
  };
};
