import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
   constructor(props) {
      super(props);
      this.state ={
         query: '',
         activeSearch: false
      };
   }

   setQuery = (e) => {
      this.setState(({query}) => ({
         query: e.target.value
      }));
      this.props.setQuery(e.target.value, !this.state.activeSearch);
   }

   render() {
      return (
         <input 
            type='text'
            className='form-control search-input'
            placeholder='Найти сотрудника'
            onChange={this.setQuery}/>
      );
   }
}

export default SearchPanel;