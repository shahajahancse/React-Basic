import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import { baseUrl } from "../../redux/baseUrl";

const MenuItem = props => {
    return (
        <div>
            <Card className="img-card">
                <CardBody>
                    <CardImg className="img-opacity"
                        width="100%"
                        alt={props.dish.name}
                        src={baseUrl + props.dish.image}>
                    </CardImg>
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }}
                            onClick={props.DishSelect}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;
