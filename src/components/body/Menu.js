import React, { Component } from "react";
import Dishes from '../../data/dishes';
import Comments from '../../data/comments';
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import {CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class Menu extends Component {
    state = {
        dishes : Dishes,
        comments: Comments,
        selectedDish: null,
        modalOpen: false,
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            // modalOpen: !this.state.modalOpen, same as  this.toggleModal();
        });
        this.toggleModal();  // same as modalOpen: !this.state.modalOpen
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        });
    }

    render() {
        document.title='Menu';
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem
                    key={item.id}
                    dish={item}
                    DishSelect={ ()=> this.onDishSelect(item) }
                />
            );
        });

        let dishDetail = null;
        if (this.state.selectedDish !== null) {
            const comments = this.state.comments.filter(comment => comment.dishId === this.state.selectedDish.id);
            dishDetail = <DishDetail
                dish = { this.state.selectedDish }
                comments = { comments }
            />
        }

        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;
