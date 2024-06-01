import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { BookCard }  from "./BookCard";
import bookImg1  from "../assets/img/project-img1.png";
import bookImg2  from "../assets/img/project-img2.png";
import bookImg3  from "../assets/img/project-img3.png";
export const Books = () => {

    const books = [
        {
            title: "Book1",
            description: "Lorem Ipsum",
            imgUrl: bookImg1,
        },
        {
            title: "Book2",
            description: "Lorem Ipsum",
            imgUrl: bookImg2,
        },
        {
            title: "Book3",
            description: "Lorem Ipsum",
            imgUrl: bookImg3,
        },
    ];
    return (

        <section className="book" id="book">
            <Container>
                <Row>
                    <Col>
                        <h2>Books</h2>
                        <p>Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">English</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tamil</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Telugu</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    English Books
                                    <Row>
                                        {
                                            books.map((book, index)=>{
                                                return (
                                                    <BookCard key={index} {...books}></BookCard>

                                                )
                                            }) 
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Tamil Books</Tab.Pane>
                                <Tab.Pane eventKey="third">Telugu Books</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}