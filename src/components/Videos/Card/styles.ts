import styled from 'styled-components'

export const Container = styled.div`
    width: 280px;
    margin: 24px 0;
    cursor: pointer;
    margin-left: 12px;
`

export const Thumbnail = styled.div`
    width: 100%;
    height: 170px;
    background-color: #202020;
`

export const Author = styled.div`
    min-width: 36px;
    height: 36px;
    background-color: #000000;
    border-radius: 50%;
`

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8px;

    .titles {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 16px;

        h1 {
        color: white;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
        }

        h2 {
            color: #AAAAAA;
            font-size: 14px;
            font-weight: 400;
        }

        div {
            display: flex;
            flex-direction: row;
            align-items: center;

            hr {
                width: 1px;
                height: 1px;
                margin: 0px 4px;
            }
        }
    }
`