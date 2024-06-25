import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AdminPage from "./pages/admin/AdminPage";
import LoginPage from "./pages/admin/auth/LoginPage";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* user */}
          <Route path="/" element={<HomePage />} />
          <Route path="/:school/profil" element={<ProfilePage />} />
          {/* user */}
          {/* admin */}
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          {/* admin */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
