import React, { useState } from 'react';
import us from './Users.module.css';

let Paginator = (props, { portionSize = 10 }) => {
    let page = Math.ceil(props.tottalUser / props.pageSize);
    let pages = [];
    for (let i = 1; i <= page; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(page / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionCount = (portionNumber - 1) * portionSize + 1;
    let rigthPortionCount = portionNumber * portionSize;

    return <div className={us.Paginator}>
        <div>
            {portionNumber > 1 &&
                <button
                    onClick={() => { setPortionNumber(portionNumber - 1) }}> left
                </button>}
        </div>
        <div>
            {pages.filter(p => p >= leftPortionCount && p <= rigthPortionCount).map((p) => {
                return <span className={props.currentPage === p ? us.on_position : us.passiv}
                    onClick={(e) => { props.newPageChanged(p) }}>{p}</span>
            })}
        </div>
        <div>
            {portionNumber < portionCount &&
                <button
                    onClick={() => { setPortionNumber(portionNumber + 1) }}> rigth
                </button>}
        </div>
    </div>
}

export default Paginator;