import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Toaster
          position="top-center"
          toastOptions={{ style: { fontFamily: "Vazir" } }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:ingredient" element={<CategoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
        </Routes>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
