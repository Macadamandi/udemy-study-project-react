import EmployeersAddForm from './employeers-add-form';

export default {
   title: 'EmployeersAddForm Component',
   component: EmployeersAddForm
};

export const EmployeersAddFormBaseExample = () => {
   const handleAddItem = (newItem) => {
      console.log('Новый сотрудник:', newItem);
   };

   return <EmployeersAddForm onAdd={handleAddItem} />;
};
