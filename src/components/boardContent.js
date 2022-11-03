// import styled from "styled-components";
import CommunityBanner from "../components/communityBanner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./boardContent.module.css";
import moment from "moment";

// const Blank = styled.div`
//     width: 100vw;
//     height: 10em;
// `;

const BoardContent = () => {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [view, setView] = useState();
    const [like, setLike] = useState();
    const [time, setTime] = useState();
    const [seq, setSeq] = useState();

    const { id } = useParams();

    const change_date = (published_at) => {
        var moment = require("moment");

        const publish_date = moment(published_at).format("YYYY-MM-DD");
        return publish_date;
    };

    useEffect(() => {
        const fetchBoards = async () => {
            const response = await fetch("/api/boards");
            const json = await response.json();
            const post = json.filter((post) => post.seq === parseInt(id));
            setTitle(post[0].title);
            setContent(post[0].content);
            setView(post[0].view);
            setLike(post[0].like);
            setTime(change_date(post[0].writtenTime));
            setSeq(post[0].seq);
        };
        fetchBoards();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* <Blank /> */}
            <CommunityBanner />

            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.product_titleBox}>
                            <div className={styles.product_title}>{title}</div>
                            <div className={styles.title_etc}>
                                <div className={styles.product_author}>번호 : {seq}</div>
                                <div className={styles.product_date}>작성일 : {time}</div>
                                <div className={styles.product_views}>추천 : {like}</div>
                                <div className={styles.product_views}>조회 : {view}</div>
                            </div>
                        </div>
                        <div className={styles.product_content}>{content}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BoardContent;
