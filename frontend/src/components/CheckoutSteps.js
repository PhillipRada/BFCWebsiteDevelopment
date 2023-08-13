import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item active={step1}>
        <Link to="">SignIn</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active={step2}>
        <Link to="/Shipping">Shipping</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active={step3}>
        <Link to="/Payment">Payment</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active={step4}>
        <Link to="/PlaceOrder">Place Order</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CheckoutSteps;

//! OLD VERSION
// import React from "react";
// import { Nav } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

// const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
//   return (
//     <Nav className="'justify-content-center mb-4">
//       <Nav.Item>
//         {step1 ? (
//           <LinkContainer to="/login">
//             <Nav.Link>Sign In</Nav.Link>
//           </LinkContainer>
//         ) : (
//           <Nav.Link disabled>Sign In</Nav.Link>
//         )}
//       </Nav.Item>
//       <Nav.Item>
//         {step2 ? (
//           <LinkContainer to="/shipping">
//             <Nav.Link>Shipping</Nav.Link>
//           </LinkContainer>
//         ) : (
//           <Nav.Link disabled>Shipping</Nav.Link>
//         )}
//       </Nav.Item>
//       <Nav.Item>
//         {step3 ? (
//           <LinkContainer to="/payment">
//             <Nav.Link>Payment</Nav.Link>
//           </LinkContainer>
//         ) : (
//           <Nav.Link disabled>Payment</Nav.Link>
//         )}
//       </Nav.Item>
//       <Nav.Item>
//         {step4 ? (
//           <LinkContainer to="/placeorder">
//             <Nav.Link>Place Order</Nav.Link>
//           </LinkContainer>
//         ) : (
//           <Nav.Link disabled>Place Order</Nav.Link>
//         )}
//       </Nav.Item>
//     </Nav>
//   );
// };

// export default CheckoutSteps;
