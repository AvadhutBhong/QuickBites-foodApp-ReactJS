import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Delievery from "./components/Delievery";
import TopPicks from "./components/TopPicks";
import Meals from "./components/Meals";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Featured />
      <Delievery/>
      <TopPicks/>
      <Meals/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
