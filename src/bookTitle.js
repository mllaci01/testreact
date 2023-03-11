import React from "react";

const BookTitle = (props) => {
    return <h2 onClick={props.onClickFunc(props.title)}>{props.title}</h2>
}

export default BookTitle;