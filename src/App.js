import './App.css';
import Card from './components/Card';
import getData from './cardData';
import { useState, useEffect } from 'react';
import SimpleForm from './components/SimpleForm';
import UncontrolledForm from './components/UncontrolledForm';
import Cat from './components/Cat';
import CatParent from './components/CatParent';

import ProductField from './components/ProductField';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechPage from './components/TechPage';
import BlogPage from './components/BlogPage';
import ReactPage from './components/ReactPage';
import ReactDocPage from './components/ReactDocPage';
import UserStore from './store/user';


function App() {
  const [productData, setProductData] = useState([]);
  const API_URL = 'http://localhost:5000/products';

  const getProducts = async () => {
    const res = await fetch(API_URL);
    const products = await res.json();

    return products;
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProductData(data);
    });
  }, []);


  return (
    <UserStore>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<ProductField products={productData} />}></Route>
          <Route path={'tech'} element={<TechPage />}>
            <Route path='react' element={<ReactPage />}></Route>
            <Route path='react/:docId' element={<ReactDocPage />}></Route>
          </Route>
          <Route path={'blog'} element={<BlogPage />}></Route>

        </Routes>
      </BrowserRouter>
    </UserStore>
  );
}

export default App;

// -- 중간 과제

// const winners = [];

// function App() {
//   let data = [];
//   getData().then((newData) => data = newData);
//   const [winner, setWinner] = useState({
//     company: '',
//     team: '',
//     name: '',
//     phoneNumber: '',
//     email: '',
//   });


//   useEffect(() => {
//     shuffle(data); 
//     data.splice(3);
//     console.log('mount');
//     console.log(data);
//   }, []);

//   const shuffle = (arr) => {
//     arr.sort(() => Math.random() - 0.5);
//   };

//   const pickRandomCard = () => {
//     let num = Math.floor(Math.random() * data.length);
//     let randomCard = data[num];

//     let removed = data.splice(num, 1);
//     winners.push(...removed);

//     return randomCard;
//   };

//   const onButtonClicked = (e) => {
//     if (winners.length === 3) {
//       let names = '';
//       winners.forEach(winner => {
//         names += `${JSON.stringify(winner.name)} `;
//       });
//       alert(`당첨자는 ${names} 입니다`);
//       return;
//     }

//     const winner = pickRandomCard();
//     setWinner(winner);
//   };

//   return (
//     <div>
//       {data.length > -1 && <button onClick={onButtonClicked}>추첨하기</button>}
//       <Card winner={winner} />
//     </div>
//   );
// }

// export default App;
