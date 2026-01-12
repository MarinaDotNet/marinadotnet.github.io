import {useRef} from "react";

/**
 * useViewModeGesture
 * 
 * Custom React Hook that enables a temprary view mode switch while the user performs a press-and-hold gesture.
 * 
 * Suported gestures:
 * - Desktop: holding the right mouse button (RMB)
 * - Mobile: long press (touch and hold)
 * 
 * Behaviour:
 * - When the hold duration exceeds the specified threshold, the current view mode is temporarily switched to the opposite value.
 * - When the gesture ends (mouse up / touch end / touch move), the previous view mode is restored.
 * 
 * This hook is designed for layouts that support both "developer" and "user" view modes and allows quick preview 
 * of the alternative mode without permanently changing state.
 * 
 * @param {Object} options
 * @param {() => string} options.getViewMode Function that returns the current view  mode
 * @parm {(mode: string) => void} options.setViewMode State setter for updating the view mode.
 * @param {number} options.holdMs=350 Duration (in milliseconds) required to trigger the gesture.
 * @returns{{
 *  gestureHandlers: {
 *    onMouseDown: Function,
 *    onMouseUp: Function,
 *    onContextMenu: Function,
 *    onTouchStart: Functionn,
 *    onTouchEnd: Function,
 *    onTouchMove: Function
 *  }
 * }} An object conatining gesture event handlers to be spread onto a wrapper DOM element.
 */
export function useViewModeGesture({getViewMode, setViewMode, holdMs=350}){

  const timerRef = useRef(null);
  const prevModeRef = useRef(null);
  const isActiveRef = useRef(null);

  const start = () => 
  {
    if(isActiveRef.current)
    {
      return;
    }

    prevModeRef.current = getViewMode();
    setViewMode(prev => (prev === "developer" ? "user" : "developer"));
    isActiveRef.current = true;
  };

  const end = () => 
  {
    if(!isActiveRef.current)
    {
      return;
    }

    if(prevModeRef.current)
    {
      setViewMode(prevModeRef.current);
    }

    prevModeRef.current = null;
    isActiveRef.current = null;
  };

  const clearTimer = () => 
  {
    if(timerRef.current){
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const onMouseDown = (e) => 
  {
    if(e.button !== 2)
    {
      return;
    }

    e.preventDefault();
    clearTimer();
    timerRef.current = setTimeout(() => 
    {
      start();
    }, holdMs);
  };

  const onMouseUp = (e) => 
  {
    if(e.button !== 2)
    {
      return;
    }
    clearTimer();
    end();
  };

  const onContextMenu = (e) => 
  {
    e.preventDefault();
  };


  const onTouchStart = () => 
  {
    clearTimer();
    timerRef.current = setTimeout(() => 
    {
      start();
    }, holdMs);
  };

  const onTouchEnd = () => 
  {
    clearTimer();
    end();
  };

  const onTouchMove = () => 
  {
    clearTimer();
    end();
  };

  return{
    gestureHandlers: 
    {
      onMouseDown,
      onMouseUp,
      onContextMenu,
      onTouchStart,
      onTouchEnd,
      onTouchMove,
    },
  };
}