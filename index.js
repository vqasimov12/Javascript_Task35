const container = document.getElementById("container");

const createUserCard = (user) => {
  const card = document.createElement("div");
  const head = document.createElement("div");
  const body = document.createElement("div");

  body.classList.add("changeVisiblity");
  body.classList.add("content");
  head.classList.add("head");

  const i = document.createElement("i");
  i.classList.add("fa-solid");
  i.classList.add("fa-angle-down");
  i.classList.add("icon");
  head.addEventListener("click", () => {
    body.classList.toggle("changeVisiblity");

    if (body.classList.contains("changeVisiblity"))
      i.classList.remove("rotate");
    else i.classList.add("rotate");
  });

  const keys = Object.keys(user);

  for (let k = 0; k < keys.length; k++) {
    const p = document.createElement("p");
    p.style.padding="2px"
    if (k == 1) {
      p.innerText = user[keys[k]];
      head.append(p);
      head.append(i);
    } else if (k == 4) {
      const addressValues = Object.values(user[keys[k]]);
      p.innerText = keys[k].charAt(0).toUpperCase() + keys[k].slice(1) + ": ";
      body.append(p);
      const addressKeys = Object.keys(user[keys[k]]);
      for (let m = 0; m < addressKeys.length; m++) {
        const add = document.createElement("p");
        add.style.padding = "0 0 0  20px";
        if (m == 4) {
          let text = `${addressKeys[m]}: `;
          var geoKeys = Object.keys(addressValues[m]);
          add.innerText = text.charAt(0).toUpperCase() + text.slice(1);
          var geoValues = Object.values(addressValues[m]);
          body.append(add);
          for (let g = 0; g < geoKeys.length; g++) {
            const t1 = document.createElement("p");
            t1.innerText = `${geoKeys[g]}: ${geoValues[g]}`;
            t1.style.padding=" 0 0 0 40px"
            body.append(t1)
          }

        } else {
          let text = `${addressKeys[m]}: ${addressValues[m]}`;
          add.innerText = text.charAt(0).toUpperCase() + text.slice(1);

          body.append(add);
        }
      }
    } else if (k == 7) {


        const addressValues = Object.values(user[keys[k]]);
        p.innerText = keys[k].charAt(0).toUpperCase() + keys[k].slice(1) + ": ";
        body.append(p);
        const addressKeys = Object.keys(user[keys[k]]);
        for (let m = 0; m < addressKeys.length; m++) {
          const add = document.createElement("p");
          add.style.padding = "0 0 0  20px";
    
            let text = `${addressKeys[m]}: ${addressValues[m]}`;
            add.innerText = text.charAt(0).toUpperCase() + text.slice(1);
  
            body.append(add);
          }


    } else {
      let i = `${keys[k]}: ${user[keys[k]]}`;

      p.innerText = i.charAt(0).toUpperCase() + i.slice(1);
      body.append(p);
    }
  }

  card.append(head);
  card.append(body);
  card.classList.add("card");
  container.append(card);
};

const createUserCards = (data) => data.map((user) => createUserCard(user));

const GetUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  var data = await response.json();
  createUserCards(data);
};

GetUsers();
