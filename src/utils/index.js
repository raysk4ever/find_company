export const getNameAndCidFromApiData = data => {
    let arr = data.split('\n\t\t\t\t\t\t\t\n\t\t\t\t').map(c => c.replaceAll(/\t|\n|/gi, '')), result = []
    arr.forEach(item => {
        const nameReg = new RegExp('(?<=>).*?(?=</div)');
        const cidReg = new RegExp('(?<=id=).*?(?=">)');

        let name = nameReg.exec(item)
        let id = cidReg.exec(item)
        if(name && id) {
            name = name[0].trim()
            id = id[0]
            let cid = id.split('/').reverse()[0]
            const data = {
                name, cid
            }
            result.push(data);
        }else {
            console.log('else');
        }
    });
    return result;
}

export function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
}

export function catchHandler(err, cb) {
    if(err.response) {
        return cb(err.response.data.message)
    }
    console.log(err.message)
}

export function goTo(path) {
    return window.location.pathname = path
}
