import { useState } from "react";
import Home from "./components/home";
import Welcome from "./components/welcome";
import Navbar from "./components/navbar/navbar";
import NavMenu from "./components/navbar/navMenu";
import { Routes, Route } from "react-router-dom";
import AddPoll from "./components/addPoll";
import LeaderBoard from "./components/leaderBoard/leaderBoard";
const App = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route
          path="/home"
          element={
            <>
              <Navbar setIsNavMenuOpen={setIsNavMenuOpen}></Navbar>
              {isNavMenuOpen && (
                <NavMenu setIsNavMenuOpen={setIsNavMenuOpen}></NavMenu>
              )}
              <Home></Home>
            </>
          }
        />
        <Route
          path="/add"
          element={
            <>
              <Navbar setIsNavMenuOpen={setIsNavMenuOpen}></Navbar>
              {isNavMenuOpen && (
                <NavMenu setIsNavMenuOpen={setIsNavMenuOpen}></NavMenu>
              )}
              <AddPoll></AddPoll>
            </>
          }
        ></Route>
        <Route
          path="/LeaderBoard"
          element={
            <>
              <Navbar setIsNavMenuOpen={setIsNavMenuOpen}></Navbar>
              {isNavMenuOpen && (
                <NavMenu setIsNavMenuOpen={setIsNavMenuOpen}></NavMenu>
              )}
              <LeaderBoard></LeaderBoard>
            </>
          }
        ></Route>
      </Routes>
    </main>
  );
};

export default App;
