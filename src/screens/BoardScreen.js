import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BoardRep from "../components/BoardRep";
import BoardForm from "../components/BoardForm";
import { useBoardsContext } from "../hooks/useBoardsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import CommunityBanner from "../components/communityBanner";
import styles from "./BoardScreen.css";

const Blank = styled.div`
    width: 100vw;
    height: 10em;
`;

const Container = styled.div`
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    // height: 100vh;
    // justify-content: center;
    /* border: 1px solid #000; */
`;
const Boardtable = styled.div`
    width: 63em;
    font-size: 2em;
`;

export default function BoardScreen() {
    const { boards, dispatch } = useBoardsContext();
    // const { user} = useAuthContext()
    // const [write, setWrite] = useState(false);
    // Fetching Data
    useEffect(() => {
        // api from backend
        const fetchBoards = async () => {
            const response = await fetch("/api/boards");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_BOARDS", payload: json });
            }
        };
        // if(user){
        //fetchBoards();
        // }
        fetchBoards();
        window.scrollTo(0, 0);
    }, [dispatch]);

    return (
        <>
            <Blank />
            <CommunityBanner />

            <Container>
                <Boardtable className="BoardTable">
                    <div className="writeWrap">
                        <Link to="create">
                            <div className="write">글쓰기</div>
                        </Link>
                    </div>
                    <div id="board-list">
                        <table className="boardtable">
                            <tr className="head">
                                <th scople="col" className="seq">
                                    글번호
                                </th>
                                <th scople="col" className="title">
                                    제목
                                </th>
                                {/* <th scople="col" className="content">
                                    내용
                                </th> */}
                                <th scople="col" className="writtentime">
                                    작성일자
                                </th>
                                <th scople="col" className="like">
                                    추천수
                                </th>
                                <th scople="col" className="view">
                                    조회수
                                </th>
                            </tr>
                            {boards && boards.map((board) => <BoardRep board={board}></BoardRep>)}
                        </table>
                    </div>
                </Boardtable>
            </Container>
            {/* <Footer /> */}
            {/* <Routes>
        <Route path="/api/board/create" element={<BoardForm />}></Route>
      </Routes> */}
        </>
    );
}
