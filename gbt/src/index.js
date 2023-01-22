import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Routes, Route, Link } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Anger from './pages/Anger';
// import App from './App';
// import Anxiety from './pages/Anxiety';
// import Gratitude from './pages/Gratitude';


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="Home" element={<Home />} />
          <Route path="Anger" element={<Anger />} />
        </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

