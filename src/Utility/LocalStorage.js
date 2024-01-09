const getStoredThem = () => {
    const storedApplications = localStorage.getItem("job-applications")
    if(storedApplications){
        return JSON.parse(storedApplications)
    }else{
        return []
    }
}

const saveJobApplication = (id) => {
    const againMainStored = getStoredThem()
    const alreadyExists = againMainStored.find(storedId => storedId === id)
    if(!alreadyExists){
        againMainStored.push(id);
        localStorage.setItem("job-applications", JSON.stringify(againMainStored))
    }
}

export { getStoredThem, saveJobApplication }