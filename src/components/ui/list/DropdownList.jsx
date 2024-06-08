import Anchor from "../text/Anchor";

const DropdownList = ({ route, children }) => {
  return (
    <li>
      <Anchor route={route} color={"dark dropdown-item"}>
        {children}
      </Anchor>
    </li>
  );
};

export default DropdownList;
