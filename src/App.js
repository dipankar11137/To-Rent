import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import CreateAccount from './Components/Login/CreateAccount';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAUth';
import AddItems from './Components/Pages/AddItems/AddItems';
import Home from './Components/Pages/Home/Home';
import RoomDetails from './Components/Pages/Home/RoomDetails';
import ManageFlats from './Components/Pages/ManageFlats/ManageFlats';
import Payment from './Components/Pages/Payment/Payment';
import EditProfile from './Components/Pages/Profile/EditProfile';
import Profile from './Components/Pages/Profile/Profile';
import ShowBookProducts from './Components/Pages/ShowBookProduct/ShowBookProducts';
import Navbar from './Components/Share/Navbar';
import NotFound from './Components/Share/NotFound';
AOS.init();
function App() {
  return (
    <div className="bg-green-100">
      {/* <CreateAccount /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/editProfile"
          element={
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/roomDetails/:id"
          element={
            <RequireAuth>
              <RoomDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/addItems" element={<AddItems />}></Route>
        <Route
          path="/showBookProducts"
          element={
            <RequireAuth>
              <ShowBookProducts />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageFlats"
          element={
            <RequireAuth>
              <ManageFlats />
            </RequireAuth>
          }
        ></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
