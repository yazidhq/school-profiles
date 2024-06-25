import Navbar from "./layouts/Navbar";
import Topbar from "./layouts/Topbar";
import "../../admin.css";

const Section = ({ children }) => {
  return (
    <div className="admin-page">
      <Topbar />
      <Navbar />
      <div className="mt-4">
        <div className="container">
          <div className="bg-white shadow-sm rounded-2 p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
