import React, { Component } from 'react';
import BookTitle from './bookTitle';
class Book extends Component {

    state = {
        a1: true,
        a2: [],
        selected: null,
        title: this.props.book.title
    }

    onClickHandler = (title) => (event) => {
        this.setState({
            selected: title
        }, () => {console.log(this.state.selected)
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {title: nextProps.book.title}
        );
    }

    render() { 

        const { ISDN } = this.props.book;

        return(
        <div>
            <BookTitle title = {this.state.title} onClickFunc = {this.onClickHandler} />
            <p>{ISDN}</p>
        </div>
    );
        }
}

export default Book;