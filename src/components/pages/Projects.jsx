import {NumberedCodeBloc, CodeKeyWords, CodeValues, ClassName, Tab, SingleComment, CodeIdentifier} from "../jointLayoutComponents/CodeTokens";

export default function Projects({viewMode}){
    if(viewMode === "developer"){
        return(
            <NumberedCodeBloc children={[
                <><CodeKeyWords>using</CodeKeyWords> CleanCode;</>,
                <><CodeKeyWords>using</CodeKeyWords> Projects.Backend;</>,
                <><CodeKeyWords>using</CodeKeyWords> Projects.Frontend;</>,
                <><CodeKeyWords>using</CodeKeyWords> Projects.FullStack;</>,
                <br/>,
                <SingleComment> Tip: switch between views to explore different perspectives.</SingleComment>,
                <><CodeKeyWords>namespace</CodeKeyWords> <CodeIdentifier>NetByMarina</CodeIdentifier>;</>,
                <br/>,
                <><CodeKeyWords>public static class </CodeKeyWords><CodeIdentifier>Project</CodeIdentifier></>,
                <>&#123;</>,
                <><Tab number={1} /><CodeKeyWords>public static</CodeKeyWords> List&lt;<CodeIdentifier>Project</CodeIdentifier>&gt; ListAll()</>,
                <><Tab number={1} />&#123;</>,
                <><Tab number={2} /> <CodeIdentifier>MessageBox</CodeIdentifier>.<CodeIdentifier>Show</CodeIdentifier>(<CodeValues>"Welcome to my Projects Showcase."</CodeValues>);</>,
                <br/>,
                <><Tab number={2}/><SingleComment> Backend Projects</SingleComment></>,
                <><Tab number={2}/><CodeKeyWords>var</CodeKeyWords> BookShopAPI = <CodeKeyWords>new</CodeKeyWords> Project()</>,
                <><Tab number={2} />&#123;</>,
                <><Tab number={3}/>Title = <CodeValues>"BookShop.API"</CodeValues>,</>,
                <><Tab number={3}/>Description = <CodeValues>"Production REST API demonstrating clean architecture, JWT auth, layered design, maintainable code. Hosted on Render."</CodeValues>,</>,
                <ul className="code-list"><Tab number={3} />Tech = [
                    <li><CodeValues>"ASP.NET Core"</CodeValues>, <CodeValues>"Entity Framework Core"</CodeValues>,</li>
                    <li><CodeValues>"JWT"</CodeValues>, <CodeValues>"Swagger"</CodeValues>, <CodeValues>"Render"</CodeValues>,</li>
                    <li><CodeValues>"MongoDB Atlas"</CodeValues>, <CodeValues>"SQL"</CodeValues>, <CodeValues>"Redis"</CodeValues></li>
                    ],
                </ul>,
                <><Tab number={3}/>GitHub = 
                    <CodeKeyWords> new</CodeKeyWords> <ClassName>Uri</ClassName>(<CodeValues>
                    <a href="https://github.com/MarinaDotNet/BookShop.API" title="GitHub repository of BookShop.API">
                        "about:GitHub"
                    </a></CodeValues>),
                </>,
                <><Tab number={3}/>Demo = 
                    <CodeKeyWords> new</CodeKeyWords> <ClassName>Uri</ClassName>(<CodeValues>
                    <a href="https://bookshop-api-xyxs.onrender.com/swagger/index.html" title="Live BookShop.API at Render">
                    "about:Live"
                    </a></CodeValues>)
                </>,
                <><Tab number={2} />&#125;</>,
                <br/>,
                <><Tab number={2}/><SingleComment> Frontend Projects</SingleComment></>,
                <><Tab number={2}/><CodeKeyWords>var</CodeKeyWords> StaticPortfolio = <CodeKeyWords>new</CodeKeyWords> Project()</>,
                <><Tab number={2} />&#123;</>,
                <><Tab number={3}/>Title = <CodeValues>"Static Portfolio Website"</CodeValues>,</>,
                <><Tab number={3}/>Description = <CodeValues>"A set of simple static web pages, hosted on GitHub."</CodeValues>,</>,
                <ul className="code-list"><Tab number={3} />Tech = [
                    <li><CodeValues>"HTML"</CodeValues>, <CodeValues>"CSS"</CodeValues>, <CodeValues>"JavaScript"</CodeValues></li>
                    ],
                </ul>,
                <><Tab number={3}/>GitHub = 
                    <CodeKeyWords> new</CodeKeyWords> <ClassName>Uri</ClassName>(<CodeValues>
                    <a href="https://github.com/MarinaDotNet/marinadotnet.github.io/tree/main/public/static" title="GitHub repository of Static Portfolio">
                        "about:GitHub"
                    </a></CodeValues>),
                </>,
                <><Tab number={3}/>Demo = 
                    <CodeKeyWords> new</CodeKeyWords> <ClassName>Uri</ClassName>(<CodeValues>
                    <a href="https://netbymarina.dev/static/" title="Live Static Portfolio at GitHub">
                        "about:Live"
                    </a></CodeValues>)
                </>,
                <><Tab number={2} />&#125;</>,
                <br/>,
                <><Tab number={2}/><CodeKeyWords>var</CodeKeyWords> ReactPortfolio = <CodeKeyWords>new</CodeKeyWords> Project()</>,
                <><Tab number={2} />&#123;</>,
                <><Tab number={3}/>Title = <CodeValues>"React Portfolio App"</CodeValues>,</>,
                <><Tab number={3}/>Description = <CodeValues>"A simple portfolio React-Vite application that simulates the Visual Studio, built and hosted by GitHub."</CodeValues>,</>,
                <ul className="code-list"><Tab number={3} />Tech = [
                    <li><CodeValues>"React"</CodeValues>, <CodeValues>"Vite"</CodeValues>, <CodeValues>"JavaScript"</CodeValues></li>
                    ],
                </ul>,
                <><Tab number={3}/>GitHub = 
                    <CodeKeyWords> new</CodeKeyWords> <ClassName>Uri</ClassName>(<CodeValues><a href="https://github.com/MarinaDotNet/marinadotnet.github.io" title="GitHub repository of React App">
                    "about:GitHub"
                    </a></CodeValues>),</>,
                <><Tab number={3}/>Demo = 
                    <CodeKeyWords> new</CodeKeyWords> <ClassName>Uri</ClassName>(<CodeValues><a href="https://netbymarina.dev/" title="Live React App at GitHub">
                    "about:Live"
                    </a></CodeValues>)
                </>,
                <><Tab number={2} />&#125;</>,
                <br/>,
                <><Tab number={2}/><SingleComment> FullStack Projects</SingleComment></>,
                <><Tab number={2}/><CodeKeyWords>var</CodeKeyWords> WikiApplication = <CodeKeyWords>new</CodeKeyWords> Project()</>,
                <><Tab number={2} />&#123;</>,
                <><Tab number={3}/>Title = <CodeValues>"Wiki Application"</CodeValues>,</>,
                <><Tab number={3}/>Description = <CodeValues>"Manage infirmation about data structures with add/edit/save/load functionality."</CodeValues>,</>,
                <ul className="code-list"><Tab number={3} />Tech = [
                    <li><CodeValues>"C#"</CodeValues>, <CodeValues>"WinForms"</CodeValues>, <CodeValues>"File I/O"</CodeValues></li>
                    ],
                </ul>,
                <><Tab number={3}/>GitHub = 
                    <CodeKeyWords> new</CodeKeyWords> <ClassName>Uri</ClassName>(<CodeValues><a href="https://github.com/MarinaDotNet/WikiApp" title="GitHub repository of Wiki App">
                    "about:GitHub"
                    </a></CodeValues>),</>,
                    <><Tab number={3} />Demo = <CodeKeyWords>null</CodeKeyWords></>,
                <><Tab number={2} />&#125;</>,
                <br/>,
                <><Tab number={2}/><CodeKeyWords>var</CodeKeyWords> MultiAppSystem = <CodeKeyWords>new</CodeKeyWords> Project()</>,
                <><Tab number={2} />&#123;</>,
                <><Tab number={3}/>Title = <CodeValues>"Multi-Application System"</CodeValues>,</>,
                <><Tab number={3}/>Description = <CodeValues>"Multiple clients connect to server for astronomical calculations."</CodeValues>,</>,
                <ul className="code-list"><Tab number={3} />Tech = [
                    <li><CodeValues>"C#"</CodeValues>, <CodeValues>"Console App"</CodeValues>,</li>
                    <li><CodeValues>"Named Pipes"</CodeValues>, <CodeValues>"WCF"</CodeValues></li>
                    ],
                </ul>,
                <><Tab number={3}/>GitHub = 
                    <CodeKeyWords> new</CodeKeyWords> <ClassName>Uri</ClassName>(<CodeValues><a href="https://github.com/MarinaDotNet/AstroRepository" title="GitHub repository of Multi-Application System">
                    "about:GitHub"
                    </a></CodeValues>),</>,
                    <><Tab number={3} />Demo = <CodeKeyWords>null</CodeKeyWords></>,
                <><Tab number={2} />&#125;</>,
                <br/>,
                <><Tab number={2}/><CodeKeyWords>var</CodeKeyWords> DroneServiceApp = <CodeKeyWords>new</CodeKeyWords> Project()</>,
                <><Tab number={2} />&#123;</>,
                <><Tab number={3}/>Title = <CodeValues>"Drone Service Application"</CodeValues>,</>,
                <><Tab number={3}/>Description = <CodeValues>"Logs and manages drones for different service queues."</CodeValues>,</>,
                <ul className="code-list"><Tab number={3} />Tech = [
                    <li><CodeValues>"C#"</CodeValues>, <CodeValues>"WinForms"</CodeValues>, <CodeValues>"Data Structures"</CodeValues></li>
                    ],
                </ul>,
                <><Tab number={3}/>GitHub = 
                    <CodeKeyWords> new</CodeKeyWords> <ClassName>Uri</ClassName>(<CodeValues><a href="https://github.com/MarinaDotNet/DroneServiceApplication" title="GitHub repository of Drone Service App">
                    "about:GitHub"
                    </a></CodeValues>),
                </>,
                <><Tab number={3} />Demo = <CodeKeyWords>null</CodeKeyWords></>,
                <><Tab number={2} />&#125;</>,
                <><Tab number={1} />&#125;</>,
                <>&#125;</>
            ]} />
    );
    }
    return (<NumberedCodeBloc children={[
        <span className="text-line hint-text">
            Tip: switch between views to explore different perspectives.
        </span>,
        <br/>,

        <span className="line-title">
            Welcome to my Projects Showcase.
        </span>,
        <br/>,

        <span className="line-subtitle">Backend Projects:</span>,
        <ul className="text-line line-list">
            <li><b className="text-line">BookShop.API</b></li>
            <li><b className="text-line">Description:</b><br/>
            Production REST API demonstrating clean architecture, JWT auth, layered design, maintainable code. Hosted on Render.</li>
            <li><b className="text-line">Tech:</b><br/>
            ASP.NET Core, Entity Framework Core, JWT, Swagger, Render, MongoDB Atlas, SQL, Redis</li>
            <li><b className="text-line">GitHub:</b> <a className="line-link" href="https://github.com/MarinaDotNet/BookShop.API" title="GitHub repository of BookShop.API">GitHub repository</a></li> 
            <li><b className="text-line">Demo:</b> <a className="line-link" href="https://bookshop-api-xyxs.onrender.com/swagger/index.html" title="Live BookShop.API at Render">Live Demo at Render</a></li> 
        </ul>,
        <br/>,

        <span className="line-subtitle">Frontend Projects:</span>,
        <ul className="text-line line-list">
            <li><b className="text-line">Static Portfolio Website</b></li>
            <li><b className="text-line">Description:</b><br/>
            A set of simple static web pages, hosted on GitHub.</li>
            <li><b className="text-line">Tech:</b><br/>
            HTML, CSS, JavaScript</li>
            <li><b className="text-line">GitHub:</b> <a className="line-link" href="https://github.com/MarinaDotNet/marinadotnet.github.io/tree/main/public/static" title="GitHub repository of Static Portfolio">GitHub repository</a></li> 
            <li><b className="text-line">Demo:</b> <a className="line-link" href="https://netbymarina.dev/static/" title="Live Static Portfolio at GitHub">Live Demo at GitHub</a></li> 
        </ul>,
        <ul className="text-line line-list">
            <li><b className="text-line">React Portfolio App</b></li>
            <li><b className="text-line">Description:</b><br/>
            A simple portfolio React-Vite application that simulates the Visual Studio, built and hosted by GitHub.</li>
            <li><b className="text-line">Tech:</b><br/>
            React, Vite, JavaScript</li>
            <li><b className="text-line">GitHub:</b> <a className="line-link" href="https://github.com/MarinaDotNet/marinadotnet.github.io" title="GitHub repository of React App">GitHub repository</a></li> 
            <li><b className="text-line">Demo:</b> <a className="line-link" href="https://netbymarina.dev/" title="Live React App at GitHub">Live Demo at GitHub</a></li> 
        </ul>,
        <br/>,

        <span className="line-subtitle">Fullstack Projects:</span>,
        <ul className="text-line line-list">
            <li><b className="text-line">Wiki Application</b></li>
            <li><b className="text-line">Description:</b><br/>
            Manage infirmation about data structures with add/edit/save/load functionality.</li>
            <li><b className="text-line">Tech:</b><br/>
            C#, WinForms, File I/O</li>
            <li><b className="text-line">GitHub:</b> <a className="line-link" href="https://github.com/MarinaDotNet/WikiApp" title="GitHub repository of Wiki Application">GitHub repository</a></li> 
        </ul>,
        <ul className="text-line line-list">
            <li><b className="text-line">Multi Application System</b></li>
            <li><b className="text-line">Description:</b><br/>
            Multiple clients connect to server for astronomical calculations.</li>
            <li><b className="text-line">Tech:</b><br/>
            C#, console application, named pipes, WCF</li>
            <li><b className="text-line">GitHub:</b> <a className="line-link" href="https://github.com/MarinaDotNet/AstroRepository" title="GitHub repository of Multi Application System">GitHub repository</a></li> 
        </ul>,
        <ul className="text-line line-list">
            <li><b className="text-line">Drone Service</b></li>
            <li><b className="text-line">Description:</b><br/>
            Logs and manages drones for different service queues.</li>
            <li><b className="text-line">Tech:</b><br/>
            C#, WinForms, data structures</li>
            <li><b className="text-line">GitHub:</b> <a className="line-link" href="https://github.com/MarinaDotNet/DroneServiceApplication" title="GitHub repository of Drone Service">GitHub repository</a></li> 
        </ul>,
        <br/>,

        <b className="text-line">Passion:</b>,
        <span className="text-line">
            Creating practical and maintainable applications while growing as a developer.
        </span>
    ]} />);
    
}

