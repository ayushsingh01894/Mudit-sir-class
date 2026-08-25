
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/signup";
import AdminPanel from "./component/Admin/AdminPanel";
import Dashbord from "./component/Admin/Dashbord";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
          <Route path="/admin/dashbord" element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;