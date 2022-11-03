import EventrBenner from "./EventBenner";
import EventDetail from "./eventDetail";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

const productEvent = () => {
    return (
        <>
            <Blank />
            <EventrBenner />
            <EventDetail />
        </>
    );
};

export default productEvent;
