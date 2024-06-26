import Layout from "./layout";
import Profile from "./pages/profile";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </Layout>
  );
}
