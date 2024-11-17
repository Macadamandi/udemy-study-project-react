import EmployeerListItem from '../employeers-list-item/employeers-list-item';

import './employeers-list.css'

const EmployeerList = ({data, onDelete, onToogleAward, onToogleRaise}) => {
   const elements = data.map(item => {
      const {id, ...itemProps} = item;
      return (
         <EmployeerListItem key={id} {...itemProps} 
         onDelete={() => onDelete(id)}
         onToogleAward={() => onToogleAward(id)}
         onToogleRaise={() => onToogleRaise(id)}/>
      );
   });

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   );
}

export default EmployeerList;