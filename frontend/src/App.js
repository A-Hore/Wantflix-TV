// import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
import Header from "./components/Navbar/Navbar";
import MainRoute from "./components/Route/MainRoute";


function App() {
  return (
    <div className="App">
      {/* <h1>SOHIL</h1> */}
      <Header />
      <MainRoute />
 
    </div>
  );
}

export default App;
