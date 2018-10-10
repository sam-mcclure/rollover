import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.defaultState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.warn(nextState);
  //   console.log("current", this.props.history);
  //   console.log("prev", nextProps.history);
  //   if(this.props.location.href !== nextProps.location.href){
  //     this.props.errors = [];
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // componentDidMount(){
  //   this.unlisten =
  //   this.props.history.listen((location, action) => {
  //     this.props.errors = [];
  //     console.log('route changed', location.href);
  //   });
  // }
  // componentWillUnmount(){
  //   this.unlisten();
  // }



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

    const usernameInput = (this.props.formType === 'Sign Up') ?
      <input type='text' placeholder='Username'
        value={this.state.username}
        onChange={this.update('username')} /> : '';

    const siteDescription = (this.props.formType === 'Sign Up') ?
    <div>
      <p>Come for what you love.</p>
      <p>Stay for what you discover</p>
    </div>
    : '';

    const demoUser = (this.props.formType === 'Log In') ?
    <button onClick={this.demoLogin}>Demo Login</button> : "";

    return (
      <div className="session-form">
        {this.props.link}

        <h1 className="site-name">rollover</h1>
        {siteDescription}


        {this.renderErrors()}

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

          <input type="submit" value={this.props.formType} />
          {demoUser}
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
