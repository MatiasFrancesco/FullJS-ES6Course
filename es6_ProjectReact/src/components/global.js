import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';



class Global extends Component {
    render() {
        return (
            //<div>The Global App Component!</div>
            <div>
                <h2>Book Explorer!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl type='text' placeholder='search for a book' />
                        <FormControl type='button'/>
                    </InputGroup>

                </FormGroup>
            </div>
        )
    }
}
export default Global;