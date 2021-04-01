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
  const { title, slug, image_url, price, user_id } = attributes

  return (
    <Wrapper>
        {/* clickable images section */}
        <h1><img src={image_url} height="50" width="50" alt={title} /> {title}</h1>
        <h2>{price}</h2>
        <button className="btn btn-outline-success btn-block" to={"/listings/" + slug}>Add to cart</button>
        {/* TODO description and tag section */}
        <h3>Posted by: {user_id}</h3>
    </Wrapper>
  )
}

export default ListingPlate