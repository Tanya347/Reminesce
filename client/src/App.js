import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { AuthContext } from "./authContext";

function App() {

  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Login title="Login to Create"/>;
    } else {
      return children;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create" element={<Register/>} />
        <Route path="/view/:id" element={<ProtectedRoute><Meal/></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
