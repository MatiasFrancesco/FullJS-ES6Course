import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function SearchBookForm() {
    //searchBook is my query
    const [searchBook, setSearchBook] = useState('');
    
    function search(){
        //console.log(`search ${searchBook}`)
        const BASE_URL ='https://www.googleapis.com/books/v1/volumes?q='
        fetch(`${BASE_URL}${searchBook}`, {method: 'GET'})
            .then(response => response.json())
            .then(json => console.log(json))
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
                        /*onKeyDown={e => {
                            if (e.key === 'Enter') {
                                console.log(`search ${searchBook}`)
                            }
                        }}*/
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

export default SearchBookForm;
