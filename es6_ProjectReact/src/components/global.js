import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function SearchBookForm() {
    const [searchBook, setSearchBook] = useState('');

    return (
        <div>
            <h2>Book Explorer 2!</h2>
            <Form>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Search a book'
                        onChange={e => setSearchBook(e.target.value)}
                        /*onKeyDown={e => {
                            if (e.key === 'Enter') {
                                console.log(`search ${searchBook}`)
                            }
                        }}*/
                    />
                    <Button onClick={() => {
                                console.log(`search ${searchBook}`)
                            }} 
                            type='button'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchBookForm;
