import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MembershipSignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMembershipTypeChange = (e) => {
    setMembershipType(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleTownChange = (e) => {
    setTown(e.target.value);
  };

  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formMembershipType">
        <Form.Label>Membership Type</Form.Label>
        <Form.Control
          as="select"
          value={membershipType}
          onChange={handleMembershipTypeChange}
        >
          <option value="">-- Please Select --</option>
          <option value="Full">Full Membership</option>
          <option value="Associate">Associate Membership</option>
          <option value="Supporter">Supporter Membership</option>
          <option value="Overseas">Overseas Membership</option>
          <option value="Life">Life Membership</option>
          <option value="Trade">Trade Membership</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={handleAddressChange}
        />
      </Form.Group>

      <Form.Group controlId="formTown">
        <Form.Label>Town</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your town"
          value={town}
          onChange={handleTownChange}
        />
      </Form.Group>

      <Form.Group controlId="formPostcode">
        <Form.Label>Postcode</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your postcode"
          value={postcode}
          onChange={handlePostcodeChange}
        />
      </Form.Group>

      <Form.Group controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MembershipSignUpForm;
