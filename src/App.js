import Card from "./components/Card";

import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem label="Home" />
        <NavItem label="About" />
        <NavItem label="Contact us" />
      </Navbar>

      <Card />
    </div>
  );
}

export default App;
