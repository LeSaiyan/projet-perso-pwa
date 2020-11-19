import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from '../../assets/img/c56c5b07d4a5ef46bbc30a1bf27fce15.png'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { toggleFavoritesEpisodes } from '../../actions/favorites'

const EpisodeCard = props => {
  const dispatch = useDispatch()
  return (
    <DivStyled id={props.id}>
      <ImgStyled src={Image} />
      <InfoContainerStyled>
        <LiStyled>{props.title}</LiStyled>
        <LiStyled>{props.title_japanese}</LiStyled>
      </InfoContainerStyled>
      <Button
        text='add'
        submit={() => dispatch(toggleFavoritesEpisodes(props))}
      />
    </DivStyled>
  )
}

EpisodeCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  title_japanese: PropTypes.string
}

const ImgStyled = styled.img`
  width: 100px;
  margin: 0px 10px;
`
const DivStyled = styled.div`
  display: flex;
  width: 90%;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  margin: 5% auto;
`
const InfoContainerStyled = styled.div`
  list-style: none;
  text-align: start;
`

const LiStyled = styled.li``
export default EpisodeCard
