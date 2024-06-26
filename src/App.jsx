import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AdminPage from "./pages/admin/AdminPage";
import LoginPage from "./pages/admin/auth/LoginPage";
import UnitPage from "./pages/admin/pages/unit/UnitPage";
import SaranaPage from "./pages/admin/pages/sarana/SaranaPage";
import YayasanPage from "./pages/admin/pages/YayasanPage";
import { YayasanProvider } from "./context/YayasanContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <YayasanProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/yayasan"
              element={
                <ProtectedRoute>
                  <YayasanPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/unit"
              element={
                <ProtectedRoute>
                  <UnitPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sarana"
              element={
                <ProtectedRoute>
                  <SaranaPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </YayasanProvider>
    </AuthProvider>
  );
}

export default App;
