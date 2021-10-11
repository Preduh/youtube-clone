import styled from "styled-components"

export const Container = styled.div`
  background-color: #212121;
  min-width: 74px;
  height: auto;

  .menu {
    width: 100%;
    height: 56px;
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
        width: 100%;
        height: 100%;

        .header {
          display: flex;
          flex-direction: row;
          height: 56px;
          align-items: center;

          .expandedMenuIcon {
            width: 74px;
            background-color: transparent;
            border: none;
            display: flex;
            justify-content: center;

            .menuLabel {
              img {
                width: 28px;
                height: 28px;
              }
            }
          }

          img {
            width: 90px;
            height: 27px;
          }
        }

        .menuSection {
          height: auto;
          overflow-y: scroll;

          .firstSection {
            height: 100%;
            padding: 16px 0px;
            border-bottom: 1px solid #3c3c3c;

            div {
              display: flex;
              flex-direction: row;
              height: 40px;
              align-items: center;
              cursor: pointer;

              div {
                width: 74px;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                  width: 20px;
                  height: 20px;
                }
              }

              p {
                color: white;
                font-size: 16px;
                font-weight: 500;
              }

              &:hover {
                background-color: #ffffff12;
              }
            }
          }
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
