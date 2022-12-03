import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyRegistr from './MyRegistr/MyRegistr';
import Navbar from './Navbar/Navbar';
import TableAdd from './TableAdd/TableAdd';
import TableList from './TableList/TableList';
import FoodAdd from './FoodAdd/FoodAdd';
import ProtectRouter from './ProtectRouter';
import { AddGetUserData,GetOrderData } from './store/action';
import { useEffect, useState } from 'react'
import FoodDetail from './FoodDetail/FoodDetail';
import { useDispatch, } from 'react-redux/es/exports'




function App() {
  const dispatch = useDispatch()

  const [Token, setToken] = useState(localStorage.getItem("token"))

  useEffect(() => {
    if (Token) {
      dispatch(AddGetUserData(Token))
      dispatch(GetOrderData())
     
    }
  }, [Token])
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>

          <Route element={<ProtectRouter></ProtectRouter>}>
            <Route path='/tableadd' element={<TableAdd></TableAdd>}></Route>
          </Route>

          <Route path='/registr' element={<MyRegistr></MyRegistr>}></Route>
          <Route path='/detail/:id' element={<FoodDetail></FoodDetail>}></Route>
          <Route path='/' element={<TableList></TableList>}></Route>
          <Route path='/foodadd' element={<FoodAdd></FoodAdd>}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
