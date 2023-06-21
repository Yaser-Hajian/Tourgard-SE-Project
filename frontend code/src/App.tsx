import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer, Header } from "./components";
import { route } from "./Routes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {route.map((item, index) => (
          <Route path={item.path} element={item.component} key={index} />
        ))}
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
