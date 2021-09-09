import React from 'react';

function Patination(props) {
    const {patination, onPageChange } = props;
    const {page, limit, totalRows} = patination;
    function handlePage(page){
        onPageChange(page)
    }

    return (
        <div style={{display: 'flex'}}>
            <button onClick={() => handlePage(page - 1)}>Prev</button>
            <div>{props.page}</div>
            <button onClick={() => handlePage(page + 1)}>Next</button>
        </div>
    )
}

export default Patination;