import {useState, useEffect} from "react";
import {COMMAND_MAP} from "../jointLayoutComponents/commandsData";

/**
 * Simulate animated execution of Developer PowerShell commands.
 * 
 * Renders command output line by line with a delay,
 * imitating a real terminal execution.
 * 
 * Animation is selected based on the provided command key
 * and resolved via COMMAND_MAP. 
 * 
 * @param {boolean} isAnimationOn 
 *    Enables or disables the animation. 
 *    When false, the component should immediately complete execution.
 * 
 * @param {number} animationSpeed
 *    Animation speed in milliseconds per line.
 * 
 * @param {string} commandKey
 *    Normalized command identifier used to resolve animation content.
 * 
 * @param {React.ReactNode} onLineComplete
 *    Callback fired after each rendered output line.
 *    
 * @param {void} onComplete
 *    Callback fired once animation is disabled or no output is rendered.
 * 
 * @returns {JSX.Element|null}
 *    Returns null when animation is disabled or no output is rendered.
 */
export default function ConsoleSimulator({ isAnimationOn, animationSpeed, commandKey, onLineComplete, onComplete }) {
  const [commandLines, setCommandLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const lineDelay = animationSpeed;

  useEffect(() => {
    if (!commandKey || !isAnimationOn) 
    {
      return; // do nothing, animation is disabled
    }

    const variants = COMMAND_MAP[commandKey.toLowerCase()];
    if (!variants) 
    {
      return; // no variants found in lists for requested command
    }

    // random select of animation variant for requested command.
    const selected = variants[Math.floor(Math.random() * variants.length)];

    // defered state update
    Promise.resolve().then(() => 
    {
      setCommandLines(selected);
      setLineIndex(0);
    });
  }, [commandKey, isAnimationOn]);

  useEffect(() => {
    // if animation is disabled the timer is not required
    if (!isAnimationOn) 
    {
      return; 
    }

    // if there no commands left for output than nothing to animate
    if (!commandLines.length) 
    {
      return;
    }

    // If the end of array is reached, call the completion callback and exit.
    if (lineIndex >= commandLines.length)
    {
      onComplete?.();
      return;
    }

    // timer for the output of next line
    const timer = setTimeout(() => 
    {
      onLineComplete?.(commandLines[lineIndex]);
      setLineIndex(lineIndex + 1);
    }, lineDelay);

    return () => clearTimeout(timer);
  }, [lineIndex, commandLines, isAnimationOn, animationSpeed, lineDelay, onLineComplete, onComplete]);

  // The component doesn't render anything visually 
  return null;
}


