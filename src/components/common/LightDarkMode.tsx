import { useDispatch, useSelector } from "react-redux";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { getIsLightMode, setIsLightMode } from "@/redux/global/globalSlice";
import { Button } from "../ui/button";
import { useEffect } from "react";

const LightDarkMode = () => {
  const dispatch = useDispatch();
  const isLightMode = useSelector(getIsLightMode);

  const handleClick = () => {
    dispatch(setIsLightMode(!isLightMode));

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
      dispatch(setIsLightMode(savedThemeMode === "light"));
    }
  }, []);

  useEffect(() => {
    const gutter = document.querySelector(".gutter") as HTMLElement | null;

    if (gutter) {
      if (!isLightMode) {
        gutter.style.backgroundColor = "#1E293B";
      } else {
        gutter.style.backgroundColor = "#f1f0f0";
      }
    }
  }, [isLightMode]);

  /**
   * TSX
   */
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={handleClick}
      className="rounded-full  text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600  bg-light-dim dark:bg-dark-light text-xl hover:dark:bg-dark-light"
    >
      {!isLightMode ? (
        <MdLightMode className="animate-spinOnce" />
      ) : (
        <MdNightlight className="animate-rotateSwing -rotate-45" />
      )}
    </Button>
  );
};

export default LightDarkMode;
