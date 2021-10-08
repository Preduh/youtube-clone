import React from "react"
import { Container } from "./styles"

interface Props {
  selected: boolean
  categoryTitle: string
}

const Category: React.FC<Props> = ({ selected, categoryTitle }) => {
  return (
    <Container>
      <button className={selected ? 'selectedButton' : 'normalButton'}>
        <h1>{categoryTitle}</h1>
      </button>
    </Container>
  )
}

export default Category
