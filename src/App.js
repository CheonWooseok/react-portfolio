import { BrowserRouter } from "react-router-dom";
import Header from "./components/nav/Header";
import DefaultRouter from "./components/router/DefaultRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: "100px", padding: "0", minHeight: "1000vh" }}>
          <DefaultRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
