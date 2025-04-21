// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.getElementById("userNameInput");
const getUserButton = document.getElementById("getUserButton");
const userCitySpan = document.getElementById("userCity");

getUserButton.addEventListener("click", async () => {
  const userNameToFind = userNameInput.value.trim();

  if (userNameToFind === "") {
    userCitySpan.textContent = "Please enter a user name.";
    return;
  }

  userCitySpan.textContent = "Searching...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();

    const foundUser = users.find(
      (user) => user.name.toLowerCase() === userNameToFind.toLowerCase()
    );

    if (foundUser) {
      userCitySpan.textContent = `${foundUser.address.city}`;
    } else {
      userCitySpan.textContent = `User "${userNameToFind}" not found.`;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    userCitySpan.textContent = "An error occurred while fetching data.";
  }
});
