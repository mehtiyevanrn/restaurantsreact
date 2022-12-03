import axios from 'axios'
export const addUser='addUser'
export const addTable='addTable'
export const addFood='addFood'
export const addOrder='addOrder'
export const uptTable='uptTable'

function getAddUser(user){
    return{
        type: addUser,
        payload:{
            data:user
        }
    }
}

export const AddGetUserData=(token)=>{
    return dispatch=>{
        dispatch(getAddUser(token))
    }
}
export const AddUserData=(values)=>{
    return dispatch=>{
       let link='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
       if(values.isUser){
        link='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
       }
       axios.post(link + 'AIzaSyDWpHAvzziVEyMRBo3aOutFiWC7Qirm2Jo',
       {email:values.email,password:values.password,returnSecureToken:true})
       .then(response=>{
        dispatch(getAddUser(response.data.idToken))
       localStorage.setItem("token",response.data.idToken)
       })
    }
}

function getAddTable(table){
    return{
        type: addTable,
        payload:{
            data:table
        }
    }
}

export const AddTableData=(values)=>{
    return dispatch=>{
       axios.post('https://restorant-47c34-default-rtdb.firebaseio.com/table.json',
      values)
       .then(({data})=>{
        let table=[]
        values.id=data.name
        table.push(values)
        dispatch(getAddTable(table))
       
       })
    }
}

export const GetTableData=(values)=>{
    return dispatch=>{
       axios.get('https://restorant-47c34-default-rtdb.firebaseio.com/table.json')
       .then(({data})=>{
        let table=[]
       for(let key in data){
        data[key].id=key
        table.push(data[key])
       }
       dispatch(getAddTable(table))
       })
    }
}


function getAddFood(food){
    return{
        type: addFood,
        payload:{
            data:food
        }
    }
}

export const AddFoodData=(values)=>{
    return dispatch=>{
       axios.post('https://restorant-47c34-default-rtdb.firebaseio.com/food.json',
      values)
       .then(({data})=>{       
       })
    }
}

export const GetFoodData=(values)=>{
    return dispatch=>{
       axios.get('https://restorant-47c34-default-rtdb.firebaseio.com/food.json')
       .then(({data})=>{
        let food=[]
       for(let key in data){
        data[key].id=key
        food.push(data[key])
       }
       dispatch(getAddFood(food))
       })
    }
}

function getAddOrder(order){
    return{
        type: addOrder,
        payload:{
            data:order
        }
    }
}

export const AddOrderData=(values)=>{
    return dispatch=>{
       axios.post('https://restorant-47c34-default-rtdb.firebaseio.com/order.json',
      values)
       .then(({data})=>{
        let order=[]
        values.id=data.name
        order.push(values)
        dispatch(getAddOrder(order))
       
       })
    }
}

export const GetOrderData=()=>{
    return dispatch=>{
       axios.get('https://restorant-47c34-default-rtdb.firebaseio.com/order.json')
       .then(({data})=>{
        let order=[]
       for(let key in data){
        data[key].id=key
        order.push(data[key])
       }
       dispatch(getAddOrder(order))
       })
    }
}

export const UpdateTableData=(values)=>{
    axios.put(`https://restorant-47c34-default-rtdb.firebaseio.com/table/${values.id}.json`,
    values)
     .then(({data})=>{
    
     })
}
