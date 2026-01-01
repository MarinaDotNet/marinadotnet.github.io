import {NumberedCodeBloc, CodeKeyWords, CodeValues, ClassName, Tab, SingleComment, CodeIdentifier} from "../jointLayoutComponents/CodeTokens";

export default function Skills({viewMode}){
    if(viewMode === "developer")
    {
        return (
        <NumberedCodeBloc children={[
            <><CodeKeyWords>using</CodeKeyWords> Skills.LanguagesAndFrameworks;</>,
            <><CodeKeyWords>using</CodeKeyWords> Skills.Database;</>,
            <><CodeKeyWords>using</CodeKeyWords> Skills.ToolsAndTechnologies;</>,
            <><CodeKeyWords>using</CodeKeyWords> Skills.CurrentlyLearning;</>,
            <><CodeKeyWords>using</CodeKeyWords> Skills.Testing;</>,
            <br/>,
            <><CodeKeyWords>namespace</CodeKeyWords> <CodeIdentifier>MarinaDotNet</CodeIdentifier>;</>,
            <br/>,
            <><SingleComment>Developer Skill Set</SingleComment></>,
            <><CodeKeyWords>public static class</CodeKeyWords> <CodeIdentifier>Skills</CodeIdentifier></>,
            <>&#123;</>,
            <><Tab number={1} /><CodeKeyWords>public static </CodeKeyWords> List&lt;<CodeIdentifier>Skills</CodeIdentifier>&gt; DisplayAll()</>,
            <><Tab number={1}/>&#123;</>,
            <><Tab number={1} /> <CodeIdentifier>MessageBox</CodeIdentifier>.<CodeIdentifier>Show</CodeIdentifier>(<CodeValues>"Overview of my technical skill set"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"-------------"</CodeValues>);</>,
            <><Tab number={2} />ShowLanguagesAndFrameworks();</>,
            <><Tab number={2} />ShowDatabases();</>,
            <><Tab number={2} />ShowToolsAndTechnologies();</>,
            <><Tab number={2} />ShowTesting();</>,
            <><Tab number={2} />ShowCurrentlyLearning();</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"-------------"</CodeValues>);</>,
            <><Tab number={2} /><SingleComment>Skills evolve with practice, real projects, and curiosity.</SingleComment></>,
            <><Tab number={1} />&#125;</>,
            <br/>,
            <><Tab number={1}/><SingleComment>Core programming languages and frameworks</SingleComment></>,
            <><Tab number={1}/><CodeKeyWords>private static void</CodeKeyWords> ShowLanguagesAndFrameworks()</>,
            <><Tab number={1} />&#123;</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"Languages & Frameworks:"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- C# (.NET, ASP.NET Core)"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- JavaScript (ES6+)"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- React"</CodeValues>);</>,
            <><Tab number={2} /><SingleComment>Not practiced recently, but familiar with fundamentals.</SingleComment></>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- Java"</CodeValues>);</>,
            <><Tab number={2} /><SingleComment>Very basic level, used for scripting and learning purposes.</SingleComment></>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- Python"</CodeValues>);</>,
            <><Tab number={1} />&#125;</>,
            <br/>,
            <><Tab number={1} /><SingleComment>Data storage and persistance</SingleComment></>,
            <><Tab number={1}/><CodeKeyWords>private static void</CodeKeyWords> ShowDatabases()</>,
            <><Tab number={1} />&#123;</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"Databases:")</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- SQL Server"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- MongoDB (Atlas and local)"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- Redis (Azure Cache for Redis)"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- MariaDB"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- SQLite"</CodeValues>);</>,
            <><Tab number={1} />&#125;</>,
            <br/>,
            <><Tab number={1} /><SingleComment>Development tools and engineering practices</SingleComment></>,
            <><Tab number={1}/><CodeKeyWords>private static void</CodeKeyWords> ShowToolsAndTechnologies()</>,
            <><Tab number={1} />&#123;</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"Tools & Technologies:")</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- Git & GitHub for version control"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- Visual Studio, VS Code, NetBeans"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- Entity Framework Core and LINQ"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- REST API design and integration"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- API testing and documentation with Postman and Swagger"</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- Vite for modern front-end tooling"</CodeValues>);</>,
            <><Tab number={1} />&#125;</>,
            <br/>,
            <><Tab number={1}/><SingleComment>Testing practices</SingleComment></>,
            <><Tab number={1}/><CodeKeyWords>private static void</CodeKeyWords> ShowTesting()</>,
            <><Tab number={1} />&#123;</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"Testing:")</CodeValues>);</>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"-Unit testing with xUnit"</CodeValues>);</>,
            <><Tab number={1} />&#125;</>,
            <br/>,

            <><Tab number={1} /><SingleComment>Filling knowledge gaps and improving confidence</SingleComment></>,
            <><Tab number={1} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- React (advanced patterns)"</CodeValues>);</>,
            <><Tab number={1} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- Vite (configuration and optimization)"</CodeValues>);</>,
            <><Tab number={1} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- CI/CD fundamentals"</CodeValues>);</>,
            <><Tab number={1} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"- Clean Architecture & Domain-Driven Design in .NET")</CodeValues>;</>,
            <><Tab number={1} />&#125;</>,
            <>&#125;</>
        ]} />
    );
    }

    return(
        <NumberedCodeBloc children={[
            <span className="text-line hint-text">Tip: switch between views to explore different perspectives.</span>,
            <br/>,
            <span className="line-title">
            Overview of my technical skill set
            </span>,
            <br/>,
            <span className="text-line">---------------</span>,
            <br/>,
            <span className="line-subtitle">Languages and Frameworks:</span>,
            <ul className="text-line line-list">
                <li>C# (.NET, ASP.NET Core)</li>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Java (not used recently, but familiar with core concepts)</li>
                <li>Python (basic level, mainly for learning and scripting)</li>
            </ul>,
            <br/>,

            <span className="line-subtitle">Databases:</span>,
            <ul className="text-line line-list">
                <li>SQL Server</li>
                <li>MongoDB (Atlas and local)</li>
                <li>Redis (Azure Cache for Redis)</li>
                <li>MariaDB</li>
                <li>SQLite</li>
            </ul>,
            <br/>,

            <span className="line-subtitle">Tools & Technologies:</span>,
            <ul className="text-line line-list">
                <li>Git & GitHub for version control</li>
                <li>Visual Studio, VS Code, NetBeans</li>
                <li>Entity Framework Core and LINQ</li>
                <li>REST API design and integration</li>
                <li>API testing and documentation with Postman and Swagger</li>
                <li>Vite for modern front-end tooling</li>
            </ul>,
            <br/>,
            <span className="line-subtitle">Testing:</span>,
            <ul className="text-line line-list"><li>Unit testing with xUnit</li></ul>,
            <br/>,

            <span className="line-subtitle">Currently Learning:</span>,
            <ul className="text-line line-list">
                <li>React (advanced patterns)</li>
                <li>Vite (configuration and optimization)</li>
                <li>CI/CD fundamentals</li>
                <li>Clean Architecture & Domain-Driven Design in .NET</li>
            </ul>,
            <br/>,
            <span className="text-line">---------------</span>,
            <br/>
        ]} />
    );
}