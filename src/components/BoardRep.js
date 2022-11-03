import { useBoardsContext } from "../hooks/useBoardsContext";

// date fns
import { format, formatDistance, formatRelative, subDays } from "date-fns";
// 게시판 반복문 돌리는거
import React from "react";
import { Link } from "react-router-dom";
import styles from "./BoardTitle.css";

export default function BoardRep({ board }) {
    const { dispatch } = useBoardsContext();
    const handleClick = async () => {
        const response = await fetch("/api/boards/" + board._id, {
            method: "DELETE",
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_BOARD", payload: json });
        }
    };

    const change_date = (published_at) => {
        var moment = require("moment");

        const publish_date = moment(published_at).format("YYYY년 MM월 DD일");
        return publish_date;
    };

    return (
        <>
            <tr>
                <td className="seq" key={board.seq}>
                    {board.seq}
                </td>
                <td className="left">
                    <Link to={`${board.seq}`}>
                        <div className="title">{board.title}</div>
                    </Link>
                </td>
                {/* <td className="content">{board.content}</td> */}
                <td className="writtentime">
                    {/* {board.writtenTime} */}
                    {/* {console.log(change_date(board.writtenTime))} */}
                    {/* {formatRelative(subDays(new Date(board.writtenTime), 3), new Date())} */}
                    {change_date(board.writtenTime)}
                </td>
                <td className="like">{board.like}</td>
                <td className="view">{board.view}</td>
                {/* <td>
                    <i onClick={handleClick} className="fa-solid fa-trash"></i>
                </td> */}
            </tr>
        </>
    );
}
