import { Col } from "react-bootstrap";

export const BookCard = ({title,description,imgUrl}) => {
    return (
        <Col sm={6} md = {4}>
            <div className="book-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </Col>
    )
}