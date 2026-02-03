// src/components/SiteTour.jsx
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

/// TODO:
/// - Last Step
/// - useEffect() for ensureAnimationOn and rollbackIfChanged, because if user turned ON the Animation after tour done, 
/// and then run another tour without refreshing window, it caunts as animation is preffered to be off.
/// - fix styles: button for Tour and actualy Tour
/// - Enable keyboard to control the tour

export function createSiteTour() {
  const SPEED_SELECTOR = '[data-tour="site-animation-speed"]';
  const ENABLE_ACTION = '[data-tour="site-animation"]';
  let isChanged = false;

function ensureAnimationOn() {
  const speedExists = Boolean(!document.querySelector(SPEED_SELECTOR).hasAttribute("hidden"));
  if(speedExists) return;
  document.querySelector(ENABLE_ACTION)?.click();
  isChanged = true;
};

function rollbackIfChanged(){
  console.log(!isChanged);
  if(!isChanged) return;
  document.querySelector(ENABLE_ACTION)?.click();
};

  return driver({
    showProgress: true,
    steps: [
      {
        element: '[data-tour="layout"]',
        popover: {
          title: "Welcome",
          description: "This is my Interactive React Portfolio.<br/>" +
          "For quick overview, you can also visit the " +
          "<a href='https://marinadotnet.github.io/static/' title='Static portfolio'>static version</a>.",
        },
      },
      {
        element: '[data-tour="site-navbar"]',
        popover: {
          title: "Navigation Bar",
          description: "Use the navigation bar to browse pages manually."
        },
        disableActiveInteraction: true
      },
      {
        element: '[data-tour="site-powershel"]',
        popover: {
          title: "Developer PowerShell",
          description: "A console style interface for navigation and settings.<br/>" + 
          "Type '<b>help</b>' to see all available commands."
        },
        disableActiveInteraction: true
      },
      {
        element: '[data-tour="site-tour"]',
        popover: {
          title: "Tour",
          description: "You can restart this tour anytime using this button.",
        },
        disableActiveInteraction: true
      }, 
      {
        element: '[data-tour="site-animation"]',
        popover: {
          title: "Animations",
          description: "Toggle site annimations on or off."
        },
        disableActiveInteraction: true,
        onNextClick: () => ensureAnimationOn(),
      },
      {
        element: '[data-tour="site-animation-speed"]',
        popover: {
          title: "Animation Speed",
          description: "Adjust the animation speed to your preference."
        },
        disableActiveInteraction: true,
        onHighlightStarted: () => ensureAnimationOn(),
        onDeselected: () => rollbackIfChanged()
      },
      {
        element: '[data-tour="site-theme-switch"]',
        popover: {
          title: "Theme Switch",
          description: "Switch between light and dark themes."
        },
        disableActiveInteraction: true,
      },
      {
        element: '[data-tour="site-view-mode"]',
        popover: {
          title: "View Mode",
          description: "You can change the view mode using the select button, " +
          "or by holding the left mouse button / long touch anywhere on the layout."
        },
        disableActiveInteraction: true
      },
      {
        element: '[data-tour="site-important-links"]',
        popover: {
          title: "Links & CV",
          description: "Find my social profile and download my CV here."
        },
        disableActiveInteraction: true
      },
      {
        element: '[data-tour="layout"]',
        popover: {
          title: "You're all set",
          description: "Feel free to explore the site or use the PowerShell " +
          "for navigation, downloading my CV, and managing animations.",
        },
      },
    ],
  });
}
