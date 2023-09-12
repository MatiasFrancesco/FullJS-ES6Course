import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Gallery from './gallery'


class Global extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            items: []
        }
    }

    search() {
        //console.log(`search ${this.state.query}`);
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="
        fetch(`${BASE_URL}${this.state.query}`, { methods: "GET" })
            .then(response => response.json())
            .then(json => {
                let { items } = json;
                this.setState({ json })
                

            })

    }


    render() {
        return (
            <div>
                <h2 id='title'>Book Explorer 1!</h2>
                <Form className='searchForm'>
                    <Form.Group>
                        <Form.Control
                            className='sf-textBar'
                            type='text'
                            placeholder='Search a book'
                            onChange={e => this.setState({ query: e.target.value })}
                        />
                        <Button
                            onClick={() => this.search()}
                            className='sf-subBtn'

                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </Form.Group>
                    
                    <Gallery items={this.state.items} />
                </Form>
                
                
            </div>
        )
    }
}











/*
function SearchBookForm() {
    //searchBook is my query
    const [searchBook, setSearchBook] = useState('');
    const [items] = []


    function search(){
        //console.log(`search ${searchBook}`)
        const BASE_URL ='https://www.googleapis.com/books/v1/volumes?q='
        fetch(`${BASE_URL}${searchBook}`, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                let items = json;
                this.setState()
            })
    }

    return (
        <div>
            <h2 id='title'>Book Explorer 1!</h2>
            <Form className='searchForm'>
                <Form.Group>
                    <Form.Control
                        className='sf-textBar'
                        type='text'
                        placeholder='Search a book'
                        onChange={e => setSearchBook(e.target.value)}
                    />
                    <Button 
                        onClick={() => search()}
                        className='sf-subBtn'

                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}
*/
export default Global;
