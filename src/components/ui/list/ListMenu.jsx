import Anchor from "../text/Anchor";

const ListMenu = ({ menu, handleMouseClick }) => {
  return (
    <div className="d-flex flex-column gap-2" onClick={handleMouseClick}>
      {menu.map((item) => (
        <Anchor key={item} color={"dark"}>
          {item}
        </Anchor>
      ))}
    </div>
  );
};

export default ListMenu;
