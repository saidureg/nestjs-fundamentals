import React from "react";

const ProductPage = ({ params, searchParams }) => {
  //   console.log(searchParams);
  return (
    <div>
      <h3>This is Product Page</h3>
      <p>Product ID: {params.id}</p>
      <p>Search Params: {searchParams.category}</p>
    </div>
  );
};

export default ProductPage;
