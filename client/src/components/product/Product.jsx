import React from 'react';

import ProductOverview from './overview/ProductOverview';
import ProductReviews from './reviews/ProductReviews';

const Product = () => (
  <div className="content">
    <section>
      <ProductOverview />
    </section>
    <section></section>
    <section>
      <ProductReviews />
    </section>
  </div>
);

export default Product;
