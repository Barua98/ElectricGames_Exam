import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameList from "./components/games/GameList";
import MainPageHeader from "./components/shared/MainPageHeader";
import { HomePage, DeleteGamePage } from "./pages";

function App() {
  return (
    
    <BrowserRouter>
      <MainPageHeader/>
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/delete-games" element={<DeleteGamePage/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;