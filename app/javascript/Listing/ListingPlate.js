import React from 'react'
import styled from 'styled-components'
//import Rating from '../Rating/Rating'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:15px;
  img {
    margin-right: 10px;
    height: 60px;
    width: 60px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`

const UserReviewCount = styled.div`
  font-size: 18px;
  padding:10px 0;
`

const ScoreOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`

const ListingPlate = ({attributes, ...props}) => {
  const { image_url, title, price } = attributes

  return (
    <Wrapper>
        {/* clickable images section */}
        <h1><img src={image_url} height="50" width="50" alt={title} /> {title}</h1>
        <h2>{price}</h2>
        {/* TODO description and tag section */}
    </Wrapper>
  )
}

export default ListingPlate