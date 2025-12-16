/**
 * Command text definitions for the Developer PowerShell animation.
 * 
 * Each command contains multiple animation variants.
 * One variant is randomly selected and rendered line by line
 * to simulate a terminal like execution flow.
 * 
 * These commands consumed by ConsoleSimulator
 * and mapped via COMMAND_MAP.
 */

const homeCmd = 
[
    ["Returning to Home...", "Loading main content...", "Home page ready!"],
    ["Going to Home...", "Preparing main section...", "Home loaded!"],
    ["Opening Home page...", "Fetching home modules", "Ready!"],
    ["Switching to Home...", "Loading layout...", "Home page active!"],
    ["[sys]> route/home", "[core] Initializing landing modules...", "[cache] Restoring UI state...", "[ui] Rendering home interface...", "[ok] Home page active."],
    ["[sys]> route/home", "[core] Bootstrapping environment...[##--------] 20%", "[cache] Restoring session state...[#####-----] 55%", "[ui] Rendering components...[########--] 85%", "[ok] Home page active. [##########] 100%"],
    ["[nav] Jumping to /home", "[core] Loading base modules...", "[proc] Updating home schema...", "[ui] Deploying layout...", "[ready] Home interface online."],
    ["[cmd] home::load()", "[sys] Initialing UI pipeline...", "[cache] Injecting stored parameters...", "[ui] Repainting viewport...", "[ok] Home screen ready."],
    ["[cmd] home::boot()", "[core] Preparing environment... [#---------] 12%", "[cache] Syncing session data... [#####-----] 56%", "[ui] Loading layers... [########--]", "[ok] Home screen deployed. [##########] 100%"],
    ["[sys]> access /home", "[core] Initializing handlers... [###-------] 33%", "[proc] Registering components...[######----] 67%", "[ui] Rendering final frame... [#########-]", "[ok] Home active. [##########] 100%"]
];
const projectCmd = 
[
    ["Navigating to Projects...", "Loading project list...", "Projects loaded!"],
    ["Opening Projects...", "Fetching project data...", "Projects ready!"],
    ["Loading projects section...", "Compiling project entries...", "Done!"],
    ["Entering Projects...", "Scanning project list...", "Project list loaded!"],
    ["[sys]> open /projects", "[db] Querying project index...", "[proc] Compiling project registry...", "[ui] Building project grid...", "[ok] Projects paged ready."],
    ["[sys]> open /projects", "[db] Accessing index... [###-------] 30%", "[proc] Aggregating enties... [######----] 65%", "[ui] Generating project layout... [#########-] 95%", "[done] Projects page deployed. [##########] 100%"],
    ["[nav] Navigating to /projects", "[db] Retrieving repository list...", "[sys] Sorting project metadata...", "[ui] Consturcting galery...", "[ok] Projects interface mounted."],
    ["[cmd] projects::init()", "[db] Scanning project tables...", "[proc] Building index tree...", "[ui] Applying project templates...", "[done] Projects environment running."],
    ["[cmd] projects::load()", "[db] Opening repository... [##--------] 24%", "[proc] Parsing enties... [#####-----] 53%", "[ui] Mapping layout... [########--] 89%", "[ok] Projects loaded. [##########] 100%"],
    ["[sys]> route /projects", "[db] Syncing projects catalog... [###-------] 31%", "[proc] Building index... [######----] 66%", "[ui] Deploying grid... [#########-] 94%", "[done] Projects view online. [##########] 100%"]
];

const skillsCmd = 
[
    ["Switching to skills page...", "Loading skills...", "Skills ready!"],
    ["Skills page here we go...", "Checking skills database...", "Skills loaded!"],
    ["Switching pages...", "Loading my skillset...", "Done!"],
    ["[sys]> route /skills", "[load] Initializing skill-matrix...", "[db] Fetching capability clusters...", "[proc] Building display layers...", "[ok] Skills interface deployed."],
    ["[sys]> route /skills", "[load] Initializing modules... [##--------] 20%", "[db] Fetching capability clusters... [#####-----] 50%", "[proc] Rendering interface... [########--] 80%", "[ok] Skills interface ready. [##########] 100%"],
    ["[cmd] run skills::load()", "[vm] Allocating memory for skill modules...", "[i/o] Reading competencies registry...", "[render] Generating skills viewport...", "[done] Skills module booted."],
    ["[nav] Jumping to /skills endpoint...", "[sys] Dectypting skills index...", "[proc] Maping epertise tree...", "[ui] Deploying interactive layer...", "[ok] Skills environment ready."]
];

const aboutMeCmd = 
[
    ["Navigating to About Me...", "Gathering personal info...", "All about me!"],
    ["About Me page...", "Collecting self-data...", "Here I am!"],
    ["Loading biograhpy...", "Almost there...", "Done!"],
    ["[sys]> open /about", "[meta] Parsing identity manifest...", "[cache] Compiling profile blocks...", "[ui] Loading bio-frame...", "[ok] Identity view active."],
    ["[sys]> open /about", "[meta] Parsing identity manifest... [##--------] 20%", "[cache] Compilinng bio-blocks... [#####-----] 55%", "[ui] Drawing layout... [########--] 82%", "[ok] About view active. [##########] 100%"],
    ["[nav] Access /identity/about", "[meta] Reading self-descriptor blocks...", "[proc] Assembling narrative sequence...", "[ui] Pushing profile to viewport...", "[ok] About page active."],
    ["[sys]> parse --bio", "[cache] Restoring personal metadata...", "[proc] Linking biography modules...", "[ui] Updating layout...", "[ok] Bio interface online."]
];

const contactCmd = 
[
    ["Opening Contact page...", "Connecting to contact module...", "Contact page loaded!"],
    ["Contact page incoming...", "Dialing connections...", "Ready to chat!"],
    ["Opening communication channel...", "Fetching contact info...", "All set!"],
    ["[sys]> access /contact", "[net] Establishing comm-link...", "[auth] Syncing identity handshake...", "[ui] Rendering comm-panel...", "[ok] Contact channel online."],
    ["[sys]> access /contact", "[net] Opening comm-link... [###-------] 30%", "[auth] Handshake completed... [######----] 60%", "[ui] Building contact panel... [########--] 85%", "[done] Contact channel online. [##########] 100%"],
    ["[cmd] connect --ui contact", "[net] Opening secure channel...", "[net] Handshake complete...", "[ui] Rendering contact overlay...", "[ready] Communication node online."],
    ["[sys]> load:contact", "[net] Activating listeners...", "[auth] Loading identity tokens...", "[ui] Constructing contact frame...", "[ok] Contact interface initialized."]
];

let getThemeMode = () =>
    localStorage.getItem("theme") ?? "dark";

const themeSwitchCmd = 
[
    ["Toggling theme...", "Adjusting lights...", "Theme updated!"],
    ["Theme switch in progress...", "Adjusting colors...", "Theme toggled!"],
    [`Changing ${getThemeMode()} mode...`, "Applying new theme...", "Done!"],
    ["[sys]> exec theme.toggle", "[core] Rewriting color map...", "[gfx] Applying shader presets...", "[reload] Updating UI pipline...", "[ok] Theme switched."],
    ["[sys]> exec theme.toggle", "[gfx] Loading palette... [###-------] 35%", "[gfx] Applying shaders... [######----] 60%", "[core] Rebuilding UI pipline... [#########-] 90%", "[done] Theme switched. [##########] 100%"],
    ["[cmd] theme::toggle()", "[gfx] Reloading shader table...", "[gfx] Rewriting palette...", "[ui] Refreshing viewports...", "[ok] Theme transition complete."],
    ["[sys]> set-theme --switch", "[gfx] Flushing buffers...", "[gfx] Applying gamma profile...", "[ui] Reloading components...", "[done] Theme updated."]
];

const COMMAND_MAP = 
{
    h: homeCmd,
    home: homeCmd,
    "home.cs": homeCmd,
    "/home.cs": homeCmd,

    p: projectCmd,
    projects: projectCmd,
    "projects.cs": projectCmd,
    "/projects.cs": projectCmd,

    s: skillsCmd,
    skills: skillsCmd,
    "skills.cs": skillsCmd,
    "/skills.cs": skillsCmd,

    a: aboutMeCmd,
    "about_me": aboutMeCmd,
    "about_me.cs": aboutMeCmd,
    "/about_me.cs": aboutMeCmd,

    c: contactCmd,
    contact: contactCmd,
    "contact.cs": contactCmd,
    "/contact.cs": contactCmd,

    th: themeSwitchCmd,
    theme: themeSwitchCmd,
    "switch-theme": themeSwitchCmd
}

export { COMMAND_MAP }