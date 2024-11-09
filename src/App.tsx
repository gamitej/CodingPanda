import { Suspense, useEffect } from "react";
// router
import Router from "@/router/Router";
// utils
import { ThemeManager } from "./utils/ThemeSession";
import { Backdrop } from "./components";

function App() {
  useEffect(() => {
    ThemeManager.applyStoredTheme();
  }, []);

  /**
   * TSX
   */
  return (
    <div>
      <Suspense fallback={<Backdrop>loading...</Backdrop>}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
