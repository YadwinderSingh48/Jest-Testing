const fetchData = (shouldFail=false) => {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            if(shouldFail) {
                reject('an error occured')
            } else {
                resolve('someData')
            }
        }, 200);
    })
};

module.exports = fetchData;