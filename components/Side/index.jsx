import React from "react";
import styles from "/components/css/Side.module.css";
import Image from "next/image";

export default function Side() {
    return (
        <>
            <div className={styles.article_side}>
              <div className={styles.side_banner}>
                <a href="https://fukuuro-kaitori.jp/?utm_medium=banner&amp;utm_source=weeklyandmonthly&amp;utm_campaign=2023winter" target="_blank" id="vector_bnr" data-gtm-vis-recent-on-screen12254151_123="5083" data-gtm-vis-first-on-screen12254151_123="5083" data-gtm-vis-total-visible-time12254151_123="100" data-gtm-vis-has-fired12254151_123="1">
                    <img src="https://weeklyandmonthly.com/journal/wp-content/themes/wpjournal/img/fukuuro_bnr_600_500.jpg" alt="ブランド古着宅配買取" className={styles.pconly} />
                    <img src="https://weeklyandmonthly.com/journal/wp-content/themes/wpjournal/img/fukuuro_bnr_640_200.jpg" alt="ブランド古着宅配買取" className={styles.sponly} />
                </a>
              </div>

              <h2 className={`${styles.primary_title} ${styles.is_underlayer}`}>
                <div className={styles.primary_title_txt}>
                  <p className={styles.jp}>同じカテゴリーのおすすめ記事</p>
                  <p className={styles.en}>RECOMMEND</p>
                </div>
              </h2>

              <ul className={styles.popularity_list}>
                <li className={styles.popularity_item}>
                  <a className={styles.popularity_link} href="https://weeklyandmonthly.com/journal/post-7739/">
                    <div className={styles.popularity_img}>
                      <img width="150" height="150" src="https://weeklyandmonthly.com/journal/wp-content/uploads/2023/01/4220db6c0a236d4103765d03ef5b2def-150x150.png" className={`${styles.attachment_thumbnail} ${styles.size_thumbnail} ${styles.wp_post_image}`} alt="" loading="lazy" srcset="https://weeklyandmonthly.com/journal/wp-content/uploads/2023/01/4220db6c0a236d4103765d03ef5b2def-150x150.png 150w, https://weeklyandmonthly.com/journal/wp-content/uploads/2023/01/4220db6c0a236d4103765d03ef5b2def-100x100.png 100w, https://weeklyandmonthly.com/journal/wp-content/uploads/2023/01/4220db6c0a236d4103765d03ef5b2def-110x110.png 110w, https://weeklyandmonthly.com/journal/wp-content/uploads/2023/01/4220db6c0a236d4103765d03ef5b2def-120x120.png 120w" sizes="(max-width: 150px) 100vw, 150px"/>
                    </div>
                  <div className={styles.popularity_content}>
                    <h3 className={styles.popularity_title}>東京駅まで乗車時間30分以内！マンスリー月額相場が安い駅ランキング【2023年1月版】</h3>
                  </div>
                  </a>
                </li>
                <li className={styles.popularity_item}>
                  <a className={styles.popularity_link} href="https://weeklyandmonthly.com/journal/post-7691/">
                    <div className={styles.popularity_img}>
                      <img width="150" height="150" src="https://weeklyandmonthly.com/journal/wp-content/uploads/2023/01/c100-003-s-150x150.jpg" className={`${styles.attachment_thumbnail} ${styles.size_thumbnail} ${styles.wp_post_image}`} alt="" loading="lazy" srcset="https://weeklyandmonthly.com/journal/wp-content/uploads/2023/01/c100-003-s-150x150.jpg 150w, https://weeklyandmonthly.com/journal/wp-content/uploads/2023/01/c100-003-s-100x100.jpg 100w, https://weeklyandmonthly.com/journal/wp-content/uploads/2023/01/c100-003-s-110x110.jpg 110w, https://weeklyandmonthly.com/journal/wp-content/uploads/2023/01/c100-003-s-120x120.jpg 120w" sizes="(max-width: 150px) 100vw, 150px" />
                    </div>
                    <div className={styles.popularity_content}>
                      <h3 className={styles.popularity_title}>地元民が教える！札幌の冬観光の定番「2023 さっぽろ雪まつり」の楽しみ方</h3>
                    </div>
                  </a>
                </li>
                <li className={styles.popularity_item}>
                  <a className={styles.popularity_link} href="https://weeklyandmonthly.com/journal/post-7625/">
                    <div className={styles.popularity_img}>
                      <img width="150" height="150" src="https://weeklyandmonthly.com/journal/wp-content/uploads/2022/07/img-150x150.png" className={`${styles.attachment_thumbnail} ${styles.size_thumbnail} ${styles.wp_post_image}`} alt="" loading="lazy" srcset="https://weeklyandmonthly.com/journal/wp-content/uploads/2022/07/img-150x150.png 150w, https://weeklyandmonthly.com/journal/wp-content/uploads/2022/07/img-100x100.png 100w, https://weeklyandmonthly.com/journal/wp-content/uploads/2022/07/img-110x110.png 110w, https://weeklyandmonthly.com/journal/wp-content/uploads/2022/07/img-120x120.png 120w" sizes="(max-width: 150px) 100vw, 150px" />
                    </div>
                    <div className={styles.popularity_content}>
                      <h3 className={styles.popularity_title}>【2022年夏のマンスリー活用特集】夏の長期滞在におすすめ！注目ホテル・マンスリーで過ごす、ひと味ちがう大人の休暇</h3>
                    </div>
                  </a>
                </li>
                </ul>

                <h2 className={`${styles.primary_title} ${styles.is_underlayer}`}>
                  <div className={styles.primary_title_txt}>
                    <p className={styles.jp}>カテゴリーから探す</p>
                    <p className={styles.en}><span className={styles.pconly}>SEARCH </span>CATEGORY</p>
                  </div>
                </h2>

                <ul className={styles.category_list}>
                  <li className={styles.category_item}>
                    <a href="https://weeklyandmonthly.com/journal/category/release/" className={styles.category_link}><span>W&amp;Mお知らせ情報</span></a>
                  </li>
                  <li className={styles.category_item}>
                    <a href="https://weeklyandmonthly.com/journal/category/faq/" className={styles.category_link}><span>ウィークリー・マンスリーよくある質問</span></a>
                  </li>
                  <li className={styles.category_item}>
                    <a href="https://weeklyandmonthly.com/journal/category/area/" className={styles.category_link}><span>物件特集・エリア情報</span></a>
                  </li>
                  <li className={styles.category_item}>
                    <a href="https://weeklyandmonthly.com/journal/category/useful/" className={styles.category_link}><span>ウィークリー・マンスリーお役立ち情報</span></a>
                  </li>
                  <li className={styles.category_item}>
                    <a href="https://weeklyandmonthly.com/journal/category/telework/" className={styles.category_link}><span>テレワーク・在宅勤務</span></a>
                  </li>
                  <li className={styles.category_item}>
                    <a href="https://weeklyandmonthly.com/journal/category/livingalone/" className={styles.category_link}><span>一人暮らし</span></a>
                  </li>
                  <li className={styles.category_item}>
                    <a href="https://weeklyandmonthly.com/journal/category/workation/" className={styles.category_link}><span>ワーケーション</span></a>
                  </li>
                  <li className={styles.category_item}>
                    <a href="https://weeklyandmonthly.com/journal/category/roomshare/" className={styles.category_link}><span>同棲・ルームシェア</span></a>
                  </li>
                  <li className={styles.category_item}>
                    <a href="https://weeklyandmonthly.com/journal/category/biztrip/" className={styles.category_link}><span>出張・研修</span></a>
                  </li>
                  <li className={styles.category_item}>
                    <a href="https://weeklyandmonthly.com/journal/category/%e3%83%9a%e3%83%83%e3%83%88/" className={styles.category_link}><span>ペット</span></a>
                  </li>
                </ul>
            </div>
        </>
    );
}
