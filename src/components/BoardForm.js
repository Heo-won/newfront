import React, { useState } from "react";
import { useBoardsContext } from "../hooks/useBoardsContext";
import styled from "styled-components";
import styles from "./BoardForm.module.css";
import CommunityBanner from "./communityBanner";

const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

export default function BoardForm() {
    //   const [seq, setSeq] = useState("");
    const { dispatch } = useBoardsContext();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const board = { title, content };

        const response = await fetch("/api/boards", {
            method: "POST",
            body: JSON.stringify(board),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }

        if (response.ok) {
            setTitle("");
            setContent("");
            setError(null);
            setEmptyFields([]);
            console.log("new board added", json);
            dispatch({ type: "CREATE_BOARD", payload: json });
        }
    };
    return (
        <>
            <Blank />
            <CommunityBanner />
            <form className="create" onSubmit={handleSubmit}>
                <div className="wrap">
                    <h3>글 작성하기</h3>
                    <div className={styles.Write}>
                        <div>
                            <input
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                className={`${styles.title_txt} ${emptyFields.includes("title") ? "error" : ""}`}
                                placeholder="제목"
                            />
                        </div>
                        <div>
                            <textarea onChange={(e) => setContent(e.target.value)} value={content} placeholder="내용" className={styles.content_txt} />
                        </div>
                    </div>
                </div>

                <button>글쓰기</button>
                {error && <div className="error">{error}</div>}
            </form>
        </>
    );
}
