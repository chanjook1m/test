import styled from 'styled-components';

const ProductName = styled.td`
  color: ${(props) => (props.stocked ? 'black' : 'red')};
`;

export default function Item({ name, price, inStock }) {
  return (
    <tr key={name}>
      <ProductName stocked={inStock}>{name}</ProductName>
      <td>{price}</td>
    </tr>
  );
}
