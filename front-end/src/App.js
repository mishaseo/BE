import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
function App() {
    return (
        <div>
            {/*List of Routes*/}
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
