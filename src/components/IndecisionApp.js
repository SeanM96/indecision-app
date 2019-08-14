import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options:[],
        selectedOption: undefined
    };

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handlePick = () =>{
        const index = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({ selectedOption: this.state.options[index]}));
    }

    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined}));
    }

    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    componentDidMount() {
        try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        options ? this.setState(() => ({ options: options})) : localStorage.setItem('options', '{}');
    }
    catch (e) {
        console.log(e);
    }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                        options={this.state.options}
                        handleDeleteOption={this.handleDeleteOption}
                        handleRemoveAll={this.handleRemoveAll}
                        />
                        <AddOption
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                 handleCloseModal = { this.handleCloseModal }
                 selectedOption = { this.state.selectedOption }/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}
