const removeBudget = (id) => {
    return {
        type: 'REMOVE_BUDGET',
        id: id
    }
}

const fetchDeleteBudget = (id) => {
    return (dispatch) => {
        fetch( `http://localhost:3001/budgets/${id}`, {
                credentials: 'include',
                method: 'delete'           
        })
        .then( resp => resp.json())
        .then( myjson => {
            if(myjson.error){
                console.error(myjson.error)
            }else {
                console.log('myjson:', myjson)
                    //remove from budgets in store
                    //redirect to.. home
                dispatch(removeBudget(id))
                    //this.props.history.push('/')
            }
        })
        .catch(console.log)
    }
}


export default fetchDeleteBudget;