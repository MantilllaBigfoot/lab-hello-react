import logo from './logo.svg';
import './App.css';


const Header = () => {
  return (
    <header className='Header'>
      <div>
      <img src="/ironhack-logo-xs.png" alt="ironhack" />
      </div>
    <div>
    <img src="/menu-top-xs.png" alt="ironhack" />
    </div>
    </header>

  )
}


const BodyUp = () => {
  return (
    <div className="BodyUp">
    <h1>Say hello to ReactJS</h1>
    <p>You will learn how to use the most popular frontend libary
      and become a super dev.
    </p>
    <button>Awesome!</button>
  </div>
  )
}

const BodyDown = () => {
  return (
    <div className="BodyDown">
      <div className='flexboxcontent'>
        <img src="/icon1.png" alt="" />
        <h3>Declarative</h3>
        <p>
          React makes it painless to create interactive URLs
        </p>
      </div>
      <div className='flexboxcontent'>
      <img src="/icon2.png" alt="" />
        <h3>Components</h3>
        <p>
          Build encapsulated copmnponents that manage their state
        </p>
      </div>
      <div className='flexboxcontent'>
      <img src="/icon3.png" alt="" />
        <h3>Single-Way</h3>
        <p>
          A set immutable values are passed to the components
        </p>
      </div>
      <div className='flexboxcontent'>
      <img src="/icon4.png" alt="" />
        <h3>JSX</h3>
        <p>
          Statically-typed. Designed to run on modern browsers
        </p>
      </div>
  </div>
  )
}

/* JSX
JavaScript Extended
It allows to mix JavaScript and HTML syntax in a single file
*/
/* App is our React component */
/* A React component is simply a function that returns an "HTML-like" template */
function App() {
  return (
    /*
    We cannot use class attribute to avoid any confusion between JS class and HTML class
    As such, we have "className", which is then converted into "class"
    */
    <div className="App">
      <Header/>
      <BodyUp/>
      <BodyDown/>
      {/* <Message /> */}
    </div>
  );
}

export default App;
