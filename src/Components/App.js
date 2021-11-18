import { useState } from "react";
import Categories from "./Categories/Categories";
import Content from "./Content/Content";
import items from "./Data.json";
let allCategories = ["all", ...new Set(items.map((value) => value.category))];
function App() {
  const [listMenu, setListMenu] = useState(items);
  function filterCategories(category) {
    if (category === "all") {
      setListMenu(items); 
    } else {
      const listFilterCategories = items.filter((value) => value.category === category);
      setListMenu(listFilterCategories);
    }
  }
  return (
    <div className="App">
      <Categories allCategories={allCategories} filterCategories={(category) => filterCategories(category)} ></Categories>
      <Content listMenu={listMenu}></Content>
    </div>
  );
}

export default App;
