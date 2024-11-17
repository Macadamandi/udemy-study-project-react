import './employees-list-item.css'

function EmployeersListItem (props) {
      const {name, salary, onDelete, onToogleRaise, onToogleAward, award, raise} = props;
      let classList = "list-group-item d-flex justify-content-between";
      if (award) {
         classList += ' increase';
      }
      if (raise) {
         classList += ' like';
      }

      return (
         <li className={classList}>
            <span className="list-group-item-label" onClick={onToogleRaise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
               <button type="button"
                  className="btn-cookie btn-sm"
                  onClick={onToogleAward}>
                  <i className="fas fa-cookie"></i>
               </button>

               <button type="button"
                  className="btn-trash btn-sm"
                  onClick={onDelete}>
                  <i className="fas fa-trash"></i>
               </button>
               <i className="fas fa-star"></i>
            </div>
         </li>
      );
}

export default EmployeersListItem;