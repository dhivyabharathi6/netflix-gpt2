
export let checkvalidation =(email,password,name)=>{
    
   let isnamevalid = /^[a-zA-Z\s]+$/.test(name)
   let isEmailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
   let ispasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password)

    
    if(!isEmailvalid) return "Email is not valid"
    if(!ispasswordvalid) return "Password is not valid"
    
    // if(!isnamevalid) return "Name is not valid"

    return null
}