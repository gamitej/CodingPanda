import { Suspense } from "react";
import Router from "@/router/Router";

function App() {
  return (
    <div>
      <Suspense fallback={<h2>loading...</h2>}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
