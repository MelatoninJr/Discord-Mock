import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from './components/header'
import PageContainer from './components/pagecontainer'
function App() {
  return (
    <HashRouter basename='/'>
    <Routes>
      <Route path='/' element={<PageContainer/>} />
    </Routes>
  </HashRouter>
  );
}

export default App;
