import { useEffect, useRef, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import addItemAction from "../Actions/addItemAction";
import removeItemAction from '../Actions/removeItemAction';


const ToDoList = (props) => {
    const dispatch = useDispatch();
    const listData = useSelector(state  => state.itemlist);

    const InputRef = useRef();

    const [inputItem, setInputItem] = useState('');

    const handleSubmit = () => {
        if(inputItem !== ''){
            dispatch(addItemAction(inputItem));
            setInputItem('');
            InputRef.current.focus();
        }else{
            InputRef.current.focus();
        }
        
    }

    const handleKeyPress = (e) => {      
        if (e.charCode === 13) {
            handleSubmit();
          }
        
    }
    const handleRemove = (id) => {
        dispatch(removeItemAction(id));
        InputRef.current.focus();
    }
    useEffect(() => {
        InputRef.current.focus();
    },[]);
    
    return(
        <div>
            <header id="main-header" className="bg-success text-white p-4 mb-3">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 id="header-title">TO DO LIST</h1>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <input type="text"  className="form-control" id="filter" placeholder="Search Items..." />
                    </div>
                </div>
                </div>
            </header>
            <div className="container">
                <div id="main" className="card card-body">
                    <h2 className="title">Add Items</h2>
                    <div className="flex mb-3">
                    <input ref={InputRef} type="text" onKeyPress={(e) => handleKeyPress(e)} value={inputItem} onChange={(e) => setInputItem(e.target.value)} className="form-control mr-2" id="item" />
                    <button className="btn btn-dark" onClick={handleSubmit}  >Submit</button>
                    </div>
                    <h4 className="title">Items</h4>
                    <ul id="items" className="list-group">
                        {listData.map((list,index) => <li key={index} className={"list-group-item list-group-item" + index }>{list} <button onClick={() => handleRemove(index)} className="btn btn-danger btn-sm float-right delete">X</button></li>  )}
                                      
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default ToDoList;