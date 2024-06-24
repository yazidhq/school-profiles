import Heading from "../../components/ui/heading/Heading";
import { useAuth } from "../../context/AuthContext";

const AdminPage = () => {
  const { logout } = useAuth();

  return (
    <div>
      <Heading text={"ADMIN"} />
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default AdminPage;
