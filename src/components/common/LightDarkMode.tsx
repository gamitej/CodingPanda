import { useDispatch, useSelector } from "react-redux";
import { MdLightMode, MdNightlight } from "react-icons/md";
// shadcn ui
import { Button } from "../ui/button";
// redux
import { getIsLightMode, setIsLightMode } from "@/redux/global/globalSlice";

const LightDarkMode = () => {
  const dispatch = useDispatch();
  const isLightMode = useSelector(getIsLightMode);

  const handleClick = () => {
    dispatch(setIsLightMode(!isLightMode));
  };

  /**
   * TSX
   */
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={handleClick}
      className="rounded-full text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 bg-light-dim dark:bg-dark-light text-xl hover:dark:bg-dark-light"
    >
      {isLightMode ? (
        <MdNightlight className="animate-rotateSwing -rotate-45" />
      ) : (
        <MdLightMode className="animate-spinOnce" />
      )}
    </Button>
  );
};

export default LightDarkMode;
