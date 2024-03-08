import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
const App=()=> {
  
  return (
    <>
    <Navbar/>
    <Home />
    <Main />
    <Footer />
     
      </>
  )
}

export default App
