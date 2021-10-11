import React from 'react';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultContainer from '../ResultContainer/ResultContainer';
import './App.css'


const name = require('@rstacruz/startup-name-generator')


class App extends React.Component {

    state ={
        headerText :"Name It !",
        headerExpanded:true,
        suggestedNames:[]
    }

    handleInputChange = (inputText) => {
        
        this.setState({headerExpanded: !inputText,
        suggestedNames: inputText ?name(inputText):[]})
    }
    render() {
        
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded}
                 headTitle={this.state.headerText} /> 
                <SearchBox handleInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames= {this.state.suggestedNames} />

            </div>
        )
    }
}

// function App() {
//     return <h1>Hello this is My functional Component</h1>;
// }

export default App;
