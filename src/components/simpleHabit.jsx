import React, { useState, useRef, useCallback } from 'react';
import { useEffect } from 'react';


const SimpleHabit = (props) => {
    // state= {
    //     count: 0,
    // };
    const [count,setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(()=> {
        setCount(count + 1);
    });

    useEffect(()=>{
        console.log(`mounted & updated!: ${count}`);
    }, [count]); // count 값이 바뀔 때마다 호출됨
    // []안에 아무것도 없을 시 처음 렌더링 될때만 호출됨.
    return (
        <li className= "habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;

