import "./intro.scss"
import { render } from 'react-dom';
import Typed from 'react-typed';

export default function Intro() {
    return (
        <div className= "intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png " alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm </h2>
                    <h1>Parashram Gore</h1>
                    <h3>Freelance <span className="freelace">
                    <Typed
                    strings={['Graphic Designer','Video editor','Web Designer','UI / UX']}
                    typeSpeed={100}
                    backSpeed={70}
                    loop ></Typed>
                    
                        </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>

        </div>
    )
}
