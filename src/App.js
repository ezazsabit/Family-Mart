
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import HeadNavbar from './Components/HeadNavbar';
import SecondNavbars from './Components/SecondNavbar'
// import Carousel from './Components/Carousel';

import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

import UserList from './Components/UserList';

import Register from './Components/Register';
import Sign from './Components/Sign'
import Additems from './Components/Additems';
import Updateitem from './Components/Updateitem';
import Allitems from './Components/Allitems';
import Requireauth from './Components/Requireauth'
import Singleitem from './Components/Singleitem';
import Contactus from './Components/Contactus';
import Myitems from './Components/Myitems';
import Finalsubmit from './Components/Finalsubmit';





function App() {
  // const { user } = useContext(UserContext);
  return (
    <div className="App">
      <HeadNavbar></HeadNavbar>
      <SecondNavbars></SecondNavbars>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="signUp" element={<Register />} />
        <Route path="login" element={<Sign />} />
        <Route path="/myitems/:email" element={<Myitems />} />
        <Route path="singleitem/:id" element={<Singleitem />} />
        <Route path="manageitems" element={<Requireauth><UserList /></Requireauth>} />
        <Route path="additems" element={<Requireauth><Additems /></Requireauth>} />
        <Route path="allitems" element={<Requireauth><Allitems /></Requireauth>} />
        <Route path="items/:id/edit" element={<Updateitem />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="finalsubmit" element={<Finalsubmit />} />
        {/* <Route path="myitems" element={<Myitems />} /> */}

      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
