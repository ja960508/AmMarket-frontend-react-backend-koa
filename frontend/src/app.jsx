import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { check } from "./modules/auth";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Main from "./pages/main";
import Post from "./pages/post";
import Register from "./pages/register";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localInfo = localStorage.getItem("auth");
    if (localInfo) {
      dispatch(check());
    }
  }, [dispatch]);
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/:page' element={<Main />} />
      <Route path='/products/:productId' element={<Detail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/post/' element={<Post />} />
      <Route path='/post/:productId' element={<Post />} />
    </Routes>
  );
}

export default App;
