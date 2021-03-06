import React from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class ProductList extends React.Component {
  render() {
  //console.log(this.props)
    const { items } = this.props;
  

    const allItems = items.map((item, i) => {
      return <ProductItem key={i} info={item} />;
    });
  
    return (
      <React.Fragment>
        <ul>{allItems}</ul>
      </React.Fragment>
    );
  }
}

const mapStoreToProps = (store) => ({
  items: Object.values(store.products),
});

export default connect(mapStoreToProps)(ProductList);

