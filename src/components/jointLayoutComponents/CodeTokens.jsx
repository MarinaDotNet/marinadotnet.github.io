import {Children} from 'react';

/**
 * A wrapper component that displays its children as lines of code, with each line numbered.
 * Line breaks are handled by detecting `<br />` elements.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The code elements to display, typically formatted JSX.
 * @returns {JSX.Element}
 */
function NumberedCodeBloc({children}){
    const childrenArray = Children.toArray(children);

    let lineNumber = 0;

    return(
        <div className={"text-code reverse-hanging-indent"}>
            {childrenArray.map((child, index) => {
                if(typeof child.type === "string" && child.type === "br"){
                    return <br key={index} />;
                }

                return (
                    <div key={index}>
                        <span className="text-code-rows">
                            {(++lineNumber).toString().padStart(2, '0')}
                        </span>
                        {child}
                    </div>
                );
            })}
        </div>
    );
};

/**
 * Styles text to indicate it is a programming keyword.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The keyword(s) to highlight.
 * @returns {JSX.Element}
 */
function CodeKeyWords({children}){
    return(
        <span className="text-code-keyword">
            {children}
        </span>
    );
};

/**
 * Styles text to indicate it is a value in code (e.g., strings, numbers).
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The value(s) to highlight.
 * @returns {JSX.Element}
 */
function CodeValues({children}){
    return(
        <span className="text-code-value">
            {children}
        </span>
    );
};

/**
 * Styles text to represent class names in code.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The class name(s) to highlight.
 * @returns {JSX.Element}
 */
function ClassName({children}){
    return(
        <span className="text-code-class">
            {children}
        </span>
    );
};

/**
 * Styles text to represent class names in code.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The class name(s) to highlight.
 * @returns {JSX.Element}
 */
function CodeIdentifier({children}){
    return(
        <span className="text-code-identifier">
            {children}
        </span>
    );
};

/**
 * Inserts a specific number of non-breaking spaces, used for indentation in code.
 *
 * @param {object} props
 * @param {number} props.number - The number of spaces to insert.
 * @returns {JSX.Element}
 */
function Tab({number}){
    return(
        <>
        {Array.from({length: number}).map((_, i) => (
            <span key={i}>&nbsp;</span>
        ))}
        </>
    );
};

/**
 * Displays code-style comments in a styled format.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The comment content.
 * @returns {JSX.Element}
 */
function Comment({children}){
    const text = typeof children === "string"
        ? children
        : Array.isArray(children)
        ? children.join("")
        : "";
        
    const lines = text.split(/\n|,/).map(line => line.trim()).filter(Boolean);
    return(
        <span className="text-comment">
            <span>&nbsp;&nbsp;&nbsp;/// &lt;summary&gt;<br/></span>
            {lines.map((line, index) => (
                <span key={index}>/// {line}<br/></span>
            ))}
            <span>/// &lt;/summary&gt;</span>
        </span>
    );
};

/**
 * Displays code-style single line comments in a styled format.
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - The comment conntent.
 * @returns {JSX.Element}
 */
function SingleComment({children}){
    return(
        <>
        <span className="text-comment">
            // {children}
        </span>
        </>
    );
};

export {NumberedCodeBloc, CodeKeyWords, CodeValues, ClassName, Tab, Comment, SingleComment, CodeIdentifier};