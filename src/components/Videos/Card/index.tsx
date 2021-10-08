import React from "react"
import { Container, Thumbnail, Author, Details } from "./styles"

const Card: React.FC = () => {
  return (
    <Container>
      <Thumbnail />
      <Details>
        <Author />
        <div className="titles">
          <h1>Video de entretenimento</h1>
          <h2>Nome do canal</h2>
          <div>
            <h2>32 mil visualizações</h2>
            <hr />
            <h2>há 48 minutos</h2>
          </div>
        </div>
      </Details>
    </Container>
  )
}

export default Card
