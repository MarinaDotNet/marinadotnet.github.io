import {NumberedCodeBloc, CodeKeyWords, CodeValues, ClassName, Tab, SingleComment, CodeIdentifier, Comment} from "../jointLayoutComponents/CodeTokens";

export default function Contact ({viewMode}){
    if(viewMode === 'developer'){
        return (
            <NumberedCodeBloc children={[
            <><CodeKeyWords>using</CodeKeyWords> Human.Interaction;</>,
            <><CodeKeyWords>using</CodeKeyWords> GitHub.Connections;</>,
            <><CodeKeyWords>using</CodeKeyWords> Async.Communication;</>,
            <><CodeKeyWords>using</CodeKeyWords> OpenPorts._443;</>,
            <><CodeKeyWords>using</CodeKeyWords> Networking.Protocols;</>,
            <br/>,
            <><CodeKeyWords>namespace</CodeKeyWords> <CodeIdentifier>NetByMarina</CodeIdentifier>;</>,
            <br />,
            <Comment>
                My contact info:,
                Email: <a className="link-in-comment" href="mailto:msichova@outlook.com" title="Send email to me at outlook">msichova@outlook.com</a>,
                &nbsp;,
                WhatsApp: <a className="link-in-comment" href="https://wa.me/+61433881789" target="_blank" title="WhatsApp me">@NetByMarina</a>,
                &nbsp;,
                GitHub: <a className="link-in-comment" href="https://github.com/MarinaDotNet" target="_blank" title="Visit at GitHub">MarinaDotNet"</a>,
                For more contact info/variants please look below.
            </Comment>,
            <><CodeKeyWords>public class</CodeKeyWords> Contact</>,
            <>&#123;</>,
            <><Tab number={1} /><CodeKeyWords>public void</CodeKeyWords> <ClassName>ShowContactInfo</ClassName>()</>,
            <><Tab number={1} />&#123;</>,
            <><Tab number={2} /><CodeIdentifier>MessageBox</CodeIdentifier>.<CodeIdentifier>Show</CodeIdentifier>(<CodeValues>"Let's connect."</CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"----------"</CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"Email outlook: <a title="Send email to me at outlook" href="mailto:msichova@outlook.com" target="_blank">msichova@outlook.com"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"Email gmail: <a title="Send email to me at gmail" href="mailto:msichova.net@gmail.com" target="_blank">msichova.net@gmail.com"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"GitHub : <a title="Visit at GitHub" href="https://github.com/MarinaDotNet" target="_blank">MarinaDotNet"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"LinkedIn : <a title="Visit at LinkedIn" href="https://www.linkedin.com/in/marina-sichova-333599281?originalSubdomain=au" target="_blank">Marina Sichova"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"WhatsApp : <a title="WhatsApp me" href="https://wa.me/+61433881789" target="_blank">@NetByMarina"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"Facebook : <a title="Visit at Facebook" href="https://www.facebook.com/msichova/" target="_blank">Marina Sichova"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"Static Portfolio : <a title="Look at my Static Portfolio" href="https://netbymarina.dev/static" target="_blank">NetByMarina.dev/static"</a></CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"React-Vite Portfolio : <a title="Look at my React-Vite Portfolio" href="https://netbymarina.dev" target="_blank">NetByMarina.dev"</a></CodeValues>);</>,
            <br />,
            <><Tab number={2} /><ClassName>Console</ClassName>.WriteLine(<CodeValues>"----------"</CodeValues>);</>,
            <br/>,
            <><Tab number={2} /><SingleComment>Open to collaboration, questions, and new opportunities.</SingleComment></>,
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
                Let's connect.
            </span>,
            <br/>,
            <span className="text-line">---------------</span>,
            <br/>,
            <ul className="text-line line-list">
                <span className="line-subtitle">Emails</span>
                <li>Outlook: <a className="line-link" href="mailto:msichova@outlook.com" target="_blank" title="Send email to me at outlook">msichova@outlook.com</a></li>
                <li>Gmail: <a className="line-link" href="mailto:msichova.net@gmail.com" target="_blank" title="Send email to me at gmail">msichova.net@gmail.com</a></li>
            </ul>,
            <br/>,
            <ul className="text-line line-list">
                <span className="line-subtitle">GitHub</span>
                <li><a className="line-link" href="https://github.com/MarinaDotNet" title="Visit at GitHub" target="_blank">MarinaDotNet</a></li>
            </ul>,
            <br/>,
            <ul className="text-line line-list">
                <span className="line-subtitle">LinkedIn</span>
                <li><a className="line-link" href="https://www.linkedin.com/in/marina-sichova-333599281?originalSubdomain=au" title="Visit at LinkedIn" target="_blank">Marina Sichova</a></li>
            </ul>,
            <br/>,
            <ul className="text-line line-list">
                <span className="line-subtitle">WhatsApp</span>
                <li><a className="line-link" href="https://wa.me/+61433881789" title="WhatsApp me" target="_blank">@NetByMarina</a></li>
            </ul>,
            <br/>,
            <ul className="text-line line-list">
                <span className="line-subtitle">Facebook</span>
                <li><a className="line-link" href="https://www.facebook.com/msichova/" title="Visit at Facebook" target="_blank">Marina Sichova</a></li>
            </ul>,
            <br/>,
            <ul className="text-line line-list">
                <span className="line-subtitle">Static Portfolio</span>
                <li><a className="line-link" href="https://netbymarina.dev/static/" title="Look at my Static Portfolio" target="_blank">https://netbymarina.dev/static/</a></li>
            </ul>,
            <br/>,
            <ul className="text-line line-list">
                <span className="line-subtitle">React-Vite Portfolio</span>
                <li><a className="line-link" href="https://netbymarina.dev/" title="Look at my React-Vite Portfolio" target="_blank">https://netbymarina.dev/</a></li>
            </ul>,
            <br/>,
            <span className="text-line">---------------</span>,
            <br/>,
            <span className="text-line">Open to collaboration, questions, and new opportunities.</span>
        ]}/>
    );
    
}