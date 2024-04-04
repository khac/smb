async function onSubmit(location, businessName) {
  try {
    let response;
    let currentDate = new Date();  
    let currentUTCTimestamp = currentDate.toUTCString();
    console.log(JSON.stringify({
      location: location,
      businessName: businessName,
      timestamp: currentUTCTimestamp
    }));
    response = await fetch("http://localhost:5050/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: location,
        businessName: businessName,
        timestamp: currentUTCTimestamp
      }),
    });
  
  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('A problem occurred with your fetch operation: ', error);
  } 
}

export default onSubmit;