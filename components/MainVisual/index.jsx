import React from "react";
import styles from "/components/css/MainVisual.module.css";
import Image from "next/image";

export function MainVisual(props) {
  return (
    <>
        <div className={styles.content}>
        <div className={styles.mv_area}>
        <div className={styles.mv_area_inner}>
            <h1 className={styles.mv_area_title}><span><Image src="img/mv_logo.svg" alt="W&M journal" width={425} height={167}  /></span></h1>
            <div className={styles.mv_area_search}>
            {/* <?php get_search_form(); ?> */}
            </div>
        </div>
        </div>
        <div className={styles.mv_under}>
        <div className={styles.inner}>
            <p className={styles.mv_under_txt}>W&Mジャーナルでは、ウィークリーマンション・マンスリーマンションのお役立ち情報から、<br className={styles.tabonly} /><br className={styles.sponly} />住まいに関するアイデア・ヒントを発信中！</p>
        </div>
        </div>
        </div>
    </>
  );
}
