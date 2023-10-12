import React from "react";
import styles from "/components/css/breadcrumb.module.css";

export default function Breadcrumb(props) {
    return (
        <>
            <div className={styles.breadcrumb}>
                <ul className={`${styles.breadcrumb_list} ${styles.inner}`}>
                    <li><a href="https://weeklyandmonthly.com/">【W&M】ウィークリー＆マンスリー</a></li>
                </ul>
            </div>
        </>
    );
}
