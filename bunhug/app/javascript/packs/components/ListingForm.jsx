import React from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'
import setAxiosHeaders from "./AxiosHeaders";
class ListingForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.titleRef = React.createRef()
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/v1/listings', {
        listing: {
          title: this.titleRef.current.value, //create to access input data
          active: false, //user will not add an inactive listing 
        },
      })
      .then(response => {
        const listing = response.data
        this.props.createListing(listing);
        this.props.clearErrors();
      })
      .catch(error => {
        this.props.handleErrors(error);
      })
    e.target.reset()
  }

  render() {
    return (
        //try to subit before create
      <form onSubmit={this.handleSubmit} className="my-3">
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              name="title"
              ref={this.titleRef}
              required
              className="form-control"
              id="title"
              placeholder="Listing title here..."
            />
          </div>
          <div className="form-group col-md-4">
            <button className="btn btn-outline-success btn-block">
              Add Listing
            </button>
          </div>
        </div>
      </form>
      
    )
  }
}

export default ListingForm

ListingForm.propTypes = {
  createListing: PropTypes.func.isRequired,
  handleErrors: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
}