import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger"
// import { Redirect } from "react-router"
// import Messenger from "./pages/messeng/Messenger";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route  path="/" element={user ? <Home /> : <Register />}>
        {/* {user ? <Home /> : <Register />} */}
        </Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}>
          
          </Route>
        {/* <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route> */}
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}>
          
        </Route>
        {/* <Route path="/register" element={<Register />}>
         
        </Route> */}
        <Route path="/messenger" element={<Messenger />}> 
        </Route>
        {/* <Route path="/messenge" element={<Messenger />}> </Route> */}
        <Route path="/profile/:username" element={<Profile />}>
         
        </Route>
      </Routes>
    </Router>
  );
}
// "client": "cd client && yarn start",
    // "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\"",
    // "dev:server": "cd client && yarn build && cd .. && yarn start",

    // "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build",

    
export default App;



