import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import NavMenu from "./components/navbar/navMenu";
import Welcome from "./components/welcome";

const App = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      <Navbar setIsNavMenuOpen={setIsNavMenuOpen}></Navbar>
      {isNavMenuOpen && <NavMenu setIsNavMenuOpen={setIsNavMenuOpen}></NavMenu>}
    </main>
  );
};

export default App;
