import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistroPage from "./pages/RegistrationPage/RegistrationPage";
import MyHabits from "./pages/MyHabits/MyHabits";
import TodayHabits from "./pages/TodayHabits/TodayHabits";
import Historic from "./pages/Historic/Historic";
import ContextProvider from "./context/DadosContext";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<RegistroPage />} />
          <Route path="/habitos" element={<MyHabits />} />
          <Route path="/hoje" element={<TodayHabits />} />
          <Route path="/historico" element={<Historic />}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
