const wrapper = document.getElementById("wrapper");
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events`;
const state = {
  parties: [],
};
let list = [];
// to pull parties from API
async function getParties() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    state.parties = json.data;
    list.push(state.parties);
  } catch (error) {
    console.error(error);
  }
}
getParties();

function addParty(info) {
  const pt = { name: "", date: "", location: "" };
  pt.name = info.name;
  pt.date = info.date;
  pt.location = info.location;
  state.parties.push(pt);
}

document.getElementById("submit").addEventListener("click", () => {
  const namVal = document.getElementById("nameInput").value;
  const dateVal = document.getElementById("dateInput").value;
  const locVal = document.getElementById("locInput").value;
  addParty({ name: namVal, date: dateVal, location: locVal });
});

const ele = document.getElementById("list");
const tableNameEle = document.getElementById("ndl");
tableNameEle.innerHTML = "<h2>Name:</h2><h2>Date:</h2><h2>Location:</h2>";
tableNameEle.style.display = "flex";
tableNameEle.style.justifyContent = "space-around";
ele.appendChild(tableNameEle);
wrapper.appendChild(ele);

const partyListName = document.createElement("div");
partyListName.innerHTML = "<h3>Mary</h3><h3>John</h3><h3>Susan</h3>";
partyListName.style.display = "flex";
partyListName.style.flexDirection = "column";
partyListName.style.marginLeft = "200px";
ele.appendChild(partyListName);

const partyListDate = document.createElement("div");
partyListDate.innerHTML = "<h3>03/24</h3><h3>07/28</h3><h3>12/05</h3>";
partyListDate.style.display = "flex";
partyListDate.style.flexDirection = "column";
partyListDate.style.marginLeft = "640px";
partyListDate.style.marginTop = "-180px";
ele.appendChild(partyListDate);

const partyListLoc = document.createElement("div");
partyListLoc.innerHTML = "<h3>London</h3><h3>Paris</h3><h3>Tokyo</h3>";
partyListLoc.style.display = "flex";
partyListLoc.style.flexDirection = "column";
partyListLoc.style.marginRight = "200px";
partyListLoc.style.marginTop = "-180px";
partyListLoc.style.float = "right";
ele.appendChild(partyListLoc);
