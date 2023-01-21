import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import {Toaster} from 'react-hot-toast';
import Register from './pages/Register';
import Login from './pages/Login';
import GlobalProvider from './GlobalContext';
import DashBoard from './pages/DashBoard';
import AdminLayout from './Components/Layouts/AdminLayout';
import Items from './pages/items';
import ItemForm from './pages/ItemForm';
import Orders from './pages/Orders';

function App() {
 
  return (      
    <ChakraProvider>

      <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Admin' element={<AdminLayout><DashBoard/></AdminLayout>} />
          <Route path='/Admin/items' element={<AdminLayout><Items/></AdminLayout>} />
          <Route path='/Admin/item-form' element={<AdminLayout><ItemForm/></AdminLayout>} />
          <Route path='/Admin/item-form/:id' element={<AdminLayout><ItemForm/></AdminLayout>} />
          <Route path='/Admin/orders' element={<AdminLayout><Orders/> </AdminLayout>} />
        </Routes>
        </GlobalProvider>
      </BrowserRouter>
      <Toaster  position='bottom-right'/>
  </ChakraProvider>
 

 );

}

export default App;
