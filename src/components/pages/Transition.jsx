import Matrix from "../jointLayoutComponents/Matrix";

/**
 * Page component that displays a Matrix background effect.
 * 
 * The background and text colors are determined by the user's theme preference
 * stored in localStorage under the key "theme". Light and dark themes are supported.
 * 
 * Original inspiration: https://www.drapes.cc/bg?id=10
 * 
 * @component
 * @returns {JSX.Element} The rendered Page component
 */
export default function Page() {

  const isLight = localStorage.getItem("theme") === "light";
  const bg =  isLight ? 'rgba(197, 197, 236, 0.05)' : 'rgba(15, 15, 46, 0.05)';
  const tx = isLight ? '#0000B3' : '#24CED1';

  return (
    <div>
      <div >
        <Matrix 
          backgroundColor={ bg}
          textColor={tx}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 10 }}>


      </div>
    </div>
  );
}
