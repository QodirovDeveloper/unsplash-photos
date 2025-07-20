import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AsideLeft from "./components/AsideLeft";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <AsideLeft />
      <Navbar onSearch={handleSearch} />
      <Home searchQuery={searchQuery} />
    </>
  );
}

export default App;
