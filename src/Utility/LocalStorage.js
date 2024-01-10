const getLocalStorage = () => {
    const localStorageData = localStorage.getItem("jobs")
    if(localStorageData){
        return JSON.parse(localStorageData)
    }else{
        return [];
    }
}

const storeDataToLocalStorage = (id) => {
    const mainData = getLocalStorage();
    const exists = mainData.find(data => data.id === id)
    if(!exists){
        mainData.push(id);
        localStorage.setItem("jobs", JSON.stringify(mainData))
    }
}

export { getLocalStorage, storeDataToLocalStorage }


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