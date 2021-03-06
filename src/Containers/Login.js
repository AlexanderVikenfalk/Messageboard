import React, { Component } from 'react';
import SimpleBox from '../Components/SimpleBox';
import InputField from '../Components/InputField';
import FooterFormButton from '../Components/FooterFormButton';
import { login, getUser } from '../Actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../Components/ErrorAlert';
import { Field, reduxForm } from 'redux-form';
import { email, required } from '../Helpers/ReduxFormValidation';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  
  componentWillMount() {
    if (this.props.user === null || undefined) {
      console.log(this.props.user)
      return
    }
  else if (
    Object.keys(this.props.user).length === 0 &&
      this.props.user.constructor === Object
    )
    {return }
    else if (this.props.user !== null) {
      console.log(this.props.user)
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      console.log(this.props.user)
      nextProps.history.push('/');
    }
  }
  onSubmit(data) {
    this.props.login(data.email, data.password).catch((err) => {
        this.setState({
          error: err
        });
      }
    );
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <SimpleBox title="Sign in">
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
                name="password"
                component={InputField}
                label="Password"
                validate={required}
                required={true}
                type="password"
              />
              
              {this.state.error && <ErrorAlert>Your username/password is incorrect</ErrorAlert>}
              <FooterFormButton submitLabel="Sign in" otherLabel="Create Account"
                                goToLink="/CreateAccount" {...this.props}
              />
            </div>
          </form>
        </SimpleBox>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user };
}

let form = reduxForm({
  form: 'LoginForm'
})(Login);

form = connect(mapStateToProps, { login, getUser })(form);

export default form;
