import React, { Component } from "react";

class Gallery extends Component {

    render() {

        return (
            <div>
                {
                    this.props.books.map((book, index) => {
                        let aternative_img = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'
                        let { title, imageLinks, infoLink } = book.volumeInfo

                        return (
                            <a
                                key={index}
                                className="book"
                                href={infoLink}
                                target="_blank"
                            >
                                <img
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : aternative_img}
                                    alt="book image"
                                    className="book-img"
                                />
                                <div className="book-text">
                                    {title}
                                </div>

                            </a>
                        )
                    })
                }
            </div>
        )
    }









}

export default Gallery;