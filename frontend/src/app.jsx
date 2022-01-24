import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Main from "./pages/main";
import Post from "./pages/post";
import Register from "./pages/register";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/:productId' element={<Detail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/post' element={<Post />} />
    </Routes>
  );
}

export default App;
