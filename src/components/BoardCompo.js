import React from "react";
import { Link } from "react-router-dom";
import styles from "./boardContent.module.css";
import CommunityBanner from "./communityBanner";

export default function BoardCompo(props) {
  const { board } = props;
  return (
    <>
      {/* <Blank /> */}
      <CommunityBanner />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.product_titleBox}>
              <div className={styles.product_title}>{board.title}</div>
              <div className={styles.title_etc}>
                <div className={styles.product_author}>번호 : {board.seq}</div>
                <div className={styles.product_date}>작성일 : {board.time}</div>
                <div className={styles.product_views}>추천 : {board.like}</div>
                <div className={styles.product_views}>조회 : {board.view}</div>
              </div>
            </div>
            <div className={styles.product_content}>{board.content}</div>
          </div>
          <div className={styles.btnNAV}>
            <Link to="/api/boards/edit/:id">
              <button className={styles.board_enroll}>등록하기</button>
            </Link>

            <button className={styles.board_list}>목록</button>
          </div>
        </div>
      </div>
    </>
  );
}
