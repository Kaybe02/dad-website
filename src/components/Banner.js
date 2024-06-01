import { useEffect,useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderIMG from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Author", "Mimicry","Scripts"];

    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random()*100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return ()=>{clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }

        if (!isDeleting&&updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">SANTANA BABU</span>
                        <h1>{'  Welcome to my page   '}
                        {/* <span className="wrap">{text}</span> */}
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick={()=>console.log("connect")}>Let's Connect <ArrowRightCircle size={25} style={{ verticalAlign: "text-bottom"}}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={HeaderIMG} alt="Header IMG" /> */}
                    </Col>
                </Row>
            </Container>

        </section>
    )
} 