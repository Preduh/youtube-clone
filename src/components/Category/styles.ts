import styled from "styled-components"

export const Container = styled.div`
  margin-right: 16px;

  .normalButton {
    height: 32px;
    background-color: #373737;
    border-radius: 32px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4a4a4a;
    cursor: pointer;
    transition: all linear 0.2s;

    :hover {
      background-color: #4c4c4c;
    }

    h1 {
      font-size: 14px;
      font-weight: 400;
      color: white;
      white-space: nowrap;
    }
  }

  .selectedButton {
    background-color: #ffffff;
    height: 32px;
    border-radius: 32px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4a4a4a;
    cursor: pointer;
    transition: all linear 0.2s;
    outline: none;

    h1 {
      font-size: 14px;
      font-weight: 400;
      color: #373737;
    }
  }
`
