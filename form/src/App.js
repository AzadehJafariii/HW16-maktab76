import React from "react";
import { Component } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import ContactForm from "./Component/ContactForm";
import background from "./images/one.jpg";

class App extends Component {
  render() {
    return (
      <div className="img" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <h2 className="title">وب اپلیکیشن مدیریت مخاطبین</h2>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default App;
