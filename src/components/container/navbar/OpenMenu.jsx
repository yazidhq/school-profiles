const OpenMenu = ({ handleMouseClick }) => {
  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <div className="modal-content">
          <div className="d-flex justify-content-between modal-header pt-4 px-4">
            <h5 className="modal-title fw-bold">Menu</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleMouseClick}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <p>Modal body text goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenMenu;
