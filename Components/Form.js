

import AddUserForm from './AddUserForm';
import UpdateUserForm from './UpdateUserForm';
const Form = () => {
   const flag = false ;
    return (
        <div>
           {flag ? <AddUserForm/> : <UpdateUserForm/>}
        </div>
    );
};

export default Form;