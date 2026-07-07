async function loadAnnouncements() {
  const response = await fetch("https://sysmake-dev.github.io/pchs-jrotc-case-study/src/content/announcements.json");
  
  const data = await response.json();
  const announcements = data.announcements;

  const announcementList = document.getElementById("announcement-list");

  if (!announcementList) return;

  const page = document.querySelector("main").dataset.page;

  let announcementsToRender = announcements;

  if (page === "home") {
    announcementsToRender = announcements.filter(
      (announcement) => announcement.current,
    );
  }

  renderAnnouncements(announcementList, announcementsToRender);
}

function renderAnnouncements(container, announcements) {
  container.innerHTML = "";

  for (const announcement of announcements) {
    container.innerHTML += `
      <article id="item-id" class="announcement item dark">
        <h3>${announcement.title}</h3>
        <p>${announcement.date}</p>
        <p>${announcement.summary}</p>
      </article>
    `;
  }
}

loadAnnouncements();
