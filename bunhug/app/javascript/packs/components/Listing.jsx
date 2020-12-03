import React from 'react'
import PropTypes from 'prop-types'

import _ from "lodash";
import axios from "axios";
import setAxiosHeaders from "./AxiosHeaders";
class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        active: this.props.listing.active,
    }
    this.handleDestroy = this.handleDestroy.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateListing = this.updateListing.bind(this)
    this.inputRef = React.createRef()
    this.inactiveRef = React.createRef()
    this.path = `/api/v1/listings/${this.props.listing.id}`
}
handleChange() {
    this.setState({
        active: this.inactiveRef.current.checked,
    })
    this.updateListing()
}
updateListing = _.debounce(() => {
    setAxiosHeaders()
    axios
        .put(this.path, {
            listing: {
                title: this.inputRef.current.value,
                active: this.inactiveRef.current.checked,
            },
        })
        .then(() => {
            this.props.clearErrors()
        })
        .catch(error => {
            this.props.handleErrors(error)
        })
}, 1000)
handleDestroy() {
    setAxiosHeaders()
    const confirmation = confirm('Are you sure?')
    if (confirmation) {
        axios
            .delete(this.path)
            .then(response => {
                this.props.getListings()
            })
            .catch(error => {
                console.log(error)
            })
    }
}
  render() {
    const { listing } = this.props
    return (
      //ternary operator to either show OR hide listing depending on hideInactiveListings and props is true/ false
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
        <td>
          <input
            type="text"
            defaultValue={listing.title}
            disabled={this.state.active}
            onChange={this.handleChange} //toggle change handling when text is selected and changed
            ref={this.inputRef}
            className="form-control"
            id={`listing__title-${listing.id}`}
          />
        </td>
        <td>
          <input
                type="text"
                defaultValue={listing.category}
                disabled={this.state.active}
                onChange={this.handleChange} //toggle change handling when text is selected and changed
                ref={this.inputRef}
                className="form-control"
                id={`listing__category-${listing.id}`}
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={listing.image_url}
                disabled={this.state.active}
                onChange={this.handleChange} //toggle change handling when text is selected and changed
                ref={this.inputRef}
                className="form-control"
                id={`image_url-${listing.id}`}
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={listing.details}
                disabled={this.state.active}
                onChange={this.handleChange} //toggle change handling when text is selected and changed
                ref={this.inputRef}
                className="form-control"
                id={`listing__details-${listing.id}`}
              />
            <td>
              <input
                type="text"
                defaultValue={listing.colour}
                disabled={this.state.active}
                onChange={this.handleChange} //toggle change handling when text is selected and changed
                ref={this.inputRef}
                className="form-control"
                id={`listing__colour-${listing.id}`}
              /> 
            </td>
            <td>
              <input
                type="text"
                defaultValue={listing.price}
                disabled={this.state.active}
                onChange={this.handleChange} //toggle change handling when text is selected and changed
                ref={this.inputRef}
                className="form-control"
                id={`listing__price-${listing.id}`}
              />
            </td>
            </td>
        <td className="text-right">
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
            <label
              className="form-check-label"
              htmlFor={`active-${listing.id}`}
            >
              Flag?
            </label>
          </div>
          
          
          <button 
          onClick={this.handleDestroy}
          className="btn btn-outline-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default Listing

Listing.propTypes = {
  listing: PropTypes.object.isRequired,
  getListing: PropTypes.func.isRequired,
  hideInactiveListings: PropTypes.bool.isRequired,
  clearErrors: PropTypes.func.isRequired,
}