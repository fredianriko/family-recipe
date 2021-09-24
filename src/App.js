import Card from "./components/Card";
import Hero from "./components/Hero";
import LoginPage from "./components/LoginPage";

import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import NewRecipe from "./components/NewRecipe";
function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem label="Home" />
        <NavItem label="About" />
        <NavItem label="Contact us" />
      </Navbar>
      <Hero />
      <LoginPage />
      <Card />
      <NewRecipe />
    </div>
  );
}

export default App;
