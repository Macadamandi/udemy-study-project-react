import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeerList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css';


class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { name: 'Jhon C.', salary: 800, award: false, raise: true, id: 1 },
            { name: 'Alex M.', salary: 3000, award: true, raise: false, id: 2 },
            { name: 'Carl W.', salary: 5000, award: false, raise: false, id: 3 },
         ],
         query: '',
         filter: 'all'
      }
      this.maxId = 4;
   }

   deleteItem = (id) => {
      this.setState(({ data }) => {
         return {
            data: data.filter(item => item.id !== id)
         }
      });
   }

   addItem = (name, salary) => {
      const newItem = {
         name,
         salary,
         award: false,
         raise: false,
         id: this.maxId++
      }

      if(newItem.name.length >= 3 && newItem.salary > 0) {
         this.setState(({ data }) => {
            return {
               data: [...data, newItem]
            }
         });
      }
   }

   onToogleAward = (id) => {

      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id === id) {
               return { ...item, award: !item.award }
            }
            return item;
         })
      }))
   }

   onToogleRaise = (id) => {
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id === id) {
               return { ...item, raise: !item.raise }
            }
            return item;
         })
      }))
   }

   onSearch = (data, query) => {
      if(query.length === 0) {
         return data;
      } 

      return data.filter(item => item.name.indexOf(query) > -1 );
   }

   setQuery = (query, activeSearch) => {
      this.setState({query});
   }

   onFilter = (data, filter) => {
      switch(filter) {
         case 'raise':
            return data.filter(item => item.raise === true);
         case 'salaryAbove1000':
            return data.filter(item => item.salary > 1000);
         default:
            return data;
      }
   }

   setFilter = (filter) => {
      this.setState({filter});
   }


   render() {
      const { data, query, filter} = this.state;
      const award = this.state.data.filter(item => item.award).length;
      const countEmployeers = this.state.data.length;

      let showData = this.onSearch(this.onFilter(data, filter), query);

      return (
         <div className="app">
            <AppInfo employeers={countEmployeers} award={award}/>

            <div className="search-panel">
               <SearchPanel setQuery={this.setQuery}/>
               <AppFilter filter={this.state.filter} setFilter={this.setFilter}/>
            </div>

            <EmployeerList
               data={showData}
               onDelete={this.deleteItem}
               onToogleAward={this.onToogleAward}
               onToogleRaise={this.onToogleRaise} />
            <EmployeersAddForm onAdd={this.addItem} />
         </div>
      );
   }
}

export default App;