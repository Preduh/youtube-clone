import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`

export const Main = styled.div`
  width: calc(100% - 74px);
  height: 100%;
`

export const Heading = styled.div`
  background-color: #202020;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  border-bottom: 1px solid #3c3c3c;

  img {
    width: 90px;
  }
`

export const SearchWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 92%;

  input {
    height: 40px;
    width: 100%;
    border: 1px solid #3c3c3c;
    background-color: #121212;
    border-radius: 2px 0px 0px 2px;
    padding-left: 8px;
    outline: none;
    color: white;
    font-size: 16px;

    ::placeholder {
      font-size: 16px;
      font-weight: 400;
    }
  }
`
export const SearchButton = styled.button`
  width: 64px;
  height: 40px;
  background-color: #3c3c3c;
  border: none;
  border-radius: 0px 2px 2px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }
`

export const AudioButton = styled.button`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #181818;
  cursor: pointer;
  margin-left: 16px;

  img {
    width: 18px;
    height: 18px;
  }
`

export const IconsWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
    }

    .avatar {
      background-color: #000000;
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
`

export const CategoriesHeader = styled.div`
  height: 56px;
  width: 100%;
  background-color: #202020;
  border-bottom: 1px solid #3c3c3c;
  display: flex;
  flex-direction: row;
`

export const CategoriesWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0px 16px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    height: 12px;
    background-color: transparent;
  }
`
