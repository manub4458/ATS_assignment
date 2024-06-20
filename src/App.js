
import './App.css';
import Landing from './components/landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
