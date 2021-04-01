import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`

const ListingImage = styled.div`
  height: 50px;

  img {
    height: 50px;
    width: 50px;
  }
`

const ListingTitle = styled.div`
  padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;

  a {
    color: #fff;
    background-color: #71b406;
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;

    &:hover{
      border-color: #619a07;
      background: #619a07;
    }
  }
`


const ListingCard = (props) => {
  const {title, image_url, slug, price} = props.attributes

  return (
    <Card>
      <ListingImage>
        <img src={image_url} alt={title} width="50" />
      </ListingImage>
      <ListingTitle>
        {title}
      </ListingTitle>
      <div className="listing-price">
        {price}
      </div>
      <LinkWrapper>
      <Link to={"/listings/" + slug}>Details</Link>
      </LinkWrapper>
    </Card>
  )
}

export default ListingCard