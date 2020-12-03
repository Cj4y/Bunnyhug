import React from 'react'
import PropTypes from 'prop-types'

class Listings  extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.toggleInactiveListings()
}
  render() {
    return (
      <>
      <hr />
      <button
        className="btn btn-outline-primary btn-block mb-3"
        onClick={this.handleClick}
              >
        {this.props.hideInactiveListings
          ? `Show Inactive Listings `
          : `Hide Inactive Listings `}
        </button>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Listing</th>
                <th scope="col" className="text-right">
                Favourite
                </th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </>
    )
  }
}
export default Listings
TodoItems.propTypes = {
  toggleInactiveListings: PropTypes.func.isRequired,
  hideCompletedTodoItems: PropTypes.bool.isRequired,
}
