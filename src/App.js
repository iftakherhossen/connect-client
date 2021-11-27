import './App.css';
import { BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Home/Register/Register';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import MessagingHome from './Pages/Messaging/MessagingHome/MessagingHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <PrivateRoute path="/inbox" element={<MessagingHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;