import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import HeaderComponent from '../header/header';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.defaultState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin(e){
    e.preventDefault();
    const user = {email: 'guest@guest.com', password:'password'};
    this.props.processForm(user);
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){

    const usernameInput = (this.props.formType === 'Sign up') ?
      <input type='text' placeholder='Username'
        value={this.state.username}
        onChange={this.update('username')} /> : '';

    const siteDescription = (this.props.formType === 'Sign up') ?
    <div>
      <p>Come for what you love.</p>
      <p>Stay for what you discover.</p>
    </div>
    : '';

    const demoUser = (this.props.formType === 'Log in') ?
    <button onClick={this.demoLogin}>Demo Login</button> : "";

    return (
      <div>
        <HeaderComponent
          button={this.props.link}
          clearErrors={this.props.clearErrors}/>

          <div className="session-form">


            <h1 className="site-name">rollover</h1>
            {siteDescription}

            <form onSubmit={this.handleSubmit}>

              <div className='session-input'>
              <input type='email' placeholder='Email'
                value={this.state.email}
                onChange={this.update('email')} />

              <input type='password' placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')} />
              {usernameInput}
              </div>

              {this.renderErrors()}

              <button>{this.props.formType}</button>
              {demoUser}
            </form>
          </div>
      </div>

    );
  }

}

export default withRouter(SessionForm);
