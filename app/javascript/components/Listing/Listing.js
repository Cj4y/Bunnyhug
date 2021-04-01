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

const ItemColumn = styled.div`
  background: #fff;
  max-width: 80%;
  width: 80%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

const SellerColumn = styled.div`
  background: #fff;
  max-width: 20%;
  width: 20%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
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
    // console.log(slug)
     axios.get(url)
     .then(resp=>{
        console.log(resp)
        setListing(resp.data.data)
    //   //data is now loaded
        setLoaded(true)
     })
     .catch(data => console.log('Error', data))
    //console.log(props)
  }, [])

  return(

    <Wrapper>
      <p>hi</p>
        {/* //make sure the requested data is loaded before rendering */}
        {  loaded &&
          <Fragment>
            <ItemColumn>
              <ListingPlate
                attributes={listing.attributes}
              />
            </ItemColumn>
            <SellerColumn>
            {/* attributes={listing.data.attributes} average={average}> */}
            <h3>Seller info</h3>
            </SellerColumn>
          </Fragment>
        }
      {/* TODO add "listing not found if error*/}
    </Wrapper>
  )
}

export default Listing
