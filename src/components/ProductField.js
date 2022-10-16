import ProductList from './ProductList';
import Search from './Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductField({ products }) {
  const [state, setState] = useState({
    searchText: '',
    inStock: false,
  });
  return (
    <div>
      <Search state={state} setState={setState} />
      {/* <ProductList products={products} searchText={state.searchText} inStock={state.inStock} /> */}
      <Link to="/blog">Blog</Link> | <Link to="/tech">Tech</Link>
    </div>
  );
}
