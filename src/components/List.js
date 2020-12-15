import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';

import { getSavedCompanyList } from '../api/index'

function List(props) {
    const [savedList, setSavedList] = useState([])
    useEffect(() => {
        getSavedCompanyList().then(({ data }) => {
            setSavedList(data.data)
            console.log(data.data);
        })
    }, [])

    return (
        <div className='container'>
            <h1>Saved Companies</h1>
            <Link to='/'>Go Back</Link>
            {savedList.length > 0 ? (<div>
                {savedList.map((c) => <div className='single-list-item' key={c._id}>
                    <span className='f1'>{c.name}</span>
                    <span>{c.cid}</span>
                </div>)}
            </div>): (<span style={{margin: 10}}>No Company Saved Yet!</span>)}
        </div>
    )
}

export default withRouter(List);