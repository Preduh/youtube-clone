import styled from "styled-components"

export const Container = styled.div`
  background-color: #212121;
  min-width: 74px;
  height: auto;

  .menu {
    width: 100%;
    height: 73px;
    background-color: transparent;
    border: none;
    padding: 16px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    .menuLabel {
      cursor: pointer;

      img {
        width: 28px;
        height: 28px;
      }
    }

    .fullSidebar {
      background-color: #212121;
      width: 240px;
      position: absolute;
      z-index: 1;
      height: 100%;
      left: -240px;
      top: 0;
      transition: all linear 0.15s;

      .iconsBar {
        background-color: #212121;
        width: 74px;
        height: 100%;

        .expandedMenuIcon {
          width: 100%;
          height: 73px;
          background-color: transparent;
          border: none;
          padding: 16px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .menuCheckbox {
      display: none;

      &:checked ~ .fullSidebar {
        left: 0;
      }
    }
  }

  .icons {
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 16px 0px;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
      margin-bottom: 4px;
    }

    h1 {
      font-size: 10px;
      font-weight: 300;
      color: white;
    }

    :hover {
      background-color: #ffffff12;
    }
  }
`
