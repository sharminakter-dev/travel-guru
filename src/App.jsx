import { BrowserRouter , Routes, Route } from "react-router";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Booking from "./components/Booking/Booking";
import Search from "./components/Search/Search";
import Auth from "./components/Auth/Auth";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/booking/:name' element={<Booking/>} />
          <Route path="/search/:destination" element={<Search/>} />
          <Route path="/login" element={<Auth type='login' />} />
          <Route path="/register" element={<Auth type='register' />} />
          <Route path='*' element={<NotFound/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
