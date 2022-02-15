const addItemAction = (item) => {
    return{
        type:"ADD_LIST",
        payload:item,
    }
}
export default addItemAction;