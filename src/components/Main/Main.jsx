import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Singup from './Singup/Singup';
import Booking from './Booking/Booking';
import NotFound from '../NotFound/NotFound';

const Main = () => {
  return <div>

    <Routes>
      <Route element={<Singup />} path='/' />
      <Route element={<Home />} path='/singup' />
      <Route element={<Booking />} exact path='/booking' />
      <Route element={<NotFound />} path={"/*"} />
    </Routes>



  </div>;
};

export default Main;
