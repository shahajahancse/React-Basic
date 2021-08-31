import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import LoadComponents from "./LoadComponents";
import CommentForm from "./CommentForm";
import { baseUrl } from "../../redux/baseUrl";

const DishDetail = props => {
    console.log(props);
    return (
        <div>
            <Card style={{marginTop:'10px'}}>
                <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
                <CardBody style={{textAlign:"left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        {props.dish.price}
                    </CardText>
                    <hr />
                    <LoadComponents comments= { props.comments } commentIsLoading = { props.commentsIsLoading } ></LoadComponents>
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    );
}
export default DishDetail;
