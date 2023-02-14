import { BrowserRouter, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Search from 'pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Route element={<Main />} path="/" />
      <Route element={<Search />} path="/search" />
    </BrowserRouter>
  );
}

export default App;
