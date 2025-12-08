import {NumberedCodeBloc, CodeKeyWords, CodeValues, ClassName, Tab, SingleComment} from "../jointLayoutComponents/CodeTokens";

export default function Contact (){
    return (
        <NumberedCodeBloc children={[
            <><CodeKeyWords>using</CodeKeyWords> Human.Interaction;</>,
            <><CodeKeyWords>using</CodeKeyWords> GitHub.Connections;</>,
            <><CodeKeyWords>using</CodeKeyWords> Async.Communication;</>,
            <><CodeKeyWords>using</CodeKeyWords> OpenPorts._443;</>,
            <><CodeKeyWords>using</CodeKeyWords> Networking.Protocols;</>,
            <br/>,
            <><CodeKeyWords>namespace</CodeKeyWords> MarinaDotNet;</>,
            <br />,
            <><CodeKeyWords>public static class</CodeKeyWords> Contact</>,
            <>&#123;</>,
            <><Tab number={2} /><CodeKeyWords>public static void</CodeKeyWords> <ClassName>ShowContactInfo</ClassName>()</>,
            <><Tab number={1} />&#123;</>,
            <><Tab number={2} /><SingleComment>Let's Connect!</SingleComment></>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"--------------------------"</CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"Email : <a href="mailto:msichova@outlook.com">msichova@outlook.com"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"GitHub : <a href="https://github.com/MarinaDotNet">MarinaDotNet"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"LinkedIn : <a href="https://www.linkedin.com/in/marina-sichova-333599281?originalSubdomain=au">Marina Sichova"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"WhatsApp : <a href="https://wa.me/+61433881789">Marina Sichova"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"Static Portfolio : <a href="https://marinadotnet.github.io/static">MarinaDotNet.github.io/static"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"React-Vite Portfolio : <a href="https://marinadotnet.github.io">MarinaDotNet.github.io"</a></CodeValues>);</>,
            <br />,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"--------------------------"</CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><SingleComment>Feel free to reach out for collaborations, questions, or just to say hi.</SingleComment></>,
            <><Tab number={1} />&#125;</>,
            <>&#125;</>

        ]} />
    );
}