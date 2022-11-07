import React, { Component } from 'react';
import BareCheckoutSideBar from './BareCheckoutSidebar';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Input, Button, Label, Row, Col, Form } from 'reactstrap';

class BareCheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      postcode: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  // Out of scope, so just alerts the state values to the user.
  onSubmit(event) {
    this.setState(
      {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        postcode: event.target.elements.postcode.value,
      },
      () => {
        alert(JSON.stringify(this.state, null, 4));
      }
    );
  }

  onInputChange(event) {
    if (event.target.id === 'selectOther') {
      document.querySelector('.checkoutFormTextLabel[for=name]').innerHTML = 'Your Name';
      document.querySelector('.checkoutFormTextLabel[for=email]').innerHTML = 'Your Email';
      document.querySelector('.checkoutFormTextLabel[for=postcode]').innerHTML = 'Their Postcode';
    } else {
      document.querySelector('.checkoutFormTextLabel[for=name]').innerHTML = 'First Name';
      document.querySelector('.checkoutFormTextLabel[for=email]').innerHTML = 'Email';
      document.querySelector('.checkoutFormTextLabel[for=postcode]').innerHTML = 'Postcode';
    }
  }

  render() {
    return (
      <div className="checkoutFormContainer">
        <Form onSubmit={(event) => this.onSubmit(event)}>
          <Row className="checkoutFormCardsRow">
            <Col md={3}>
              {/* Sidebar not implemented, but added a div for styling purposes. */}
              <BareCheckoutSideBar />
            </Col>
            <Col md={9}>
              <div className="checkoutFormCard">
                <h1 className="checkoutFormCardTitle">
                  Are you prepaying a funeral for yourself or for a loved one?
                </h1>
                <fieldset>
                  <div className="checkoutFormRadioWrapper">
                    <label>
                      <input
                        onChange={(event) => this.onInputChange(event)}
                        tabIndex="0"
                        type="radio"
                        id="selectSelf"
                        name="selfOrOther"
                        className="checkoutFormRadio"
                        defaultChecked
                      />
                      <div className="checkoutFormSelectCard">
                        <h2 className="checkoutFormSelectCardTitle">
                          <b>Myself</b>
                        </h2>
                        <p>I want to prepay my own funeral</p>
                        <FaCheckCircle className="checkoutFormIcon" />
                      </div>
                    </label>
                    <label>
                      <input
                        onChange={(event) => this.onInputChange(event)}
                        type="radio"
                        id="selectOther"
                        name="selfOrOther"
                        className="checkoutFormRadio"
                      />
                      <div className="checkoutFormSelectCard">
                        <h2 className="checkoutFormSelectCardTitle">
                          <b>For a loved one</b>
                        </h2>
                        <p>I am prepaying for someone else</p>
                        <FaCheckCircle className="checkoutFormIcon" />
                      </div>
                    </label>
                  </div>
                </fieldset>
                <div className="checkoutFormFieldWrapper">
                  <h1 className="checkoutFormFieldTitle">A bit about you</h1>
                  <Row className="checkoutFormFieldsRow">
                    <Col sm={12} md={4}>
                      <Label for="name" className="checkoutFormTextLabel">
                        First Name
                      </Label>{' '}
                      <span className="checkoutFormInlineRequired">(required)</span>
                      <Input
                        id="name"
                        name="name"
                        className="checkoutFormTextInput"
                        type="text"
                        bsSize="lg"
                      />
                    </Col>
                    <Col sm={12} md={5}>
                      <Label for="email" className="checkoutFormTextLabel">
                        Email
                      </Label>{' '}
                      <span className="checkoutFormInlineRequired">(required)</span>
                      <Input
                        id="email"
                        name="email"
                        className="checkoutFormTextInput"
                        type="text"
                        bsSize="lg"
                      />
                    </Col>
                    <Col sm={12} md={3}>
                      <Label for="postcode" className="checkoutFormTextLabel">
                        Postcode
                      </Label>{' '}
                      <span className="checkoutFormInlineRequired">(required)</span>
                      <Input
                        id="postcode"
                        name="postcode"
                        className="checkoutFormTextInput"
                        type="text"
                        bsSize="lg"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="checkoutFormButtonRow">
            <Col>
              <Button type="submit" size="lg" className="checkoutFormSubmitButton" block>
                Continue <FaArrowRight />
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default BareCheckoutForm;
