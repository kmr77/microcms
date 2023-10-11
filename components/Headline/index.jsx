import React from "react";
import styles from "/components/css/headline.module.css";
import Image from "next/image";

export function Headline(props) {
  return (
    <>
      <header>
  <div className={styles.nav}>
    <div className={styles.nav__logo}>
      <a className={styles.nav__logo_img} href="/">
        <Image src="img/logo_wnm.svg" alt="ろご" width={160} height={66} />
        {/* <img src="" loading="lazy" alt="W＆M（ウィークリー＆マンスリー）" /> */}
      </a>
      <p className={[`styles.nav__logo-text`, `styles.pconly`]}>
        日本全国の家具・家電付きウィークリー・マンスリーマンション情報予約総合サイトW&M 
      </p>
    </div>

    <div className={[`styles.nav__menu`, `styles.jq-headNavTglTarget`]}>
      <div className={styles.nav__mainmenu}>
        <ul className={[`styles.nav__list`, `styles.sponly`]}>
          <li className={[`styles.nav__list-item`]}><a href="/guide/">ご利用ガイド</a></li>
          <li className={[`styles.nav__list-item`]}><a href="/guide/about-monthly/">マンスリーマンションとは</a></li>
          <li className={[`styles.nav__list-item`]}><a href="/guide/about-weekly/">ウィークリーマンションとは</a></li>
          <li className={[`styles.nav__list-item`]}><a href="/guide/equipment/">マンスリーマンションの設備</a></li>
          <li className={[`styles.nav__list-item`]}><a href="/guide/use/">活用シーン</a></li>
          <li className={[`styles.nav__list-item`]}><a href="/company/">運営会社</a></li>
          <li className={[`styles.nav__list-item`]}><a href="/journal/">W&M journal</a></li>
        </ul>
        <div className={[`styles.nav__requestbtn`, `styles.sponly`]}><a href={/request/}>物件リクエストフォーム</a></div>

        <ul className={[`styles.nav__list`, `styles.pconly`]}>
          <li className={[`styles.nav__list-item-ico`, `styles.guide`]}><a href="/guide/"><span>ご利用ガイド</span></a></li>
          <li className={[`styles.nav__list-item-ico`, `styles.journal`]}><a href="/journal/"><span>お役立ち情報</span></a></li>
          <li className={[`styles.nav__list-item-ico`, `styles.log`]}><a href="/history/"><span>閲覧履歴</span></a></li>
          <li className={[`styles.nav__list-item-ico`, `styles.search`]}><a href="/"><span>物件検索</span></a></li>
          <li className={[`styles.nav__list-item-ico`, `styles.request`]}><a href="/request/"><span>物件リクエスト</span></a></li>
        </ul>
      </div>
    </div>
    <div className={[`styles.sponly`, `styles.spmenu`]}>
      <ul className={styles.spmenu__list}>
        <li>
          <a className={styles.spmenu__search} href="/history"><span className={styles.spmenu__label}>検索</span></a>
        </li>
        <li>
          <a className={styles.spmenu__log} href="/history/"><span className={styles.spmenu__label}>閲覧履歴</span></a>
        </li>
        <li>
          <p className={[`styles.spmenu__btn`, `styles.jq-headNavTgl`]}>
            <svg className={styles.spmenu__icon} viewBox="0 0 50 50">
              <path className={[`styles.border1`, `styles.border`]}></path>
              <path className={[`styles.border1`, `styles.border`]}></path>
              <path className={[`styles.border1`, `styles.border`]}></path>
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
