import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";
import Main from "./pages/main";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/:productId' element={<Detail />} />
    </Routes>
  );
}

export default App;
