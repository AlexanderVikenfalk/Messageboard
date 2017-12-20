// import React, { Component } from "react";
// import InputField from "../Components/InputField";
// import FooterFormButton from "../Components/FooterFormButton";
// import SimpleBox from "../Components/SimpleBox";
// import { createAccount } from "../Actions/UserActions";
// import { connect } from "react-redux";
// import ErrorAlert from "../Components/ErrorAlert";

// class CreateAccount extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fname: "",
//       lname: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       error: ""
//     };
//   }

//   isValid() {
//     const { email, password, confirmPassword, fname, lname } = this.state;

//     if (
//       email === "" ||
//       password === "" ||
//       confirmPassword === "" ||
//       fname === "" ||
//       lname === ""
//     ) {
//       this.setState({
//         error: "Please enter in all fields"
//       });
//       return false;
//     }

//     if (password !== confirmPassword) {
//       this.setState({
//         error: "Please make sure your passwords match"
//       });
//       return false;
//     }

//     return true;
//   }
//   onSubmit(data){
//     this.props.createAccount(data);
//   }

//   submitAccount(event) {
//     event.preventDefault();
//     if (!this.isValid()) {
//       return;
//     }
//     this.props
//       .createAccount(...this.state)
//       .then(() => {
//         this.props.history.replace("/");
//       })
//       .catch(err => {
//         this.setState({
//           error: err.message
//         });
//       });
//   }

//   renderBody() {
//     const errStyle = {
//       borderColor: "red"
//     };
//     const {handleSubmit} = this.props;
//     return (
//       <div>
//         {/* <form onSubmit={event => this.submitAccount(event)}> */}
//         <form onSubmit={handleSubmit => this.onSubmit()}>        
//           <InputField
//             id="email"
//             type="text"
//             label="Email"
//             inputAction={event => this.setState({ email: event.target.value })}
//             style={this.state.error ? errStyle : null}
//           />
//           <InputField
//             id="password"
//             type="password"
//             label="Password"
//             inputAction={event =>
//               this.setState({ password: event.target.value })
//             }
//             style={this.state.error ? errStyle : null}
//           />
//           <InputField
//             id="confirm-password"
//             type="password"
//             label="Confirm Password"
//             inputAction={event =>
//               this.setState({ confirmPassword: event.target.value })
//             }
//             style={this.state.error ? errStyle : null}
//           />
//           <InputField
//             id="fname"
//             type="text"
//             label="First Name"
//             inputAction={event =>
//               this.setState({ fname: event.target.value })
//             }
//             style={this.state.error ? errStyle : null}
//           />
//           <InputField
//             id="lname"
//             type="text"
//             label="Last Name"
//             inputAction={event =>
//               this.setState({ lname: event.target.value })
//             }
//             style={this.state.error ? errStyle : null}
//             />
//           {this.state.error && <ErrorAlert>{this.state.error}</ErrorAlert>}
//           <FooterFormButton
//             submitLabel="Create Account"
//             otherLabel="Go back"
//             goToLink="/Login"
//             {...this.props}
//           />
//         </form>
//       </div>
//     );
//   }

//   render() {
//     return <SimpleBox body={this.renderBody()} title="Create Account" />;
//   }
// }

// export default connect(null, { createAccount })(CreateAccount);

import React, { Component } from 'react';
import InputField from '../Components/InputField';
import FileField from '../Components/FileField';
import FooterFormButton from '../Components/FooterFormButton';
import SimpleBox from '../Components/SimpleBox';
import { createAccount } from '../Actions/UserActions';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { email, required } from '../Helpers/ReduxFormValidation';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  onSubmit(data) {
    this.props.createAccount(data).then(() => {this.props.history.replace('/')}
    )}



  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <SimpleBox title="Create Account">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="card-body">
              <Field
                name="email"
                component={InputField}
                label="Email"
                validate={[required, email]}
                required={true}
                type="email"
              />
              <Field
                name="fname"
                component={InputField}
                label="First Name"
                validate={[required]}
                required={true}
                type="text"
              />
              <Field
                name="lname"
                component={InputField}
                label="Last Name"
                validate={[required]}
                required={true}
                type="text"
              />
              <Field
                name="password"
                component={InputField}
                label="Password"
                validate={required}
                required={true}
                type="password"
              />
             <Field
                name="picture"
                component={FileField}
                label="picture"
                validate={required}
                required={true}
              />
              <FooterFormButton submitLabel="Create Account" otherLabel="Go Back"
                                goToLink="/Login" {...this.props}
              />
            </div>
          </form>
        </SimpleBox>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'CreateAccountForm'
})(CreateAccount);

form = connect(null, { createAccount })(form);

export default form;