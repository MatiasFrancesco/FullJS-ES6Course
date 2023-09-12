import React, { Component } from "react";

class Gallery extends Component {

    render() {


        //console.log("Comment if u can read this!")
        return (
            <div>
                Gallery component
                {
                    this.props.items.map(item => {
                        console.log("Comment if u can read this!")
                        let { title } = item.volumeInfo
                        return (
                            <div>{title}</div>
                        )
                    })
                }
            </div>
        )
    }

}
export default Gallery;