import "./aboutUs.css";
import logo from "./logo.jpg";
import Header from "../../header";
import Image from "react-bootstrap/Image";

function AboutUs() {
    return (
        <div id="main">
            <Header />
            <h1 id="heading"> About Us</h1>
            <div id="image">
                <Image src={logo} />
            </div>

            <div id="message">
                <h3>Who are we?</h3>
                <p>
                    FetchAPet is an online platform that allows you to fetch or
                    help others fetch a best friend.
                </p>
                <h3>Our Mission</h3>
                <p>
                    Our mission is to help all creatures find a forever loving
                    home because we believe that all living species deserve
                    warmth and love.
                </p>
                <h3>How to use our platform?</h3>
                <p>
                    You can browse our pet catalog, or use our search engine to
                    get results for a specific species or even pets located at a
                    specific location. <br></br>
                    If you would like to make a post, create a free account to
                    get started!
                </p>
            </div>
        </div>
    );
}
export default AboutUs;
