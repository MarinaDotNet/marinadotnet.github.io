'use client';
import { useEffect, useRef } from 'react';

const isLight = localStorage.getItem("theme") === "light";
const bg =  isLight ? 'rgba(197, 197, 236, 1)' : 'rgba(15, 15, 46, 1)';
const tx = isLight ? '#0000B3' : '#24CED1';

/**
 * Matrix component renders a dynamic "Matrix"-style falling letters animation
 * on a full-size canvas.
 * 
 * The animation and colors adapt to the user's theme preference stored in
 * localStorage under the key "theme". By default, it uses light or dark
 * theme colors.
 * 
 * The canvas automatically resizes when the window size changes.
 * 
 * Original inspiration: https://www.drapes.cc/bg?id=10
 * 
 * @component
 * @param {Object} props
 * @param {string} [props.backgroundColor=bg] - Background color of the canvas.
 * @param {string} [props.textColor=tx] - Color of the falling text.
 * @returns {JSX.Element} A canvas element displaying the animated Matrix effect.
 * 
 * @example
 * <Matrix backgroundColor="rgba(0,0,0,1)" textColor="#0F0" />
 */
const Matrix = ({
  backgroundColor = bg,
  textColor = tx
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
       const svw = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--svw'));
        const svh = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--svh'));

        canvas.width = svw * 1000; 
        canvas.height = svh * 1000;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const letters = Array(256).join('1').split('').map(() => Math.floor(Math.random() * 758 + 10));

    const draw = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = textColor;

      letters.forEach((y, i) => {
        const text = String.fromCharCode(33 + Math.random() * 92);
        const x = i * 10;

        ctx.fillText(text, x, y);

        letters[i] = y > 758 + Math.random() * 10000 ? 0 : y + 10;
      });
    };

    const interval = setInterval(draw, 60);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(interval);
    };
  }, [backgroundColor, textColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        backgroundColor
      }}
    />
  );
};

export default Matrix;
