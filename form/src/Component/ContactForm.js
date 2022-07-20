import { Component } from "react";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";

let defaultError = true;

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      phoneNumber: "",
      relation: "",
      email: "",
      nameError: "",
      lastNameError: "",
      phoneNumberError: "",
      emailError: "",
      allContacts: [],
    };
  }
  componentDidMount() {
    defaultError = false;
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, this.validate);
  };

  validate = () => {
    this.validateName();
    this.validateLastName();
    this.validatePhoneNumber();
    this.validateEmail();
  };

  validateName = () => {
    const { name } = this.state;
    if (name === "") {
      this.setState({ nameError: "وارد کردن نام ضروری است" });
    } else if (name.length < 3) {
      this.setState({ nameError: "نام باید حداقل شامل سه حرف باشد" });
    } else {
      this.setState({ nameError: "" });
    }
  };
  validateLastName = () => {
    const { lastName } = this.state;
    if (lastName === "") {
      this.setState({ lastNameError: "وارد کردن نام خانوادگی ضروری است" });
    } else if (lastName.length < 4) {
      this.setState({ lastNameError: "نام خانوادگی باید حداقل چهار حرف باشد" });
    } else {
      this.setState({ lastNameError: "" });
    }
  };
  validatePhoneNumber = () => {
    const { phoneNumber } = this.state;
    if (phoneNumber.length < 11) {
      this.setState({ phoneNumberError: "لطفا شماره تلفن همراه وارد کنید" });
    } else {
      this.setState({ phoneNumberError: "" });
    }
  };

  validateEmail = () => {
    const { email } = this.state;
    if (email === "") {
      this.setState({ emailError: "وارد کردن ایمیل ضروری است" });
    } else if (!email.includes("@")) {
      this.setState({ emailError: "ایمیل معتبر نیست" });
    } else {
      this.setState({ emailError: "" });
    }
  };
  addContact = (e) => {
    e.preventDefault();
    const { name, lastName, phoneNumber, relation, email } = e.target.elements;
    const newContact = {
      name: name.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value,
      relation: relation.value,
      email: email.value,
    };
    this.setState({ allContacts: [...this.state.allContacts, newContact] });
  };

  render() {
    const {
      name,
      lastName,
      phoneNumber,
      email,
      nameError,
      lastNameError,
      phoneNumberError,
      emailError,
      allContacts,
    } = this.state;
    const isValid =
      nameError === "" &&
      lastNameError === "" &&
      emailError === "" &&
      phoneNumberError === "";
    return (
      <>
        <form onSubmit={(e) => this.addContact(e)}>
          <div>
            <input
              name="name"
              placeholder="...نام"
              value={name}
              onChange={this.handleChange}
            />
            <span className="error-message">*</span>
          </div>
          <div className="error-message">{nameError}</div>
          <div>
            <input
              name="lastName"
              placeholder="...نام خانوادگی"
              value={lastName}
              onChange={this.handleChange}
            />
            <span className="error-message">*</span>
          </div>
          <div className="error-message">{lastNameError}</div>
          <div>
            <input
              name="phoneNumber"
              placeholder="...شماره تماس"
              value={phoneNumber}
              onChange={this.handleChange}
            />
            <span className="error-message">*</span>
          </div>
          <div className="error-message">{phoneNumberError}</div>
          <select name="relation">
            <option>نسبت</option>
            <option>اعضای خانواده</option>
            <option>دوست</option>
            <option>همکار</option>
            <option>فامیل</option>
          </select>
          <div>
            <input
              name="email"
              placeholder="...ایمیل"
              value={email}
              onChange={this.handleChange}
            />
            <span className="error-message">*</span>
          </div>
          <div className="error-message">{emailError}</div>
          <input
            type="submit"
            value="افزودن"
            onClick={this.handleSubmit}
            disabled={!isValid || defaultError}
          />
        </form>
        <div className="footer">
          {allContacts.map((item) => (
            <div className="card">
              <div className="header">
                <div>
                  <button>
                    <BiTrash></BiTrash>
                  </button>
                  <button>
                    <BiEdit></BiEdit>
                  </button>
                </div>
                <div className="nameAndlastName">
                  {" "}
                  <p>{item.lastName}</p>
                  <p>{item.name}</p>
                </div>
              </div>
              <div>
                <p key={item}>{item.phoneNumber}</p>
              </div>
              <div>
                {" "}
                <p key={item}>{item.relation}</p>
              </div>
              <div>
                <p key={item}>{item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ContactForm;
