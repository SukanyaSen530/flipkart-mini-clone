import { Accordian } from "../";

import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Filters</h2>
      <div>
        <Accordian title="gender">
          <p>Hiii</p>
        </Accordian>
        <Accordian title="size"></Accordian>
        <Accordian title="brand"></Accordian>
      </div>
    </aside>
  );
};

export default Sidebar;
