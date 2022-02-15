const removeItemAction = (id) => {
    return{
        type: "REMOVE_ITEM",
        payload:id,
    }
}
export default removeItemAction;