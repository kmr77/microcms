import styles from '/components/css/Home.module.css'
import Link from "next/link";
import { client } from "/libs/client";

export default function tagId({ blog }) {
  // タグに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return (
            <>
              <p className={styles.tag}>ブログコンテンツがありません</p>
            </>
     );
  }
  return (
    <>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <button><Link href={`/`}>TOPへ戻る</Link></button>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tag" });

  const paths = data.contents.map((content) => `/tag/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", queries: { filters: `tag[contains]${id}` } });

  return {
    props: {
      blog: data.contents,
    },
  };
};