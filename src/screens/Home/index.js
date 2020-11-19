import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/img/c56c5b07d4a5ef46bbc30a1bf27fce15.png'

const index = () => {
  return (
    <DivStyled>
      <ImgStyled src={Image} />
      <Div2Styled>
        <PStyled>
          Manta est un collégien très ordinaire. Un jour, traversant un
          cimetière pour gagner du temps, il rencontre Yoh, un shaman. Yoh peut
          voir les fantômes, et fusionner avec eux pour utiliser leurs
          compétences. Son rêve est de devenir Shaman King, le shaman possédant
          le fantôme ultime, le Great Spirit, la connaissance universelle. Mais
          la route est semée d&apos;embûches, et de nombreux autres shamans ont
          le même objectif : gagner le Shaman Fight !
        </PStyled>
      </Div2Styled>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  height: 115vh;
`

const Div2Styled = styled.div``

const PStyled = styled.p`
  width: 85%;
  margin: 10px auto;
`

const ImgStyled = styled.img`
  width: 100%;
`

export default index
