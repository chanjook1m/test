export default function Search({ state, setState }) {

  const handleOnChange = (e) => {
    if (e.target.name === 'searchText') {
      setState({ ...state, [e.target.name]: e.target.value });
    }
    else if (e.target.name === 'inStock') {
      setState({ ...state, [e.target.name]: e.target.checked });
    }

  };

  return (
    <form>
      <input type='text' id='search' name='searchText' placeholder='Search...' onChange={handleOnChange} value={state.searchText} />
      <p><input type='checkbox' name='inStock' value='stock' checked={state.inStock} onChange={handleOnChange} />Only show products in stock</p>
    </form>
  );
}