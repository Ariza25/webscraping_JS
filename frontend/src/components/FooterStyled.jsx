import styled from "styled-components"

export const Container = styled.div`
    background-color: #174794d2;
    height: 10vh;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

export const Paragraph = styled.p`
    color: #0e2c5d;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    color: aliceblue;
    font-size: 17px;

    a{
        text-decoration: none;
        color: aliceblue;
        margin-left: .2rem;
        justify-content: center;
        align-items: center;

        &:hover{
            color: #f0f8ff87;
            cursor: pointer;
        }
    }
`