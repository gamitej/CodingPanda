import { useDispatch, useSelector } from "react-redux";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { getIsLightMode, setIsLightMode } from "@/redux/global/globalSlice";
import { Button } from "../ui/button";

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
    <Button
      size="icon"
      variant="outline"
      onClick={handleClick}
      className="rounded-full text-xl"
    >
      {isLightMode ? <MdLightMode /> : <MdNightlight className="-rotate-45" />}
    </Button>
  );
};

export default LightDarkMode;
