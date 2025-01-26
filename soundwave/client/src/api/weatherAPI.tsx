const weatherAPI = async (cityName: string) => {
  try {
    const response = await fetch(
      '/weather/',
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //Authorization: `Bearer ${Auth.getToken()}`
            },
        body: JSON.stringify({ cityName }),
      }
    );
    const data = await response.json();

    if(!response.ok) {
        throw new Error('invalid API response, check network tab!');
    }
    console.log(data);
    return data;
  } catch (err) {
    console.log('Error from data retrieval: ', err);
    return [];
  }
};


export default weatherAPI;