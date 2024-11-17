import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    setFilter = (e) => {
        this.props.setFilter(e.target.name);
        this.setState(({filter}) => ({
            filter: e.target.name
        }));
    }

    render() {
        let buttons = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'raise', label: 'На повышение'},
            {name: 'salaryAbove1000', label: 'З/П больше 1000$'},
        ];


        buttons = buttons.map(button => {
            let clazz = this.props.filter === button.name ? 'btn-light' : 'btn-outline-light';
            return (
                <button className={`btn ${clazz}`} 
                type="button"
                name={button.name}
                key={button.name}
                onClick={this.setFilter}>
                    {button.label}
                </button>
            );
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default AppFilter;
