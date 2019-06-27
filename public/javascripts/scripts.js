console.log("Hello")

//fetch, preventdefault etc
window.onload = function () {
  let data = {username: 'example'};
  const submitBtn = document.querySelector('#submit-btn').addEventListener("click", (event) => {
    event.preventDefault()
    const userInput = document.querySelector('#user-input').value
    console.log(userInput)
    fetch('http://localhost:3000/api/newurl', {
      method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
      body: JSON.stringify({userInput : userInput}),
    })
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then((data) => {
            console.log(data);
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :(', err);
      });
  });
};