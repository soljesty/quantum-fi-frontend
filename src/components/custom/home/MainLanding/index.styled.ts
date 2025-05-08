import styled from "styled-components";

const JoinButton = styled.a`
    cursor: pointer;
    border-radius: 79px;
    max-width: 265px;
    height: 70px;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-size: 25px;
    font-weight: 600;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 12px;
    background-image: linear-gradient(to right, #FFCD1B , #E26C00);
    text-decoration: none;
    

    span{
        width: 50px;
        height: 50px;
        border-radius: 38px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &:hover{
        scale: 1.1;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
        height: 40px;
        max-width: 180px;
        span{
            width: 25px;
            height: 25px;
        }
    }
`

export {
    JoinButton
}