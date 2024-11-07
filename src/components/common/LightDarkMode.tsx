import { MdLightMode, MdNightlight } from "react-icons/md";

const LightDarkMode = () => {
  const isLight = true;

  /**
   * TSX
   */
  return (
    <div className="border border-gray-200 rounded-full p-[6px] text-xl cursor-pointer">
      {isLight ? <MdLightMode /> : <MdNightlight />}
    </div>
  );
};

export default LightDarkMode;
