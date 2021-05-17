import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext';

const ExpenseItem = props => {
    const {
      id,
      name,
      cost
    } = props
    
    const { dispatch } = useContext(AppContext);
    
    const handleDelete = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
    }
    return (
        <li className='list-group-item 
                    d-flex justify-content-between 
                    align-items-center'>
            {name} 
            <div>  
                <span>
                    $ {cost} 
                </span>
              <TiDelete size='1.5em' style={{cursor: 'pointer'}} onClick={handleDelete}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem