import Anchor from "../text/Anchor";

const ListMenu = ({ school, menu, handleMouseClick }) => {
  return (
    <div className="d-flex flex-column gap-2" onClick={handleMouseClick}>
      {menu.map((item) => (
        <Anchor
          route={`/${school}/${item.replace(" ", "-").toLowerCase()}`}
          key={item}
          color={"dark"}
        >
          {item}
        </Anchor>
      ))}
    </div>
  );
};

export default ListMenu;
