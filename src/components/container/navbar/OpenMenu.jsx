import Button from "../../ui/button/Button";
import SubHeading from "../../ui/heading/SubHeading";
import ListMenu from "../../ui/list/ListMenu";

const OpenMenu = ({ handleMouseClick }) => {
  const listMenu = [
    "Profil",
    "Jenjang Pendidikan",
    "Sarana dan Prasarana",
    "Ekstrakurikuler",
    "Hari Besar",
    "Kegiatan Belajar dan Mengajar",
    "Prestasi Siswa",
  ];

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal bg-glass rounded-end-4 shadow-lg">
        <div className="modal-content">
          <div className="d-flex justify-content-between modal-header pt-4 px-4">
            <SubHeading text={"MENU"} addOn={"fw-bold fs-4 mt-3"} />
            <Button style={"link btn-close"} buttonClick={handleMouseClick} />
          </div>
          <div className="modal-body p-4">
            <SubHeading text={"ALHIKMAH TIRTAMULYA"} addOn={"fw-bold fs-6"} />
            <ListMenu
              school="tirtamulya"
              menu={listMenu}
              handleMouseClick={handleMouseClick}
            />
            <br />
            <br />
            <SubHeading text={"ALHIKMAH DAWUAN"} addOn={"fw-bold fs-6"} />
            <ListMenu
              school="dawuan"
              menu={listMenu}
              handleMouseClick={handleMouseClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenMenu;
