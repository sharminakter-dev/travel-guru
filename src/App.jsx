import { BrowserRouter , Routes, Route } from "react-router";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Booking from "./components/Booking/Booking";
import Search from "./components/Search/Search";
import Auth from "./components/Auth/Auth";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import User from "./components/User/User";
import AuthState from "./components/AuthState/AuthState";

function App() {

  return (
    <>
      <BrowserRouter basename="/travel-guru/ >
        <AuthState/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/booking/:name' element={<Booking/>} />
          <Route path="/search/:destination" element={
            <PrivateRoute>
              <Search/>
  
            </PrivateRoute>}/>
            <Route path="/user" element={
            <PrivateRoute>
              <User/>
            </PrivateRoute>}/>
          <Route path="/login" element={<Auth type='login' />} />
          <Route path="/register" element={<Auth type='register' />} />
          <Route path='*' element={<NotFound/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
