import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Seller from './Seller'
import ListingPlate from './ListingPlate'
//TODO Add the user and their description to the sidebar
//import User from './User'
//import Header from './Header'
//import AxiosHelper from '../../utils/Requests/AxiosHelper'
/*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Uncomment these if you want to use the V2 API (Graphql):
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
import listingQuery from '../../queries/listingQuery'
import createSellerQuery from '../../queries/createSellerQuery'
import deleteSellerQuery from '../../queries/deleteSellerQuery'
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Column = styled.div`
  background: #fff;
  max-width: 50%;
  width: 50%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &:last-child {
    background: black;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`

const Main = styled.div`
  padding-left: 60px;
`

const Listing = (props) => {
  const [listing, setListing] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    const slug = props.match.params.slug
    const url = `/api/v1/listings/${slug}`
    console.log(slug)
    axios.get(url)
    .then(resp=>{
      setListing(resp.data)
      //data is now loaded
      setLoaded(true)
    })
    .catch(resp => console.log(resp))
  }, [])

  return(

    <Wrapper>

        {/* //make sure the requested data is loaded before rendering */}
      {/* //  loaded && */}
        {/* <Fragment> */}
          <Column>
            {/* <Main> */}



            {loaded &&
              <ListingPlate
                attributes={listing.data.attributes}

              />
            }

            {/* </Main> */}
          </Column>
          <Column>
          {/* attributes={listing.data.attributes} average={average}> */}
            Seller info
          </Column>
        {/* </Fragment> */}
      {/* } */}
      {/* TODO add "listing not found if error*/}
    </Wrapper>
  )
}

export default Listing
