import {NumberedCodeBloc, CodeKeyWords, CodeValues, ClassName, Tab, Comment, CodeIdentifier, SingleComment} from "../jointLayoutComponents/CodeTokens";

export default function AboutMe({viewMode}){

    if(viewMode === "developer"){
        return <NumberedCodeBloc children = {[
            <><CodeKeyWords>using</CodeKeyWords> Creativity;</>,
            <><CodeKeyWords>using</CodeKeyWords> Knowledges;</>,
            <><CodeKeyWords>using</CodeKeyWords> Story.Context;</>,
            <><CodeKeyWords>using</CodeKeyWords> Etc.*;</>,
            <br/>,
            <><CodeKeyWords>namespace</CodeKeyWords> <CodeIdentifier>MarinaDotNet</CodeIdentifier>;</>,
            <br/>,
            <Comment >
                Hi, I'm Marina Sichova - a .NET Developer passionate,
                about building robust & innovative software solutions.
            </Comment>,
            <br/>,
            <><CodeKeyWords>private class</CodeKeyWords> <CodeIdentifier>AboutMe</CodeIdentifier> : <CodeValues>JuniorDeveloper</CodeValues></>,
            <>&#123;</>, 
            <><Tab number={1}/><CodeKeyWords>private</CodeKeyWords> List&lt;<CodeKeyWords>string</CodeKeyWords>&gt; Personality =&gt;</>,
            <><Tab number={1}/>[</>,
            <><Tab number={2}/><CodeValues>"- Focused on creating robust and innovative software solutions."</CodeValues>,</>,
            <><Tab number={2}/><CodeValues>"- Strong passion for coding and finding effective development approaches."</CodeValues></>,
            <><Tab number={1}/>];</>,
            <br/>,
            <><Tab number={1}/><CodeKeyWords>private</CodeKeyWords> List&lt;<CodeKeyWords>string</CodeKeyWords>&gt; ProgrammingLanguage =&gt;</>,
            <><Tab number={1}/>[</>,
            <><Tab number={2}/>
                <CodeValues>"- C#"</CodeValues>, 
                <CodeValues>"- SQL"</CodeValues>, 
                <CodeValues>"- JavaScript"</CodeValues>, 
                <CodeValues>"- Java"</CodeValues>, 
                <CodeValues>"- Python"</CodeValues>
            </>,
            <><Tab number={1}/>];</>,
            <br/>,
            <><Tab number={1}/><CodeKeyWords>private</CodeKeyWords> List&lt;<CodeKeyWords>string</CodeKeyWords>&gt; Technology =&gt;</>,
            <ul className="code-list"><Tab number={1}/>[
                <li><CodeValues>"- Databases: NoSQL and SQL"</CodeValues>,</li>  
                <li><CodeValues>"- Version Control: Git, GitHub"</CodeValues>,</li> 
                <li><CodeValues>"- IDEs & Code Editors: Visual Studio, Visual Studio Code, NetBeans"</CodeValues>,</li>
                <li><CodeValues>"- Backend & Data Access: Entity Framework Core, LINQ"</CodeValues>,</li>
                <li><CodeValues>"- API Development: RESTful API design and integration"</CodeValues>,</li>
                <li><CodeValues>"- API Testing & Documentation: Postman, Swagger (OpenAPI)"</CodeValues>,</li>
                <li><CodeValues>"- Frontend Tooling: Vite"</CodeValues></li>
            </ul>,
            <><Tab number={1}/>];</>,
            <br/>,
            <><Tab number={1}/><CodeKeyWords>private</CodeKeyWords> List&lt;<CodeKeyWords>string</CodeKeyWords>&gt; CurrentlyLearning =&gt;</>,
            <ul className="code-list"><Tab number={1}/>[
                <li><CodeValues>"- React (advanced patterns)"</CodeValues>,</li>
                <li><CodeValues>"- Vite (configuration and optimization)"</CodeValues>,</li>   
                <li><CodeValues>"- CI/CD fundamentals"</CodeValues>,</li>
                <li><CodeValues>"- Clean Architecture & Domain-Driven Design in .NET"</CodeValues></li>     
            </ul>,
            <><Tab number={1}/>];</>,
            <br/>,
            <><Tab number={1}/><CodeKeyWords>private</CodeKeyWords> List&lt;<CodeKeyWords>string</CodeKeyWords>&gt; FocusAreas =&gt;</>,
            <ul className="code-list"><Tab number={1}/>[
                <li><CodeValues>"- Building RESTful APIs"</CodeValues>,</li> 
                <li><CodeValues>"- Web and desktop applications"</CodeValues>,</li>    
                <li><CodeValues>"- Web services with .NET and ASP.NET Core"</CodeValues>,</li>
            </ul>,
            <><Tab number={1}/>];</>,
            <br/>,
            <><Tab number={1}/><CodeKeyWords>private</CodeKeyWords> <ClassName>Uri</ClassName> DownloadMyResume =&gt; <CodeKeyWords>new</CodeKeyWords>(<CodeValues>"<a href="https://raw.githubusercontent.com/MarinaDotNet/marinadotnet.github.io/main/static/files/cv.pdf" className="in-active-link">CV in PDF</a>"</CodeValues>);</>,
            <br/>,
            <><Tab number={1}/><CodeKeyWords>private</CodeKeyWords> <ClassName>Uri</ClassName> MyStaticPortfolio =&gt; <CodeKeyWords>new</CodeKeyWords>(<CodeValues>"<a href="https://marinadotnet.github.io/static">Static Portfolio</a>"</CodeValues>);</>,
            <br/>,
            <><Tab number={1}/><CodeKeyWords>private</CodeKeyWords> <ClassName>Uri</ClassName>[] Contact =&gt;</>,
            <br/>,
            <><Tab number={1}/>[</>,
            <><Tab number={2}/><CodeKeyWords>new</CodeKeyWords>(<CodeValues>"<a href="mailto:msichova@outlook.com">about:Email</a>"</CodeValues>),</>,
            <><Tab number={2}/><CodeKeyWords>new</CodeKeyWords>(<CodeValues>"<a href="https://github.com/MarinaDotNet">about:GitHub</a>"</CodeValues>),</>,
            <><Tab number={2}/><CodeKeyWords>new</CodeKeyWords>(<CodeValues>"<a href="https://www.linkedin.com/in/marina-sichova-333599281?originalSubdomain=au">about:LinkedIn</a>"</CodeValues>),</>,
            <><Tab number={2}/><CodeKeyWords>new</CodeKeyWords>(<CodeValues>"<a href="https://wa.me/+61433881789">about:WhatsApp</a>"</CodeValues>),</>,
            <><Tab number={1}/>];</>,
            <br/>,
            <><Tab number={1}/><CodeKeyWords>private static void</CodeKeyWords> <CodeIdentifier>Display</CodeIdentifier>()</>,
            <><Tab number={1}/>&#123;</>,
            <><Tab number={2}/><CodeIdentifier>MessageBox</CodeIdentifier>.<CodeIdentifier>Show</CodeIdentifier>(<CodeValues>"A little bit about me"</CodeValues>);</>,
            <br/>,
            <><Tab number={2}/><ClassName>Console</ClassName>.WriteLine(<CodeValues>"----------"</CodeValues>);</>,
            <br/>,
            <><Tab number={2}/><CodeIdentifier>Personality</CodeIdentifier>.ForEach(<CodeKeyWords>value</CodeKeyWords> =&gt; <ClassName>Console</ClassName>.WriteLine(<CodeKeyWords>value</CodeKeyWords>));</>,
            <><Tab number={2}/><CodeIdentifier>ProgrammingLanguage</CodeIdentifier>.ForEach(<CodeKeyWords>value</CodeKeyWords> =&gt; <ClassName>Console</ClassName>.WriteLine(<CodeKeyWords>value</CodeKeyWords>));</>,
            <><Tab number={2}/><CodeIdentifier>Technology</CodeIdentifier>.ForEach(<CodeKeyWords>value</CodeKeyWords> =&gt; <ClassName>Console</ClassName>.WriteLine(<CodeKeyWords>value</CodeKeyWords>));</>,
            <><Tab number={2}/><CodeIdentifier>FocusArea</CodeIdentifier>.ForEach(<CodeKeyWords>value</CodeKeyWords> =&gt; <ClassName>Console</ClassName>.WriteLine(<CodeKeyWords>value</CodeKeyWords>));</>,
            <><Tab number={2}/><CodeIdentifier>CurrentlyLearning</CodeIdentifier>.ForEach(<CodeKeyWords>value</CodeKeyWords> =&gt; <ClassName>Console</ClassName>.WriteLine(<CodeKeyWords>value</CodeKeyWords>));</>,
            <br/>,
            <><Tab number={2}/><ClassName>Console</ClassName>.WriteLine(<CodeValues>"----------"</CodeValues>);</>,
            <><Tab number={2}/><SingleComment>Growth mindset, curiosity, and continuous learning.</SingleComment></>,
            <><Tab number={1}/>&#125;</>,
            <>&#125;</>
        ]} />;
    }
    return(
        <NumberedCodeBloc children =  {[
            <span className="text-line hint-text">Tip: switch between views to explore different perspectives.</span>,
            <br/>,
            <span className="line-title">
                A little bit about me
            </span>,
            <br/>,
            <span className="text-line">---------------</span>,
            <br/>,
            <span className="line-subtitle">Personality</span>,
            <ul className="text-line line-list">
                <li>Focused on creating robust and innovative software solutions.</li>
                <li>Strong passion for coding and finding effective development approaches</li>
            </ul>,
            <br/>,
            <span className="line-subtitle">Programming Languages & Scripting Languages</span>,
            <ul className="text-line line-list">
                <li>C#</li>
                <li>SQL</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
            </ul>,
            <br/>,
            <span className="line-subtitle">Technologies</span>,
            <ul className="text-line line-list">
                <li>Databases: NoSQL and SQL</li>
                <li>Version Control: Git, GitHub</li>
                <li>IDEs & Code Editors: Visual Studio, Visual Studio Code, NetBeans</li>
                <li>Backend & Data Access: Entity Framework Core, LINQ</li>
                <li>API Development: RESTful API design and integration</li>
                <li>API Testing & Documentation: Postman, Swagger (OpenAPI)</li>
                <li>Frontend Tooling: Vite</li>
            </ul>,
            <br/>,
            <span className="line-subtitle">Currently Learning</span>,
            <ul className="text-line line-list">
                <li>React (advanced patterns)</li>
                <li>Vite (configuration and optimization)</li>
                <li>CI/CD fundamentals</li>
                <li>Clean Architecture & Domain-Driven Design in .NET</li>
            </ul>,
            <br/>,
            <span className="line-subtitle">Focus Area</span>,
            <ul className="text-line line-list">
                <li>Building RESTful APIs</li>
                <li>Web and desktop applications</li>
                <li>Web services with .NET and ASP.NET Core</li>
            </ul>,
            <br/>,
            <span className="line-subtitle">Focus Area</span>,
            <ul className="text-line line-list">
                <li>Building RESTful APIs</li>
                <li>Web and desktop applications</li>
                <li>Web services with .NET and ASP.NET Core</li>
            </ul>,
            <br/>,
            <span className="line-subtitle">Links & Contacts</span>,
            <ul className="text-line line-list">
                <li>Resume: <a className="line-link" href="https://raw.githubusercontent.com/MarinaDotNet/marinadotnet.github.io/main/static/files/cv.pdf" title="download CV in PDF">CV in PDF</a></li>
                <li>Static Portfolio: <a className="line-link" href="https://marinadotnet.github.io/static" title="look at my Static Portfolio">Static Portfolio</a></li>
                <li>Email: <a className="line-link" href="mailto:msichova@outlook.com">Send to me an Email</a></li>
                <li>GitHub: <a className="line-link" href="https://github.com/MarinaDotNet">Visit me at GitHub</a></li>
                <li>LinkedIn: <a className="line-link" href="https://www.linkedin.com/in/marina-sichova-333599281?originalSubdomain=au">Visit me at LinkedIn</a></li>
                <li>WhatsApp: <a className="line-link" href="https://wa.me/+61433881789">Contact via WhatsApp</a></li>
            </ul>,
            <br/>,
            <span className="text-line">---------------</span>,
            <br/>,
            <span className="text-line">Growth mindset, curiosity, and continuous learning define my approach to software development.</span>
        ]} />
    );
}