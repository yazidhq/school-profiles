import Anchor from "../text/Anchor";

const ListMenu = ({ school, menu }) => {
  return (
    <div className="d-flex flex-column gap-2">
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
