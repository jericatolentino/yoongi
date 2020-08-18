import React from 'react';
import { Form as FB, Button } from 'react-bootstrap';
import { sendLambda } from './SendToHandler';

import './Form.css';

class Form extends React.Component {

    constructor(props: any){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(e: any) {
        e.preventDefault();
        const data = e.target;
        const result = {
            buyerCardNo: data.buyerCardNo.value,
            buyerEDMonth: data.buyerED[0].value,
            buyerEDYear: data.buyerED[1].value,
            buyerName: data.buyerName.value,
            buyerSecCode: data.buyerSecCode.value
        }
        console.log(JSON.stringify(result,null,2));
;       return sendLambda(result);
    }
 

    render() {
        return <div className="Form-Container" >
            <div className="Form-InnerContainer" >
                <FB onSubmit={this.handleClick}>
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