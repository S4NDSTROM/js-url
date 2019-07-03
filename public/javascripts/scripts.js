console.log("Hello")

window.onload = function () {
  let data = { username: 'example' };
  const submitBtn = document.querySelector('#submit-btn').addEventListener("click", (event) => {
    event.preventDefault()
    let userInput = document.querySelector('#user-input').value
    fetch('http://localhost:3000/newurl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput: userInput }),
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
            if (data === 'Invalid Url') {
              document.querySelector('#user-input').value = data;
              document.querySelector('#user-input').style.cssText = "background-color: red; border: 2px solid black; border-radius: 4px;";
            } else {
              document.querySelector('#user-input').value = data;
              document.querySelector('#user-input').style.cssText = "background-color: green; border: 2px solid black; border-radius: 4px;";
            }
            document.querySelector('#user-input').value = data;
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :(', err);
      });
  });
};