import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  fetch("http://localhost:3333/posts")
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
