import { getIsLightMode, setIsLightMode } from "@/redux/global/globalSlice";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const LightDarkMode = () => {
  const dispatch = useDispatch();

  const isLightMode = useSelector(getIsLightMode);

  const handleClick = () => {
    dispatch(setIsLightMode());
  };

  /**
   * TSX
   */
  return (
    <div
      onClick={handleClick}
      className="border border-gray-200 rounded-full p-[6px] text-xl cursor-pointer"
    >
      {isLightMode ? <MdLightMode /> : <MdNightlight className="-rotate-45" />}
    </div>
  );
};

export default LightDarkMode;
