import {NumberedCodeBloc, CodeKeyWords, CodeValues, ClassName, Tab, CodeIdentifier, SingleComment} from "../jointLayoutComponents/CodeTokens";

export default function Home({ viewMode}){
    if(viewMode === 'developer'){
        return(
         <NumberedCodeBloc children={[
            <><CodeKeyWords>using</CodeKeyWords> CleanCode;</>,
            <><CodeKeyWords>using</CodeKeyWords> SoftwareArchitecture.SOLID;</>,
            <><CodeKeyWords>using</CodeKeyWords> DevMindset.Focus;</>,
            <br/>,
            <><SingleComment>Tip: switch between views to explore different perspectives.</SingleComment></>,
            <><CodeKeyWords>namespace</CodeKeyWords> <CodeIdentifier>NetByMarina</CodeIdentifier>;</>,
            <br />,
            <><CodeKeyWords>class</CodeKeyWords> <CodeIdentifier>Program</CodeIdentifier></>,
            <>&#123;</>,
            <><Tab number={1} /><CodeKeyWords>static void</CodeKeyWords> <CodeIdentifier>Main</CodeIdentifier>(<CodeKeyWords>string</CodeKeyWords>[] args)</>,
            <><Tab number={1} />&#123;</>,
            <br/>,
            <><Tab number={2} /> <CodeIdentifier>MessageBox</CodeIdentifier>.<CodeIdentifier>Show</CodeIdentifier>(<CodeValues>"Welcome to my Portfolio Web Pages."</CodeValues>);</>,
            <br/>,
            <><Tab number={2} /> <CodeKeyWords>var</CodeKeyWords> developer = <CodeKeyWords> new </CodeKeyWords>Developer()</>,
            <><Tab number={1} /> &#123;</>,
            <><Tab number={3} />Name = <CodeValues>"Marina Sichova"</CodeValues>,</>,
            <br />,
            <><Tab number={3} />Role = <CodeValues>"Junior Web/Software Developer"</CodeValues>,</>,
            <br/>,
            <><Tab number={3} />Focus = <CodeValues>"Backend development with ASP.NET Core and RESTful APIs"</CodeValues>,</>,
            <br/>,
            <ul className="code-list"><Tab number={3} />Traits = [
                <li><CodeValues>"Backend-oriented"</CodeValues>,</li>
                <li><CodeValues>"Problem Solver"</CodeValues>,</li>
                <li><CodeValues>"Detail-oriented"</CodeValues>,</li>
                <li><CodeValues>"Data-driven"</CodeValues>,</li>
                <li><CodeValues>"Lifelong Learner"</CodeValues></li>
                ],
            </ul>,
            <br />,
            <ul className="code-list"><Tab number={3} />WhatIBuild = [
                <li><CodeValues>"RESTful APIs"</CodeValues>,</li>
                <li><CodeValues>"Authentication and Authorization"</CodeValues>,</li>
                <li><CodeValues>"CRUD-based systems"</CodeValues>,</li>
                <li><CodeValues>"Clean and maintable architectures"</CodeValues></li>
                ],
            </ul>,
            <br />,
            <ul className="code-list"><Tab number={3} />Stack = [
                <li><CodeValues>"C#"</CodeValues>, <CodeValues>"ASP.NET Core"</CodeValues>, <CodeValues>"Entity Framework Core"</CodeValues>,</li>
                <li> <CodeValues>"SQL/NoSQL"</CodeValues>, <CodeValues>"React"</CodeValues>, <CodeValues>"GIT"</CodeValues></li>
                ],
            </ul>,
            <br />,
            <ul className="code-list"><Tab number={3} />Certifications = [
                <li><CodeValues>"Information Technology (Advanced Programming)"</CodeValues>,</li>
                <li><CodeValues>"Diploma of Business"</CodeValues></li>
                ],
            </ul>,
            <br />,
            <><Tab number={3} />Experience = <CodeKeyWords>new</CodeKeyWords> <ClassName>ExperienceDetails()</ClassName>
                <br />
                &#123;
                <br/>
                <Tab number={1} />Company = <CodeValues><a href="https://www.dataannotation.tech/" title="Visit dataannotation.tech">"Data Annotation Tech"</a></CodeValues>,
                <br/>
                <Tab number={1} />Role = <CodeValues>"Web Developer"</CodeValues>,
                <br/>
                <Tab number={1} />Since = <CodeValues>"May 2024"</CodeValues>
                <br/>
                &#125;,
            </>,
            <br />,
            <><Tab number={3} />Passion = <CodeValues>"Building reliable, maintable software with .NET and continuously growing as an engineer."</CodeValues>,</>,
            <br/>,
            <><Tab number={3} />IsOpenToWork = <CodeKeyWords>true</CodeKeyWords></>,
            <><Tab number={2} />&#125;</>,
            <br />,
            <><Tab number={2} />developer.<CodeIdentifier>Introduce</CodeIdentifier>();</>,
            <><Tab number={2} />developer.<CodeIdentifier>BuildSomethingAwesome</CodeIdentifier>();</>,
            <><Tab number={1} />&#125;</>,
            <>&#125;</>
            ]} />
        );
    }

    return(
        <NumberedCodeBloc children={[
                <span className="text-line hint-text">
                    Tip: switch between views to explore different perspectives.
                </span>,
                <br/>,
                <span className="line-title">
                    Welcome to my Portfolio Web Pages.
                </span>,
                <br/>,
                <b className="text-line">Name</b>,
                <span className="text-line">
                    Marina Sichova     
                </span>,
                <br/>,

                <b className="text-line">Role</b>,
                <span className="text-line">
                    Junior Web/Software Developer
                </span>,
                <br/>,

                <b className="text-line">Focus</b>,
                <span className="text-line">
                    Backend development with ASP.NET Core and RESTful APIs
                </span>,
                <br/>,

                <ul className="text-line line-list">
                    <b>Traits:</b>
                    <li>Backend-oriented</li>
                    <li>Problem Solver</li>
                    <li>Detail-oriented</li>
                    <li>Data-driven</li>
                    <li>Lifelong Learner</li>
                </ul>,
                <br/>,

                <ul className="text-line line-list">
                    <b>What I Build:</b>
                    <li>RESTful APIs</li>
                    <li>Authentication and Authorization</li>
                    <li>CRUD-based systems</li>
                    <li>Clean and maintable architectures</li>
                </ul>,
                <br/>,

                <ul className="text-line line-list">
                    <b>Tech Stack:</b>
                    <li>"C#", "ASP.NET Core", "Entity Framework Core",</li>
                    <li>"SQL/NoSQL", "React", "GIT"</li>
                </ul>,
                <br/>,

                <ul className="text-line line-list">
                    <b>Certifications:</b>
                    <li>Information Technology (Advanced Programming)</li>
                    <li>Diploma of Business</li>
                </ul>,
                <br/>,

                <b className="text-line">Current Experience</b>,
                <span className="text-line">Web Developer at DataAnnotation Tech (since May 2024)</span>,
                <br/>,

                <b className="text-line">Passion</b>,
                <span className="text-line">I am passionate about building reliable and maintainable software with .NET while continuously improving my engineering skills.</span>, 
        ]}/>
    )
    
}