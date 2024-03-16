import { User } from "../models/User";

export const register= async (user: User) => {

    const response = await fetch('http://localhost:3000/api/authentification/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if(response.ok){
        console.log(await response.json());
        return await response.json();
    } else {
        return await response.json();
    }
}

export const loginin = async (user: User) => {
    const response = await fetch('http://localhost:3000/api/authentification/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  
    if (!response.ok) {
      throw new Error(`Login failed with status: ${response.status}`); // Handle failed login with error message
    }
  
    const responseJson = await response.json();
    localStorage.setItem('token', responseJson.token);
  
    return responseJson;
  }
  