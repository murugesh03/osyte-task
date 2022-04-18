import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Search from "./components/pages/search";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./components/UI/organisms/header";

const query = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={query}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
