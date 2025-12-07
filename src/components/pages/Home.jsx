import {NumberedCodeBloc, CodeKeyWords, CodeValues, ClassName, Tab, SingleComment} from "../jointLayoutComponents/CodeTokens";

export default function Home(){
    return(
         <NumberedCodeBloc children={[
            <><CodeKeyWords>using</CodeKeyWords> CleanCode;</>,
            <><CodeKeyWords>using</CodeKeyWords> SoftwareArchitecture.SOLID;</>,
            <><CodeKeyWords>using</CodeKeyWords> DesignPatterns.*;</>,
            <><CodeKeyWords>using</CodeKeyWords> DevMindset.Focus;</>,
            <><CodeKeyWords>using</CodeKeyWords> DevMindset.Growth;</>,
            <br/>,
            <SingleComment>Welcome to my Portfolio Web Pages.</SingleComment>,
            <SingleComment>I'm a Junior Web/Software Developer.</SingleComment>,
            <br />,
            <><CodeKeyWords>namespace</CodeKeyWords> MarinaDotNet;</>,
            <br />,
            <><CodeKeyWords>class</CodeKeyWords> <ClassName>Program</ClassName></>,
            <>&#123;</>,
            <><Tab number={2} /><CodeKeyWords>static void</CodeKeyWords> <ClassName>Main</ClassName>(<CodeKeyWords>string</CodeKeyWords>[] args)</>,
            <><Tab number={2} />&#123;</>,
            <><Tab number={3} /> <CodeKeyWords>var</CodeKeyWords> developer = <CodeKeyWords> new </CodeKeyWords>Developer()</>,
            <><Tab number={3} /> &#123;</>,
            <><Tab number={6} />Name = <CodeValues>"Marina Sichova"</CodeValues>,</>,
            <br />,
            <><Tab number={6} />Traits = [
                <CodeValues>".NET Developer"</CodeValues>,
                <CodeValues>"Backend"</CodeValues>,
                <CodeValues>"Data-Driven"</CodeValues>,
                <CodeValues>"Performance Optimizer"</CodeValues>,
                <CodeValues>"Team Player"</CodeValues>,
                <CodeValues>"Problem Solver"</CodeValues>,
                <CodeValues>"Detail-Oriented"</CodeValues>,
                <CodeValues>"Innovative Thinker"</CodeValues>,
                <CodeValues>"Lifelong Learner"</CodeValues>,
                <CodeValues>"Adaptable"</CodeValues>],
            </>,
            <br />,
            <><Tab number={6} />Passion = <CodeValues> "Building robust, maintainable web and desktop apps with .NET and exploring front-end with React"</CodeValues>,</>,
            <br />,
            <><Tab number={6} />Certifications = [
                <CodeValues>"Information Technology (Advanced Programming)"</CodeValues>,
                <CodeValues>"Diploma of Business"</CodeValues>],
            </>,
            <br />,
            <><Tab number={6} />Stack = [
                <CodeValues>"C#"</CodeValues>,
                <CodeValues>"ASP.NET Core"</CodeValues>,
                <CodeValues>"Entity Framework"</CodeValues>,
                <CodeValues>"SQL"</CodeValues>,
                <CodeValues>"NoSQL"</CodeValues>,
                <CodeValues>"React"</CodeValues>,
                <CodeValues>"GitHub"</CodeValues>,
                <CodeValues>"Unit Testing"</CodeValues>,
                <CodeValues>"Java"</CodeValues>,
                <CodeValues>"Python"</CodeValues>,
                <CodeValues>"JavaScript"</CodeValues>],
            </>,
            <br />,
            <><Tab number={6} />Experience = <CodeKeyWords>new</CodeKeyWords> <ClassName>ExperienceDetails()</ClassName>
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
            <><Tab number={6} />IsOpenToWork = <CodeKeyWords>true</CodeKeyWords></>,
            <><Tab number={4} />&#125;;</>,
            <br />,
            <><Tab number={3} />developer.Introduce();</>,
            <br />,
            <><Tab number={3} />developer.BuildSomethingAwesome();</>,
            <><Tab number={1} />&#125;</>,
            <>&#125;</>
        ]} />
    );
}