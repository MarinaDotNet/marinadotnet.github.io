import UseMediaQuery from "../src/components/UseMediaQuery";
import MobileLayout from "../src/components/MobileLayout";
import DesktopLayout from "../src/components/DesktopLayout";
import { ThemeProvider } from "./components/jointLayoutComponents/ThemeContext";

import { useState, useEffect } from "react";
import { useViewModeGesture } from "./components/jointLayoutComponents/useViewModeGesture";

export default function App() {
  const isMobile = UseMediaQuery(601, 500);

  const [viewMode, setViewMode] = useState(() => localStorage.getItem("view") ?? "user");

  useEffect(() =>
  {
    localStorage.setItem("view", viewMode);
  }, [viewMode]);

  const { gestureHandlers } = useViewModeGesture({
    getViewMode: () => viewMode,
    setViewMode,
    holdMs: 350,});

  return (
    <ThemeProvider>
      <div {...gestureHandlers}>
        {isMobile 
          ? (<MobileLayout viewMode={viewMode} setViewMode={setViewMode} />) 
          : (<DesktopLayout viewMode={viewMode} setViewMode={setViewMode} />)
        }
      </div>
    </ThemeProvider>
  );
}
