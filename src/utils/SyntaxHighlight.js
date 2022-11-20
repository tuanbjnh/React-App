import PropTypes from 'prop-types';

// third-party
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Light } from 'react-syntax-highlighter/';

// ==============================|| CODE HIGHLIGHTER ||============================== //

export default function SyntaxHighlight({ children, ...others }) {
    return (
        <SyntaxHighlighter language="javacript" showLineNumbers style={Light} {...others}>
            {children}
        </SyntaxHighlighter>
    );
}

SyntaxHighlight.propTypes = {
    children: PropTypes.node
};
