import React from "react";
import styles from "/components/css/headline.module.css";
import Image from "next/image";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";


export function Headline(props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.nav__logo}>
            <Link legacyBehavior href="/">
              <a className={styles.nav__logo_img}>
                <Image src="img/logo_wnm.svg" alt="ろご" width={160} height={66} />
                {/* <img src="" loading="lazy" alt="W＆M（ウィークリー＆マンスリー）" /> */}
              </a>
            </Link>
            <p className={`${styles.nav__logo_text} ${styles.pconly}`}>
              日本全国の家具・家電付きウィークリー・マンスリーマンション情報予約総合サイトW&M 
            </p>
          </div>

          <div className={`${styles.nav__menu} ${styles.jq_headNavTglTarget}`}>
            <div className={styles.nav__mainmenu}>
              <ul className={`${styles.nav__list} ${styles.sponly}`}>
                <li className={styles.nav__list_item}><a href="/guide/">ご利用ガイド</a></li>
                <li className={styles.nav__list_item}><a href="/guide/about-monthly/">マンスリーマンションとは</a></li>
                <li className={styles.nav__list_item}><a href="/guide/about-weekly/">ウィークリーマンションとは</a></li>
                <li className={styles.nav__list_item}><a href="/guide/equipment/">マンスリーマンションの設備</a></li>
                <li className={styles.nav__list_item}><a href="/guide/use/">活用シーン</a></li>
                <li className={styles.nav__list_item}><a href="/company/">運営会社</a></li>
                <li className={styles.nav__list_item}><a href="/journal/">W&M journal</a></li>
              </ul>
              <div className={`${styles.nav__requestbtn} ${styles.sponly}`}><a href={/request/}>物件リクエストフォーム</a></div>

              <ul className={`${styles.nav__list} ${styles.pconly}`}>
                <li className={`${styles.nav__list_item_ico} ${styles.guide}`}><Link legacyBehavior href="/guide/"><span>ご利用ガイド</span></Link></li>
                <li className={`${styles.nav__list_item_ico} ${styles.journal}`}><Link legacyBehavior href="/journal/"><span>お役立ち情報</span></Link></li>
                <li className={`${styles.nav__list_item_ico} ${styles.log}`}><Link legacyBehavior href="/history/"><span>閲覧履歴</span></Link></li>
                <li className={`${styles.nav__list_item_ico} ${styles.search}`}><Link legacyBehavior href="/"><span>物件検索</span></Link></li>
                <li className={`${styles.nav__list_item_ico} ${styles.request}`}><Link legacyBehavior href="/request/"><span>物件リクエスト</span></Link></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.sponly} ${styles.spmenu}`}>
            <ul className={styles.spmenu__list}>
              <li>
                <a className={styles.spmenu__search} href="/history"><span className={styles.spmenu__label}>検索</span></a>
              </li>
              <li>
                <a className={styles.spmenu__log} href="/history/"><span className={styles.spmenu__label}>閲覧履歴</span></a>
              </li>
              <li>
                <p className={`${styles.spmenu__btn} ${styles.jq_headNavTgl}`}>
                  <svg className={styles.spmenu__icon} viewBox="0 0 50 50">
                    <path className={`${styles.border1} ${styles.border}`}></path>
                    <path className={`${styles.border1} ${styles.border}`}></path>
                    <path className={`${styles.border1} ${styles.border}`}></path>
                  </svg>
                </p>
              </li>
            </ul>
          </div>
        </div>
    </header>
    </>
  );
}
