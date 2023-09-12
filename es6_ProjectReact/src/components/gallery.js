import React, { Component } from "react";

class Gallery extends Component {

    render() {

        return (
            <div>
                {
                    this.props.books.map((book) => {

                        let {title} = book.volumeInfo

                        return (
                            <div key={title}>{title}</div>
                        )
                    })
                }
            </div>
        )
    }









}

export default Gallery;