async function loadEvents() {
  const response = await fetch("https://sysmake-dev.github.io/pchs-jrotc-case-study/src/content/events.json");

  const data = await response.json();
  const events = data.events;

  const eventList = document.getElementById("event-list");

  if (!eventList) return;

  const page = document.querySelector("main").dataset.page;

  let eventsToRender = events;

  if (page === "home") {
    eventsToRender = events.slice(0, 3);
  }

  renderEvents(eventList, eventsToRender);
}

function renderEvents(container, events) {
  container.innerHTML = "";

  for (const event of events) {
    container.innerHTML += `
      <article class="event item">
        <h3>${event.title}</h3>
        <p>${event.date}</p>
        <p>${event.location}</p>
        <p>${event.summary}</p>
      </article>
    `;
  }
}

loadEvents();
