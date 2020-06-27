import React from 'react';
import './ProductTableHeader.css';

class ProductTableHeader extends React.Component {
  //  To keep track of the sorting buttons
  constructor(props) {
    super(props);
     this.handleSort = this.handleSort.bind(this);
    // this.state = {sort: {column: 'name', direction: 'desc'}};
  }

  handleSort(e) {
    this.props.onSort(this.props.column, e.target.name);
  }

  render() {
    let currentSort = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction: false;

    return(
      <th>
        {this.props.column}
        <button
          onClick={this.handleSort}
          name='asc'
          className={currentSort === 'asc' ? "ProductTableHeader-current": ""} >
          &#x25B2;
        </button>
        <button
          name='desc'
          onClick={this.handleSort}
          className={currentSort === 'desc' ? "ProductTableHeader-current": ""} >
          &#x25BC;
        </button>
      </th>
    );
  }
}

export default ProductTableHeader;
