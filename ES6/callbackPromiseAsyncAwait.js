//Async JS programming
//Callbacks,Promises,Async & Await

const datas = [
  { name: "lokesh", profession: "Software Engineer" },
  { name: "vilas", profession: "Software Engineer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${index} - ${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("kuch sahi nahi hai..");
      }
    }, 2000);
  });
}

/* createData({ name: "mayur", profession: "software engineer" })
  .then(getDatas)
  .catch((err) => console.log(err)); */

//Async & Await
async function start() {
  await createData({ name: "mayur", profession: "software engineer" });
  getDatas();
}

start();
