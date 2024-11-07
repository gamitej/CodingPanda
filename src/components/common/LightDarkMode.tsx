import { useDispatch, useSelector } from "react-redux";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { getIsLightMode, setIsLightMode } from "@/redux/global/globalSlice";
import { Button } from "../ui/button";
import { useEffect } from "react";

const LightDarkMode = () => {
  const dispatch = useDispatch();
  const isLightMode = useSelector(getIsLightMode);

  const handleClick = () => {
    dispatch(setIsLightMode());

    const newTheme = isLightMode ? "dark" : "light";
    sessionStorage.setItem("themeMode", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const savedThemeMode = sessionStorage.getItem("themeMode") as
      | "light"
      | "dark"
      | null;

    if (savedThemeMode) {
      document.documentElement.classList.toggle(
        "dark",
        savedThemeMode === "dark"
      );
    }
  }, []);

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={handleClick}
      className="rounded-full text-xl hover:dark:bg-gray-500 hover:text-yellow-400 duration-600 ease-in-out"
    >
      {isLightMode ? (
        <MdLightMode className="animate-spinOnce" />
      ) : (
        <MdNightlight className="animate-rotateSwing -rotate-45" />
      )}
    </Button>
  );
};

export default LightDarkMode;
