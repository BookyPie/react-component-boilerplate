import React from 'react';
import ReactDOM from 'react-dom';
import UC from '../src/index.js';

class TestApp extends React.Component {
    render() {
        return (
            <UC />
        );
    }
}

const rootElement = document.getElementById('root');    
ReactDOM.render(<TestApp />, rootElement);
