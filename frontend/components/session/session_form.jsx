import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import HeaderComponent from '../header/header';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', username: '', password: '',
    backgroundImage: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount(){
    this.setImage();
  }

  setImage(){
    const imageClasses = ['cup', 'husky', 'labs', 'scenery', 'water', 'yorkie'];
    const max = 6;
    const min = 0;
    const imageInt = Math.floor(Math.random() * (max - min) + min);
    const imageClass = imageClasses[imageInt];
    this.setState({backgroundImage: imageClass});
  }

  update(field){
    return (e) => {
        this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let userParams;
    if (this.props.formType === 'Log in') {
      userParams = {email: this.state.email,
        password: this.state.password};
    } else {
      userParams = {email: this.state.email,
        password: this.state.password,
        username: this.state.username};
    }

    const user = Object.assign({}, userParams);
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

    const siteDescription = (this.props.formType === 'Sign up' ||
    this.props.formType === 'Homepage') ?
    <div>
      <p>Come for what you love.</p>
      <p>Stay for what you discover.</p>
    </div>
    : '';

    const content = (this.props.formType === 'Log in' ||
      this.props.formType === 'Sign up') ?
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
      </form> :

      <form>
        <Link to='/signup'><button>Get Started</button></Link>
        <Link to='/login'><button
          className='index-login'>Log In</button></Link>
        <button onClick={this.demoLogin}>Demo Login</button>
      </form>;


    return (
      <div className={`session ${this.state.backgroundImage}`}>
        <HeaderComponent
          button={this.props.link}
          clearErrors={this.props.clearErrors}/>

          <div className="session-form">

            <h1 className="site-name">rollover</h1>
            {siteDescription}
            {content}

          </div>
      </div>

    );
  }

}

export default withRouter(SessionForm);
