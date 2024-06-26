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
import AddUnit from "./pages/admin/pages/unit/AddUnit";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
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
            path="/unit"
            element={
              <ProtectedRoute>
                <UnitPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/unit/add_unit"
            element={
              <ProtectedRoute>
                <AddUnit />
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
    </AuthProvider>
  );
}

export default App;
