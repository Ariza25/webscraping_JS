import styled from 'styled-components'

export const Container = styled.div`
    background-color: #174794d2;
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

`

export const Image = styled.img`
    height: 15vh;
    margin: 0 40px;
    padding-top: 5px;
    transition: all .3s ease-in-out;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`

export const Icon = styled.i`
    font-size: 40px;
    margin: 40px;
    padding-top: 10px;
    transition: all .3s ease-in-out;

    a{
        text-decoration: none;
        color: aliceblue;

    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`