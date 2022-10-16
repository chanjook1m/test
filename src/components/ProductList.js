import Category from './Category';
import Item from './Item';

export default function ProductList({ products, searchText, inStock }) {
  let rows = [];
  let category = '';

  products.forEach((product) => {
    if (product.name.indexOf(searchText) === -1) return;
    if (product.stocked !== inStock) return;

    if (category !== product.category) {
      category = product.category;
      rows.push(<Category key={product.category} category={product.category} />);
    }

    rows.push(<Item name={product.name} key={product.name} price={product.price} inStock={inStock} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
