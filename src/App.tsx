import './App.css'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import Layout from './Pages/Layout';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/Layout' element={<Layout/>}/>
    </Routes>
  </BrowserRouter>
  );
};

export default App;

