async function loadLeadership() {
  const response = await fetch("https://sysmake-dev.github.io/pchs-jrotc-case-study/src/content/leadership.json");
  const leadership = await response.json();

  renderCategory(leadership, "program-instructors");
  renderCategory(leadership, "cadet-leadership");
}

function renderCategory(leadership, category) {
  const container = document.getElementById(category);

  if (!container) return;

  const members = leadership.filter((member) => member.category === category);

  container.innerHTML = "";

  for (const member of members) {
    const darkClass = category === "cadet-leadership" ? "dark" : "";

    container.innerHTML += `
      <article class="profile-card__item ${darkClass}">
        <div class="profile-card__item-img">
          <img
            src="${member.image}"
            alt="${member.name}"
          />
        </div>

        <div class="profile-card__item-title">
          <h3>${member.name}</h3>
        </div>

        <div class="profile-card__item-content">
          <p class="profile-card__item-role">
            <strong>${member.role}</strong>
          </p>

          <p>${member.summary}</p>
        </div>
      </article>
    `;
  }
}

loadLeadership();
