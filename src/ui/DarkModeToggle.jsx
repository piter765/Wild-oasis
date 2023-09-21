import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import ButtonIcon from "./ButtonIcon"
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const {isDarkMode, toggleDarkMode} = useDarkMode();

  return (
    <div>
      <ButtonIcon onClick={toggleDarkMode}>
        {isDarkMode ? <HiOutlineMoon
        /> : <HiOutlineSun/>}
      </ButtonIcon>
    </div>
  )
}

export default DarkModeToggle
