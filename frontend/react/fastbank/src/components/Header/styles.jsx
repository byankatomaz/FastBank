import styled from "styled-components";

export const HeaderTopo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 8vh;
    position: fixed;
    background-color: #111;
    color: #fff;

    img {
        width: 58px;
        height: 50px;
        transform: rotate(10deg);
        padding-left: 10px;
    }
`