import React from 'react';
import IncomeInput from './IncomeInput';
import ExpenseInput from './ExpenseInput';
import TitleForm from'./TitleForm';



const EditForm = ( { data, type, handleTitleChange, handleIncomeChange, handleExpenseChange })  => {
    
        return(
            
            <div className='EditForm'>
                { data ?
                   
                    <div className='edit-form-wrapper' >
                        <h2 className='edit-form-item'>Edit Your {type} Below</h2>
                        
                        <TitleForm title={data.title} handleTitleChange={handleTitleChange} />
                        <h3>Incomes</h3>
                        <form>
                            {data.incomes.map( (income) => {
                                console.log('data', data)
                                return <IncomeInput income={income.attributes} handleIncomeChange={handleIncomeChange} key={income.id} id={income.id} />
                            }
                            )}
                        </form>
                        {data.total_income ?
                        <p>Total Income: ${data.total_income}</p> :
                        ''
                        }
                        <h3>Expenses</h3>
                        <form>
                            { data.expenses.map( (expense) => {
                                //console.log('data:', data, 'expenses:', data.expenses, 'expense:', expense)
                                if(expense!==undefined){
                                    return <ExpenseInput expense={expense.attributes} handleChange={handleExpenseChange} key={expense.id} id={expense.id} />
                                }else{
                                    return ''
                                }
                            })}
                        </form>  
                        {data.total_expenditure ?
                        <p> Total Expense: ${data.total_expenditure} </p> :
                        ''
                        }
                        {data.total_difference ?
                        <p> Total Difference: ${data.total_difference} </p> :
                        '' 
                        }
                    </div>
                :
                "" }
            </div>   
        )
}

export default EditForm