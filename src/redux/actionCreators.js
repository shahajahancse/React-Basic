import * as actionTypes from "./actionTypes";
import { baseUrl } from "./baseUrl";
import axios from "axios";

export const addComment = (dishId,author,rating,comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment,
    }
})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());

    axios.get(baseUrl + "comments")
        .then(response => response.data)
        .then(comments => dispatch(loadComments(comments)))
        .catch(error => console.log(error.message))
}

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes,
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());
        // setTimeout(() => {
        //     dispatch(loadDishes(DISHES))
        // }, 2000);
        axios.get(baseUrl+"dishes")
          .then(response => response.data)
          .then(dishes => dispatch(loadDishes(dishes)))
          .catch(error => console.log(error.message))
    }
}
