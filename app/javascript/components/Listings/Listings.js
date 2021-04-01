import React, { useState, useEffect, Fragment } from 'react'
import axios from "axios"
import ListingCard from "./ListingCard"
import styled from 'styled-components'


const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;

  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`
const Header = styled.div`
  padding: 100px,10px,10px,100px,;

  > h1 {
    font-weight: 300;
    font-size: 26px;
  }
`



const Listings = () => {
const [listings, setListings] = useState([]);

useEffect(() => {
  //GET points this path of Rails api
  axios.get('/api/v1/listings.json')
    //successful
    .then( function(resp){
      setListings(resp.data.data)
    })
    //error state
    .catch( function(resp){console.log(resp)})
    //effect only fired if number of listings changes
}, [listings.length])

const grid = listings.map(items=>{
  return(
  <ListingCard
  key={items.attributes.title}
  attributes={items.attributes}
  />
  )
})

  return(
    <Fragment>
      <Home>
        <Header>
          <h1>Bunnyhug</h1>
          <p className="subheader">It's about the threads.</p>
        </Header>
        <Grid>
          {grid}
        </Grid>
      </Home>
    </Fragment>
  )
}

export default Listings