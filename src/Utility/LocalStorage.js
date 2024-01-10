const getLocalStorage = () => {
    const localStorageData = localStorage.getItem("jobs")
    if(localStorageData){
        return JSON.parse(localStorageData)
    }else{
        return [];
    }
}

const storeDataToLocalStorage = (gotId) => {
    const updatedLocalStorageIds = getLocalStorage();
    const exists = updatedLocalStorageIds.find(storedId => storedId === gotId)
    if(!exists){
        updatedLocalStorageIds.push(gotId);
        localStorage.setItem("jobs", JSON.stringify(updatedLocalStorageIds))
    }
}

const removeFromLocalStorage = (idToRemove) => {
    const getStoredDataFirst = getLocalStorage()
    const updateUsingFilter = getStoredDataFirst.filter(dataId => dataId !== idToRemove)
    localStorage.setItem("jobs", JSON.stringify(updateUsingFilter))
}

// const removeFromLocalStorage = (idToRemove) => {
//     const localStorageData = getLocalStorage();
//     const updatedLocalStorageData = localStorageData.filter(id => id !== idToRemove);
//     localStorage.setItem("jobs", JSON.stringify(updatedLocalStorageData));
// }

export { getLocalStorage, storeDataToLocalStorage, removeFromLocalStorage }


// const getStoredThem = () => {
//     const storedApplications = localStorage.getItem("job-applications")
//     if(storedApplications){
//         return JSON.parse(storedApplications)
//     }else{
//         return []
//     }
// }

// const saveJobApplication = (id) => {
//     const againMainStored = getStoredThem()
//     const alreadyExists = againMainStored.find(storedId => storedId === id)
//     if(!alreadyExists){
//         againMainStored.push(id);
//         localStorage.setItem("job-applications", JSON.stringify(againMainStored))
//     }
// }

// export { getStoredThem, saveJobApplication }