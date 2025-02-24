import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './common/Nav';
import Index from './pages/home';
import GlobalStyle from './styled/GlobalStyled';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
