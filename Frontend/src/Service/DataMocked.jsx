const url ="./Backend./app/data.js"

const fetchRequest = fetch(url);

fetchRequest.then(
  (response) => {
    if (response.ok) {
      response.json().then((data) => {
        // Use the retrieved data to create the graphics
        console.log(data);
        // Create graphics with the data
      });
    } else {
      // Handle the error
      console.log('Request failed with status:', response.status);
    }
  },
  (error) => {
    // Handle the error
    console.log('Request failed:', error);
  }
);
