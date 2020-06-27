import React from 'react';
import ProductRow from './ProductRow.js';
import ProductTableHeader from './ProductTableHeader.js';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.sortByColumnAndDirection = this.sortByColumnAndDirection.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.state = {
      sort: {
        column: 'name',
        direction: 'desc'
      }
    };
  }

  sortByColumnAndDirection(objectA, objectB) {
    let isDesc = this.state.sort.direction === 'desc' ? -1 : 1;
    let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
    if (this.state.sort.column === 'price') {
      [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d.]/g, ''), ''), 10);
    }
    if (a > b) {
      return 1 * isDesc;
    }
    if (a < b) {
      return -1 * isDesc;
    }
    return;
  }

  sortProducts() {
    let productsAsArray = Object.keys(this.props.products).map((p_idx) => this.props.products[p_idx]);
    return productsAsArray.sort(this.sortByColumnAndDirection);
  }

  handleDestroy(id) {
   this.props.onDestroy(id);
 }

 handleSort(column, direction) {
    this.setState({
      sort: {
        column: column,
        direction: direction
      }
    });
  }

  render() {

    let rows = [];

    this.sortProducts().forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      rows.push(
        <ProductRow product={product} key={product.id} ></ProductRow>
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <ProductTableHeader
                onSort={this.handleSort}
                currentSort={this.state.sort}
                column="name" />
              <ProductTableHeader
                onSort={this.handleSort}
                currentSort={this.state.sort}
                column="price" />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
