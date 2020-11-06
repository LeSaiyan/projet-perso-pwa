import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/img/4a785940756d9adab4096659c255afdc.1000x1000x1.jpg'

const index = () => {
  return (
    <DivStyled>
      <ImgStyled src={Image} />
      <Div2Styled>
        <PStyled>
          Ateyaba est un rappeur français originaire de Montpellier, actif
          depuis la fin des années 2000. Connu sous le nom de Joke jusqu&apos;en
          2018, il est présenté comme “précurseur” voire “avant-gardiste”,
          auteur d&apos;un rap qui se veut frais et novateur : des textes crus
          et chics et une prestance détachée et nonchalante accompagnés de
          sonorités inédites pour un univers musical atypique. Considéré comme
          l&apos;une des têtes émergentes du rap français de la première moitié
          des années 2010 avec au compteur trois EPs dont deux commercialisés et
          un album studio éponyme à son nom de scène, il se fait cependant plus
          discret dans la seconde moitié, travaillant sur Ultraviolet, son
          deuxième album studio dont la sortie est prévue pour 2020.
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
