import axios from 'axios'

// const catchHandler = err => console.log('err', err.message)

// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const getCompanyList = (data) => {
    const url = 'https://www.zaubacorp.com/custom-search';
    return axios.post(url, data)
}

const getSavedCompanyList = () => {
    const url = 'http://localhost:5000/company';
    return axios.get(url)
}

const saveCompanyData = (data) => {
    const url = 'http://localhost:5000/company';
    return axios.post(url, data)
}

export {
    getCompanyList,
    getSavedCompanyList,
    saveCompanyData
}