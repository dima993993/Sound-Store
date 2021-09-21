import './App.css';
import Header from "./components/header/header";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
          <div className="app_wrapper">
              <Header />
          </div>
      </BrowserRouter>

  );
}

export default App;
