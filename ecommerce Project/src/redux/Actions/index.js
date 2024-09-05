



let nextId=1;
export const addTodo=(content)=>{
    return {
type:"AddTodo",
payload:{
    id:++nextId,
    content
}

    }
} 
// export const deleteTodo=()=>{
//     return {
// type:deleteTodo,
//     }
// }