import Home from "@pages/Home";
import { CurrentPagesContextProvider } from "./PagesContexts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CurrentPagesContextProvider>
        <Home />
      </CurrentPagesContextProvider>
    </div>
  );
}

export default App;
