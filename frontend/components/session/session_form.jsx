import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.defaultState;
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const usernameInput = (this.props.formType === 'Sign Up') ?
      <input type='text' placeholder='username'
        value={this.state.username}
        onChange={this.update('username')} /> : '';

    const siteDescription = (this.props.formType === 'Sign Up') ?
    <div>
      <p>Come for what you love.</p>
      <p>Stay for what you discover</p>
    </div>
    : '';

    return this.props.currentUser ? (<Redirect to='/' />) : (
      <div>
        <h1>rollover</h1>
        {siteDescription}

        <h2>{this.props.formType}</h2>
        {this.props.link}

        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>
          <input type='email' placeholder='email'
            value={this.state.email}
            onChange={this.update('email')} />

          <input type='password' placeholder='password'
            value={this.state.password}
            onChange={this.update('password')} />

          {usernameInput}
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
