import UseMediaQuery from "../src/components/UseMediaQuery";
import MobileLayout from "../src/components/MobileLayout";
import DesktopLayout from "../src/components/DesktopLayout";
import { ThemeProvider } from "./components/jointLayoutComponents/ThemeContext";

export default function App() {
  const isMobile = UseMediaQuery(601, 500);

  return (
    <ThemeProvider>
      {
        isMobile
        ? <MobileLayout />
        : <DesktopLayout />
      }
    </ThemeProvider>
  );
}
