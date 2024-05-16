const wrapper = document.getElementById("wrapper");

async function fetchEvents() {
  const response = await fetch(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events"
  );
  return await response.json();
}

fetchEvents().then((response) => {
  response.data.forEach((i) => {
    createEventCard(i);
  });
});

function createEventCard(i) {
  const ele = document.createElement("div");
  const names = document.createElement("h1");
  const descriptions = document.createElement("h4");
  const dateTimes = document.createElement("h4");
  const locations = document.createElement("h4");
  const buttonEle = document.createElement("button");
  buttonEle.textContent = "Delete event";
  buttonEle.id = "deleteButton";
  wrapper.appendChild(ele);
  ele.appendChild(names);
  ele.appendChild(descriptions);
  ele.appendChild(dateTimes);
  ele.appendChild(locations);
  ele.appendChild(buttonEle);
  buttonEle.addEventListener("click", () => {
    deleteEle(i.id);
    ele.remove();
  });
  names.innerHTML = i.name;
  descriptions.innerHTML = i.description;
  dateTimes.innerHTML = i.date;
  locations.innerHTML = i.location;
}

async function deleteEle(id) {
  await fetch(
    `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events/${id}`,
    {
      method: "DELETE",
    }
  );
}
async function addEvents() {
  document.getElementById("addButton").addEventListener("click", () => {
    const names = document.getElementById("name").value;
    const descriptions = document.getElementById("description").value;
    const dateTimes = document.getElementById("date-time").value;
    const locations = document.getElementById("location").value;

    async function addParty() {
      const response = await fetch(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events",
        {
          method: "POST",
          body: JSON.stringify({
            name: names,
            description: descriptions,
            date: dateTimes,
            location: locations,
          }),
        }
      );

      return response;
    }
    addParty();
  });
}
