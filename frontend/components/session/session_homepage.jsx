import React from 'react';
import HeaderComponent from '../header/header';
import { Link } from 'react-router-dom';

class sessionHomepage extends React.Component {
  constructor(props){
    super(props);
    this.state = {image: ''};
  }

  componentDidMount(){
    this.setImage();
  }

  setImage(){
    const imageClasses = ['corgi', 'husky', 'labs', 'scenery', 'water', 'yorkie'];
    const max = 6;
    const min = 0;
    const imageInt = Math.floor(Math.random() * (max - min) + min);
    const imageClass = imageClasses[imageInt];
    this.setState({image: imageClass});
  }

  render(){
    return (
      <div className={`session ${this.state.image}`}>
        <HeaderComponent />

        <div className='session-form'>
          <h1>rollover</h1>
          <p>Come for what you love.</p>
          <p>Stay for what you discover.</p>

          <form>
            <Link to='/signup'><button>Get Started</button></Link>
            <Link to='/login'><button
              className='index-login'>Log In</button></Link>
          </form>
        </div>
      </div>
    );
  }
}

export default sessionHomepage;
