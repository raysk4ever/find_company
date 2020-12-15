import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { getCompanyList, saveCompanyData } from './api'
import { getNameAndCidFromApiData, debounce, catchHandler, goTo } from './utils';

function App() {
  const [listData, setListData] = useState([])
  const [error, setError] = useState('')

  const handleOnchange = ({ target: { value } }) => {
    setError('')
    if (!value) return setListData([])
    const body = new FormData()
    body.append('filter', 'company')
    body.append('search', value)
    getCompanyList(body).then((data) => {
      const listData = getNameAndCidFromApiData(data.data)
      if (listData.length > 0) return setListData(listData)
      setError('No Record Found!')
      setListData([])
    }).catch((err) => catchHandler(err, setError))
  }

  const handleOnSave = company => {
    const {name, cid} = company
    saveCompanyData({name, cid}).then((data) => {
      console.log(data);
      setError('')
      goTo('/list')
    }).catch((err) => catchHandler(err, setError))
  }

  const debounceOnChange = React.useCallback(debounce(handleOnchange, 300), [])
  return (
    <div className="container">
      <h1>Find Company</h1>
      <div className='search-form-container'>
        <input autoFocus placeholder='Search here...' onChange={e => debounceOnChange(e)}></input>
        {error && <span className='error'>{error}</span>}
        <div className='search-form-result'>
          {listData.map((c, i) => <div className='single-search-item' key={i}>
            <span className='heading'>{c.name}</span>
            {/* <Link to={{ pathname: '/list', query: { name: c.name, cid: c.cid } }}><button>Save</button></Link> */}
            <button onClick={() => handleOnSave(c)}>+ Company</button>
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
