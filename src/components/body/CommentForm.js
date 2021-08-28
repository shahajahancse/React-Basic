import React, {Component} from 'react';
import { Form, Input, Button } from "reactstrap";

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: '',
        }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name] : event.target.value,
        });
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        this.props.addComment(this.props.dishId,this.state.author,this.state.rating,this.state.comment);
        this.setState({
            author: "",
            rating: "",
            comment: "",
        });
        event.preventDefault();
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input onChange={this.handleInputChange} type="text" name="author" value={this.state.author} placeholder="Your name..." required /> <br />
                    <Input onChange={this.handleInputChange} type="select" name="rating" value={this.state.rating} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input><br />
                    <Input onChange={this.handleInputChange} type="textarea" name="comment" value={this.state.comment} placeholder="Your comment" required /> <br />
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        );
    }
}

export default CommentForm;
