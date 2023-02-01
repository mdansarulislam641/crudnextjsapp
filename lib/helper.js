const BASE_URL = 'http://localhost:3000';

// get all users
export const getUsers = async() =>{
    const response = await fetch(`${BASE_URL}/api/users`);
    const data = await response.json();
    return data ;
}

// get single user
export const getUser = async(userId)=>{
    const response = await fetch(`${BASE_URL}/api/users/${userId}`);
    const json = await response.json();
    if(json) return json ; 
    return {} ;
}

// post user 
export const postUser = async(formData) =>{
    try {
        const Options = {
            method: "POST", 
            headers:{
                "content-type":"application/json"
            },
            body : JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/users`, Options);
        const json = await response.json()
        return json ;
    } catch (error) {
        return res.status(400).json({error:"Error while front end post user"})
    }
}

// update a single user
export const updateUser = async ( userId , formData ) =>{
    try {
        const Options = {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/users/${userId}`);
        const json = await response.json()
        return json ;
    } catch (error) {
        return error ;
    }
}

// Delete a single user 
export const deleteUser = async(userId) =>{
    try {
        const Options = {
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        }
        const response = await fetch(`${BASE_URL}/api/user/${userId}`, Options);
        const json = await response.json();
        return json ;
    } catch (error) {
        
    }
}