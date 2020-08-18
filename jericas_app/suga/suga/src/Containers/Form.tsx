import React from 'react';
import { Form as FB, Button } from 'react-bootstrap';

import './Form.css';

class Form extends React.Component {
    render() {
        return <div className="Form-Container" >
            <div className="Form-InnerContainer" >
                <FB>
                    <FB.Group controlId="buyerCardNo">
                        <FB.Label>Card Number</FB.Label>
                        <FB.Control type="text" placeholder="Enter card number" />
                        <FB.Text className="text-muted">Accepted credit card and debit card types</FB.Text>
                    </FB.Group>

                    <FB.Group controlId="buyerED">
                        <FB.Label>Expiry Date</FB.Label>
                        <FB.Text className="text-muted">For example, 10/20</FB.Text>
                        <div>
                            <FB.Label className="Form-Date">Month</FB.Label>  <FB.Label className="Form-Date">Year</FB.Label>
                        </div>
                        <FB.Control className="Form-ED"/> / <FB.Control className="Form-ED"/>
                    </FB.Group>

                    <FB.Group controlId="buyerName">
                        <FB.Label>Name on card</FB.Label>
                        <FB.Control type="text" placeholder="Enter card name" />
                    </FB.Group>

                    <FB.Group controlId="buyerSecCode">
                        <FB.Label>Card security code</FB.Label>
                        <FB.Text className="text-muted" style={{'paddingBottom' : '0.5em'}}>The last 3 digits on the back of the card</FB.Text>
                        <FB.Control type="text" placeholder="Enter security code" />
                    </FB.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </FB>
            </div>
        </div>;
    }
}

export default Form;