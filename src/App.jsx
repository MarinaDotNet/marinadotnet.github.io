import UseMediaQuery from "../src/components/UseMediaQuery";
import MobileLayout from "../src/components/MobileLayout";
import DesktopLayout from "../src/components/DesktopLayout";

export default function App() {
  const isMobile = UseMediaQuery(601, 500);

  return (
    <>
    {
      isMobile
      ? <MobileLayout />
      : <DesktopLayout />
    }
    </>
  );
}
