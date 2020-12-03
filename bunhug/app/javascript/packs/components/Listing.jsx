import React from 'react'
import PropTypes from 'prop-types'

class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: this.props.listing.complete,
    }
  }
  render() {
    const { listing } = this.props
    return (
      <tr className={`${this.state.complete ? 'table-light' : ''}`}>
        <td>
          <svg
            className={`bi bi-check-circle ${
              this.state.complete ? `text-success` : `text-muted`
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
            disabled={this.state.complete}
            className="form-control"
            id={`listing__title-${listing.id}`}
          />
        </td>
        <td className="text-right">
          <div className="form-check form-check-inline">
            <input
              type="boolean"
              defaultChecked={this.state.complete}
              type="checkbox"
              className="form-check-input"
              id={`complete-${listing.id}`}
            />
            <label
              className="form-check-label"
              htmlFor={`flagged-${listing.id}`}
            >
              Flag?
            </label>
          </div>
          <button className="btn btn-outline-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default Listing

Listing.propTypes = {
  listing: PropTypes.object.isRequired,
}