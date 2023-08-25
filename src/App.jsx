import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  fetch("https://store-zip-up.vercel.app/comments")
    .then((response) => response.json())
    .then((commits) => console.log(commits));

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
