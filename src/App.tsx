import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Intro from "./pages/Intro.tsx";
import Layout from "./components/Layout.tsx";
import Cart from "./pages/Cart.tsx";
import Favorite from "./pages/Favorite.tsx";
import Profile from "./pages/Profile.tsx";


function App() {


    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/intro" element={<Intro />} />
            </Routes>
        </Router>
    )
}

export default App
