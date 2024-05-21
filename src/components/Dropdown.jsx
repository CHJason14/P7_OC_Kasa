import { useEffect, useState } from "react";

export default function Dropdown({ title, children }) {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [chevron, setChevron] = useState("fa-solid fa-chevron-up");

  useEffect(() => {
    setChevron(isDisplayed ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up");
  }, [isDisplayed]);

  const toggleDisplay = () => {
    setIsDisplayed(previous => !previous);
  };

  return <>
    <button>
      <p>{title}</p>
      <i onClick={toggleDisplay} className={chevron}></i>
    </button>
    <div>
      {isDisplayed && children}
    </div>
  </>;
}