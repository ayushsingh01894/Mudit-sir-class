
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/signup";
import AdminPanel from "./component/Admin/AdminPanel";
import Dashbord from "./component/Admin/Dashbord";
import Navbar from "./component/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;