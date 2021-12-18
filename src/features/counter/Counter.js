import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter(){
    //const count = useSelector(selectCount);
    const count = useSelector(state => state.counter.value);
    //const count = 0;
    const dispatch = useDispatch();
    //increase
    function inc(){
        dispatch(increment());
    }
    //decrease
    function dec(){
        dispatch(decrement());
    }
    return(
        <div>
            <div>
                <button aria-label="Increment value" onClick={inc} >Increment</button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={dec} >Decrement</button>
            </div>
        </div>
    );
}