import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import Home from "./pages/home";
import PostAPet from "./pages/createPost";
import AnimalPage from "./pages/animalPages/animalPage";
import DogPage from "./pages/animalPages/dogPage";
import CatPage from "./pages/animalPages/catPage";
import BirdPage from "./pages/animalPages/birdPage";
import FishPage from "./pages/animalPages/fishPage";
import RabbitPage from "./pages/animalPages/rabbitPage";
import OtherPage from "./pages/animalPages/otherPage";
import MyPosts from "./pages/myPosts";
import PetInfoPage from "./pages/animalPages/petInfoPage";
import UploadImage from "./pages/uploadImage";
function App() {
    return (
        <div>
            {/*List of Routes*/}
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/createpost" element={<PostAPet />} />
                    <Route path="/animal" element={<AnimalPage />} />
                    <Route path="/dog" element={<DogPage />} />
                    <Route path="/cat" element={<CatPage />} />
                    <Route path="/bird" element={<BirdPage />} />
                    <Route path="/fish" element={<FishPage />} />
                    <Route path="/rabbit" element={<RabbitPage />} />
                    <Route path="/other" element={<OtherPage />} />
                    <Route path="/myposts" element={<MyPosts />} />
                    <Route path="/petInfo" element={<PetInfoPage />} />
                    <Route path="/petImageUpload" element={<UploadImage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
