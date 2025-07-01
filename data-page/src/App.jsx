import "./App.css";
import Entry from "./components/Entry";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const mapdata = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });
  return (
    <>
      <Navbar />
      <main className="container">{mapdata}</main>
    </>
  );
}

export default App;
