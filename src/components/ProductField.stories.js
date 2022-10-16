import React from 'react';
import ProductField from './ProductField';



let data = {
  "products": [
    {
      "category": "Sporting Goods",
      "price": "$49.99",
      "stocked": true,
      "name": "Football"
    },
    {
      "category": "Sporting Goods",
      "price": "$9.99",
      "stocked": true,
      "name": "Baseball"
    },
    {
      "category": "Sporting Goods",
      "price": "$29.99",
      "stocked": false,
      "name": "Basketball"
    },
    {
      "category": "Electronics",
      "price": "$99.99",
      "stocked": true,
      "name": "iPod Touch"
    },
    {
      "category": "Electronics",
      "price": "$399.99",
      "stocked": false,
      "name": "iPhone 5"
    },
    {
      "category": "Electronics",
      "price": "$199.99",
      "stocked": true,
      "name": "Nexus 7"
    }
  ]
};

export default {
  component: ProductField,
  title: 'ProductField'
};

const Template = (args) => <ProductField {...args} />;

export const Field = Template.bind({});
Field.args = {
  products: data
};