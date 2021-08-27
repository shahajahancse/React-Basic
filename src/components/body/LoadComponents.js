// import react from "react";
import dateFormat from "dateformat";

const LoadComponents = props => {
    return (
        props.comments.map(comment => {
            return(
                <div key={comment.id}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                </div>
            );
        })
    );
}

export default LoadComponents;