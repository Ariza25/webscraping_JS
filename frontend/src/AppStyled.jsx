import styled from "styled-components"

export const Title = styled.h3`
    color: aliceblue;
    font-size: 30px;
    font-weight: bold;
    text-shadow: 2px 4px 15px #4a4a4a;
`

export const Container = styled.div`
    padding: 3rem 0rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(255, 255, 255) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.078) 0px 50px 100px -20px, rgba(0, 0, 0, 0.073) 0px 30px 60px -30px;
    background-image: url("https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    z-index: -1;
    background-size: cover;
    background-attachment: fixed;
`

export const VideoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 2rem;
`

export const Video = styled.iframe`
    width: 60%;
    height: 78vh;
    border-radius: 10px;
    border: 2px solid #38383873;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    
    @media (max-width: 992px) {
        height: 40vh;
        width: 80%;
    }

    @media (max-width: 768px) {
        height: 40vh;
        width: 80%;
    }

    @media (max-width: 500px) {
        height: 40vh;
        width: 90%;
    }

    @media (max-width: 400px) {
        height: 40vh;
        width: 90%;
    }

`
export const Subtitle = styled.h4`
    color: aliceblue;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 2rem;
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin-top: 1rem;
    font-size: 16px;
    text-align: left;
    color: aliceblue;
    background-color: #38383873;
    padding: 50px 70px;
    border-radius: 1rem;

    span{
        font-weight: bold;
        font-size: 25px;
    }

    @media (max-width: 992px) {
        width: 80%;
        font-size: 25px;
    }

    @media (max-width: 768px) {
        width: 80%;
        font-size: 20px;
    }

    @media (max-width: 500px) {
        width: 90%;
        font-size: 15px;
    }

    @media (max-width: 400px) {
        width: 90%;
        font-size: 15px;
    }
`

