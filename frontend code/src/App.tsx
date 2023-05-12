import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import { TransferDetail } from "./pages/TransferDetail";
import { ConfigProvider } from "antd";
import Payment from "./pages/Payment";
import { AppProvider } from "./proviers";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#08A893",
            },
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transfer-detail" element={<TransferDetail />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
        </ConfigProvider>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
