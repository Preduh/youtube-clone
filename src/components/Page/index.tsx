import React from "react"
import Category from "../Category"
import SideBar from "../SideBar"
import Videos from "../Videos"

import {
  Container,
  Main,
  Heading,
  SearchWrapper,
  SearchBar,
  SearchButton,
  AudioButton,
  IconsWrapper,
  CategoriesHeader,
  CategoriesWrapper,
} from "./styles"

const Page: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Main>
        <Heading>
          {/* Logo */}
          <img src="./images/branco.png" alt="Logo" />
          {/* Search */}
          <SearchWrapper>
            <SearchBar>
              <input type="text" placeholder="Pesquisar" />
              <SearchButton>
                <img src="./images/search.png" alt="SearchButtom" />
              </SearchButton>
            </SearchBar>
            <AudioButton>
              <img src="./images/microphone.png" alt="Microphone" />
            </AudioButton>
          </SearchWrapper>
          {/* Icons */}
          <IconsWrapper>
            <button>
              <img src="./images/upload.png" alt="Upload Icon" />
            </button>
            <button>
              <img src="./images/apps.png" alt="Upload Icon" />
            </button>
            <button>
              <img
                src="./images/bell.png"
                alt="Upload Icon"
                style={{ width: "18px", height: "18px" }}
              />
            </button>
            <button>
              <div className="avatar" />
            </button>
          </IconsWrapper>
        </Heading>
        {/* Categories */}
        <CategoriesHeader>
          <CategoriesWrapper>
            <Category selected={true} categoryTitle="Tudo" />
            {[
              "Mixes",
              "Música",
              "Lista de reprodução",
              "K-Pop",
              "League of Legends",
              "Podcast",
              "Batidas",
              "ASMR",
              "Música Lo-fi",
              "Comédia",
              "Animes",
              "React JS"
            ].map((category) => (
              <Category
                selected={false}
                key={category}
                categoryTitle={category}
              />
            ))}
          </CategoriesWrapper>
        </CategoriesHeader>
        {/* Videos */}
        <Videos />
      </Main>
    </Container>
  )
}

export default Page
