import Button from "../../ui/button/Button";
import SubHeading from "../../ui/heading/SubHeading";
import ListMenu from "../../ui/list/ListMenu";

const OpenMenu = ({ handleMouseClick }) => {
  const yayasan = ["Tentang Kami", "Sejarah Berdirinya Al-Hikmah"];
  const listMenu = ["Al-Hikmah Dawuan", "Al-Hikmah Tirtamulya"];

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal bg-glass rounded-end-5 shadow-lg">
        <div className="modal-content">
          <div className="d-flex justify-content-between modal-header pt-4 px-5 text-navy">
            <SubHeading text={"MENU"} addOn={"fw-bold fs-4 mt-3"} />
            <Button style={"link btn-close"} buttonClick={handleMouseClick} />
          </div>
          <div className="modal-body p-4 px-5">
            <SubHeading text={"YAYASAN AL-HIKMAH"} addOn={"fw-bold fs-6"} />
            <ListMenu menu={yayasan} handleMouseClick={handleMouseClick} />
            <SubHeading
              text={"SEKOLAH AL-HIKMAH"}
              addOn={"fw-bold fs-6 mt-4"}
            />
            <ListMenu menu={listMenu} handleMouseClick={handleMouseClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenMenu;
