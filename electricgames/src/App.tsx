import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageHeader from "./components/shared/MainPageHeader";
import { HomePage, DeleteGamePage, AddGamePage} from "./pages";
import SearchPage from "./pages/SearchPage";
import UpdateGamePage from "./pages/UpdateGamePage";


function App() {
  return (
    
    <BrowserRouter>
      <MainPageHeader/>
      <main className="container">
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/delete-games" element={<DeleteGamePage/>}></Route>
          <Route path="/update-games" element={<UpdateGamePage/>}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>
          <Route path="/add-games" element={<AddGamePage/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;