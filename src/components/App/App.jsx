import React from 'react';
import { useState } from 'react';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultContainer from '../ResultContainer/ResultContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

const App = () => {
    const [headerText, setHeaderText] = useState('NameIt !');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText);
        setSuggestedNames(inputText ? name(inputText) : []);
    };
    return (
        <div>
            <Header headerExpanded={headerExpanded} headTitle={headerText} />
            <SearchBox handleInputChange={handleInputChange} />
            <ResultContainer suggestedNames={suggestedNames} />
        </div>
    );
};

// class App extends React.Component {
//     state = {
//         headerExpanded: true,
//         suggestedNames: [],
//     };

//     handleInputChange = (inputText) => {
//         this.setState({
//             headerExpanded: !inputText,
//             suggestedNames: inputText ? name(inputText) : [],
//         });
//     };
//     render() {
//         return (
//             <div>
//                 <Header
//                     headerExpanded={this.state.headerExpanded}
//                     headTitle={this.state.headerText}
//                 />
//                 <SearchBox handleInputChange={this.handleInputChange} />
//                 <ResultContainer suggestedNames={this.state.suggestedNames} />
//             </div>
//         );
//     }
// }

// // function App() {
// //     return <h1>Hello this is My functional Component</h1>;
// // }

export default App;
