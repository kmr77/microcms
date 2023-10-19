import React from "react";
import styles from "/components/css/Sns.module.css";
import Image from "next/image";

export default function Sns() {
    return (
        <>
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
        </>
    );
}
