import React, { Component } from 'react';

import Book from './book';

class BookList extends Component {

    state = {
    books: [
            {
                title: 'Avatar',
                ISDN: 'abc123'
            },
            {
                title: 'Star Wars',
                ISDN: 'abc123'
            },
            {
                title: 'James Bond',
                ISDN: 'abc123'
            },

        ]
    }

    constructor() {
        super();
        console.log(1)
    }

    componentWillMount() {
        console.log(2);
    }

    componentDidMount() {
        console.log(4);

        setTimeout( () => {
            this.setState({
                books: [...this.state.books, {title: 'Egri csillagok', ISDN: 'abc234'}]
            });
        }, 2000);

        setTimeout(() => {
            this.setState({
                books: this.state.books.map(book => ( ( book.title==='Avatar') ? ({...book, title: 'A lány hét névvel'}) : ({...book}) ) )
                });
            }, 4000);
            }

    render() {
        console.log(3);
        return (
            <div>
            {this.state.books.map( (book, index) => (<Book book={book} key={index}/>)
            )}
            </div>
        );
    }
}

export default BookList;