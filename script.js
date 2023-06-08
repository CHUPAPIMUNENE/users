const USERS_LIST_API = "https://dummyjson.com/users";
const API1 = (id) => `https://dummyjson.com/users/${id}`;

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

document.body.appendChild(wrapper);

function getUsers() {
  fetch(USERS_LIST_API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const { users } = data;

      users.forEach((user) => {
        card(user);
      });
    });
}

getUsers();

function card(user) {
  const div = document.createElement("div");

  const image = document.createElement("img");
  image.src = user.image;
  image.style.background = "#7BC6CC";
  image.classList.add("image");
  div.appendChild(image);
  div.classList.add("card");
  const h1 = document.createElement("h1");
  h1.innerHTML = `${user.firstName} ${user.lastName}`;
  h1.style.background = "#7BC6CC";
  h1.style.color = "white";
  let h2 = document.createElement("h2");
  h2.innerHTML = user.email;
  h2.style.color = "white";
  h2.style.textShadow = "2px 2px 2px grey";
  div.appendChild(h1);
  div.appendChild(h2);
  wrapper.appendChild(div);
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.border = "1px solid grey";
  div.style.width = "300px";
  div.style.marginTop = "70px";
  div.style.backdropFilter = "blur(10px)";
  wrapper.style.display = "flex";
  wrapper.style.flexWrap = "wrap";
  wrapper.style.justifyContent = "space-around";
  let button = document.createElement("button");
  button.textContent = "Подробнее";
  button.style.background = "#7BC6CC";
  button.style.border = "none";
  button.style.height = "40px";
  button.style.color = "white";
  button.addEventListener("click", () => click(user.id));
  button.style.transition = "0.3s ease-in-out";
  div.appendChild(button);

  function click(id) {
    window.location.href = "index1.html";
    localStorage.setItem("userID", API1(id));
  }
}
