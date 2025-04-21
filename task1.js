// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

const usersListElement = document.querySelector(".usersList");

const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((users) => {
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      usersListElement.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Unable to retrieve user data:", error);
    usersListElement.innerHTML = "<li>The user list could not be loaded.</li>";
  });
