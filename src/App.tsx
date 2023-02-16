import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import Search from 'pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Search />} path="/search" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
