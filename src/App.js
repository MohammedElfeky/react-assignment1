import './App.css';
import Nav from './components/nav'
import Home from './components/home'
import Products from './components/products'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
