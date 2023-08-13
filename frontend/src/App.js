import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ContactUs from "./screens/ContactScreen";
import CodeOfConductScreen from "./screens/CodeOfConductScreen";
import HelpAndAdvice from "./screens/HelpAndAdviceScreen";
import MembershipSignUpForm from "./screens/ApplyToJoinBFCScreen";
// import CreateForum from "./screens/ForumScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/order/:id" element={<OrderScreen />} />
            <Route exact path="/placeorder" element={<PlaceOrderScreen />} />
            <Route exact path="/payment" element={<PaymentScreen />} />
            <Route exact path="/shipping" element={<ShippingScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />
            <Route exact path="/register" element={<RegisterScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/rules" element={<CodeOfConductScreen />} />
            <Route exact path="/help" element={<HelpAndAdvice />} />
            <Route exact path="/apply" element={<MembershipSignUpForm />} />
            {/* <Route exact path="/forums" element={<CreateForum />} /> */}

            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
