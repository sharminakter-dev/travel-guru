import { BrowserRouter , Routes, Route } from "react-router";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Booking from "./components/Booking/Booking";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/booking/:name' element={<Booking/>} />
          <Route path='*' element={<NotFound/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
