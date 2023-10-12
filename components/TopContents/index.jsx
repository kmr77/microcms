import React from "react";
import styles from "/components/css/TopContents.module.css";

export default function TopContents(props) {
    return (
        <>
            <h2 className={styles.primary_title}>
                <span className={styles.primary_title_ico}></span>
                <div className={styles.primary_title_txt}>
                    <p className={styles.jp}>新着の記事</p>
                    <p className={styles.en}>LATEST ARTICLE</p>
                </div>
            </h2>
        </>
    );
}
