import './App.css';
// import Test from './Test.js';
import Header from './Header';
import Footer from './Footer';
import Parks from './Parks';

function App() {
  const isLoggedIn = true;

  return (
    <div>
      <Header status={isLoggedIn}/>
      {isLoggedIn ? <Parks /> : "Login"}
      <Footer />
    </div>
  );
}

export default App;
