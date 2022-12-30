import Button from 'react-bootstrap/Button';

function Main(props) {
    return (
      <>
        <h5 className="greeting">Hi, my name is</h5> <br />
        <h1 className="name">Joey Caltabellotta</h1> <br />
      <div className="wrapper-title">
        <h1 className="main-title">I'm a Frontend Developer by day... and night</h1>
        </div>
        <p className='main-about'>Along with having a background in customer service and problem solving, I aim for a strong foundation in communication while collaborating on projects. I thrive on solving problems with my skill set in React, JavaScript, Node.js and much more. Feel free to reach out and connect!</p>
        <br />
        <h4 className="second-title">Check out what I've made!</h4>
        <a href='/projects'>
        <Button className= 'main-button' variant= "outline-success">Check out my work!</Button>
        </a>
        <br />
        <img className='my-image' src='https://i.im.ge/2022/12/30/qWsmUc.5-7-22-Kristin-Danny-Chateau-Briand-Photos.jpg' alt=''></img>
      </>
    )
  }
  
  export default Main;