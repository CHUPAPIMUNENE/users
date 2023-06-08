const GET_USER_DETAILS = (id) => `https://dummyjson.com/users/${id}`;

async function getUserDetails() {
  const userID = localStorage.getItem("userID");
  console.log("userID: ", userID);

  const response = await fetch(GET_USER_DETAILS(userID));

  const user = await response.json();

  createUser(user);
}

getUserDetails();

let row = document.getElementById("row");

function createUser(user) {
  //! Base card
  let baseCard = document.createElement("div");
  row.appendChild(baseCard);
  baseCard.style.background = "#ef473a";
  baseCard.style.color = "white";
  baseCard.style.fontWeight = "600";
  baseCard.style.padding = "20px";

  let baseCardTheme = document.createElement("h1");
  baseCardTheme.textContent = "Base Info";
  baseCard.appendChild(baseCardTheme);

  let fullName = document.createElement("h1");
  fullName.style.fontWeight = "900";
  fullName.textContent = user.firstName;
  baseCard.appendChild(fullName);

  let age = document.createElement("h3");
  age.textContent = user.age;
  baseCard.appendChild(age);

  let gender = document.createElement("h3");
  gender.textContent = user.gender;
  baseCard.appendChild(gender);

  let birthDate = document.createElement("h3");
  birthDate.textContent = `Date of Birth: ${user.birthDate}`;
  baseCard.appendChild(birthDate);

  let phone = document.createElement("h3");
  phone.textContent = `Phone number: ${user.phone}`;
  baseCard.appendChild(phone);

  //! Internet info
  let internetInfo = document.createElement("div");
  row.appendChild(internetInfo);
  internetInfo.style.background = "#734b6d";
  internetInfo.style.color = "white";
  internetInfo.style.fontWeight = "600";
  internetInfo.style.padding = "20px";

  let internetInfoTheme = document.createElement("h1");
  internetInfoTheme.textContent = "Social Media Info";
  internetInfo.appendChild(internetInfoTheme);

  let username = document.createElement("h1");
  internetInfo.appendChild(username);
  username.textContent = `Username: ${user.username}/ Photo below`;

  let profilePhoto = document.createElement("img");
  profilePhoto.src = user.image;
  internetInfo.appendChild(profilePhoto);

  let email = document.createElement("h3");
  email.textContent = `Email: ${user.email}`;
  internetInfo.appendChild(email);

  let password = document.createElement("h3");
  password.textContent = `Password: ${user.password}`;
  internetInfo.appendChild(password);

  let ip = document.createElement("h3");
  ip.textContent = `IP Address: ${user.ip}`;
  internetInfo.appendChild(ip);

  let domain = document.createElement("h3");
  domain.textContent = `Domain: ${user.domain}`;
  internetInfo.appendChild(domain);

  //! Beauty
  let beautyBox = document.createElement("div");
  row.appendChild(beautyBox);
  beautyBox.style.background = "#4CA1AF";
  beautyBox.style.color = "white";
  beautyBox.style.fontWeight = "600";
  beautyBox.style.padding = "20px";

  let beautyBoxTheme = document.createElement("h1");
  beautyBox.appendChild(beautyBoxTheme);
  beautyBoxTheme.textContent = "Health/Appearance Card";

  let weight = document.createElement("h3");
  weight.textContent = `Weight: ${user.weight}`;
  beautyBox.appendChild(weight);

  let height = document.createElement("h3");
  height.textContent = `Height: ${user.height}cm`;
  beautyBox.appendChild(height);

  let hair = document.createElement("h2");
  hair.textContent = "Hair Info:";
  beautyBox.appendChild(hair);

  let hairColor = document.createElement("h3");
  hairColor.textContent = `Hair Color: ${user.hair.color}`;
  beautyBox.appendChild(hairColor);

  let hairType = document.createElement("h3");
  hairType.textContent = `Hair Type: ${user.hair.type}`;
  beautyBox.appendChild(hairType);

  let eyeColor = document.createElement("h3");
  eyeColor.textContent = `Eye Color: ${user.eyeColor}`;
  beautyBox.appendChild(eyeColor);
  eyeColor.style.marginTop = "40px";

  let bloodGroup = document.createElement("h3");
  bloodGroup.textContent = `Blood Group: ${user.bloodGroup}`;
  beautyBox.appendChild(bloodGroup);

  //! Address
  let addressCard = document.createElement("div");
  addressCard.style.background = "#FFC371";
  addressCard.style.color = "white";
  addressCard.style.fontWeight = "600";
  addressCard.style.padding = "20px";
  row.appendChild(addressCard);

  let addressCardTheme = document.createElement("h1");
  addressCardTheme.textContent = "Addresses and Coordinates";
  addressCard.appendChild(addressCardTheme);

  let address = document.createElement("h3");
  address.textContent = `Address: ${user.address.address}, City: ${user.address.city}, Coordinates: ${user.address.coordinates}`;
  addressCard.appendChild(address);
}

createUser();
