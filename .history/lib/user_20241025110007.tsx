// api/user.js
export async function getUserInfo(userId: any) {
    const response = await fetch(`https://exam.gammal.tech/API/users/${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    return response.json();
  }
  
  export async function updateUserInfo(userId: any, userData: any) {
    const response = await fetch(`https://exam.gammal.tech/API/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  }
  