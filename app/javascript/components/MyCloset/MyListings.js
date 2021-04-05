import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import AxiosHelper from '../../utils/Requests/AxiosHelper'
/*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Uncomment these if you want to use the V2 API (Graphql):
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
import airlineQuery from '../../queries/airlineQuery'
import createReviewQuery from '../../queries/createReviewQuery'
import deleteReviewQuery from '../../queries/deleteReviewQuery'
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const MyListings = (props) => {
    const [listings, setListings] = useState([])
    const [listing, setListing] = useState({ title: '', image_url: '', price: 0 })
    const [error, setError] = useState('')
    const [loaded, setLoaded] = useState(false)
    this.state = {
        active: this.props.listing.active,
    }
    this.inputRef = React.createRef()
    this.inactiveRef = React.createRef()

    useEffect(()=> {
     const slug = props.match.params.slug

      axios.get(`/api/v1/listings/${slug}`)
      .then( (resp) => {
       setListing(resp.data)
       setLoaded(true)
      })
      .catch( data => console.log('Error', data) )
     }, [])

    // Modify text in listing form
    const handleChange = (e) => {
     setListing(
         Object.assign(
             {},
             listing,
             {[e.target.name]: e.target.value}))
    }

    // Create a listing
    const handleSubmit = (e) => {
      e.preventDefault()

      AxiosHelper()

      const listing_id = parseInt(listing.data.id)
      axios.post('/api/v1/listings', { ...listing, listing_id })
      .then( (resp) => {
        setListingss([...listings, resp.data.data])
        setListing({ title: '', image_url: '', price: 0 })
        setError('')
      })
      .catch( resp => {
        let error
        switch(resp.message){
          case "Request failed with status code 401":
            error = 'Please log in to edit your listings.'
            break
          default:
            error = 'Something went wrong.'
        }
        setError(error)
      })
    }

    // User destroys a listing
    const handleDestroy = (id, e) => {
        e.preventDefault()
        AxiosHelper()
        const confirmation = confirm('Are you sure?')
        if (confirmation) {
            axios.delete(`/api/v1/listings/${slug}`)
            .then( (resp) => {
                // return non-deleted user listings
                getMyListings()
            })
            .catch( data => console.log('Error deleting listing', data) )
        }
    }

    //call to grab the listing data after a change
    const getMyListings = () => {
        //GET points this path of Rails api
        axios.get('/api/v1/listings.json')
        //successful
        .then( function(resp){
            setListings(resp.data.data)
            setLoaded(true)
        })
        //error state
        .catch( function(resp){
            //setLoaded(true)
            console.log(resp)
            error = 'There was an error loading your listings...'
            setError(error)
        })
    }

    // set score
    const setRating = (score, e) => {
      e.preventDefault()
      setReview({ ...review, score })
    }

    let userListings

    if (listings && listings.length > 0) {
        userListings = listings.map( (listing, index) => {
        return (
            // TODO name
            <div>
                <td>
                   <input
                       key={index}
                       id={listing.id}
                       //attributes={listing.attributes}
                       defaultValue={listing.title}
                       disabled={this.state.active}
                       onChange={this.handleChange} //toggle change handling when text is selected and changed
                       ref={this.inputRef}
                       className="form-control"
                    />
                </td>
                <td>
                   <input
                       key={index}
                       id={listing.id}
                       defaultValue={listing.image_url}
                       disabled={this.state.active}
                       onChange={this.handleChange} //toggle change handling when text is selected and changed
                       ref={this.inputRef}
                       className="form-control"
                    />
                </td>
                <td>
                   <input
                       key={index}
                       id={listing.id}
                       defaultValue={listing.title}
                       disabled={this.state.price}
                       onChange={this.handleChange} //toggle change handling when text is selected and changed
                       ref={this.inputRef}
                       className="form-control"
                    />
                </td>
                <td className="text-right">
                           {/* make listing active/inactive */}
                           <div className="form-check form-check-inline">
                               <input
                               type="boolean"
                               defaultChecked={this.state.active}
                               type="checkbox"
                               onChange={this.handleChange} //toggle change handling when checkbox is selected and changed
                               ref={this.inactiveRef}
                               className="form-check-input"
                               id={`active-${listing.id}`}
                               />
                               <label className="form-check-label" htmlFor={`active-${listing.id}`}>Active</label>
                           </div>
                           {/* delete listing */}
                           <button onClick={props.handleDestroy.bind(this, props.id)} className="btn btn-outline-danger">Delete</button>
                </td>
            </div>
        )
      })
    }

    else {
        userListings = <button className="btn btn-outline-success btn-block" to={"/"}>Add Listing</button>
    }


  return(
    <Wrapper>
      {
        loaded &&
        <Fragment>
            {/* ternary operator to either show OR hide listing depending on hideInactiveListings and props is true/ false */}
            <tr
                className={`${
                this.state.active && this.props.hideInactiveListings
                    ? `d-none`
                    : ''
            } ${this.state.active ? 'table-light' : ''}`}>

                <td>
                <svg
                    className={`bi bi-check-circle ${
                    this.state.active ? `text-success` : `text-muted`
                    }`}
                    width="2em"
                    height="2em"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    d="M17.354 4.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L10 11.293l6.646-6.647a.5.5 0 01.708 0z"
                    clipRule="evenodd"
                    />
                    <path
                    fillRule="evenodd"
                    d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 0010 4.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </td>
                  {userListings}
            </tr>


            {/* TODO */}
            <ListingForm
              name={airline.data.attributes.name}
              review={review}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              error={error}
            />
        </Fragment>
      }
    </Wrapper>
  )
}

export default Airline
