async function loadResources() {
  const response = await fetch("../../content/resources.json");
  const resources = await response.json();

  renderCategory(resources, "cadet-resources");
  renderCategory(resources, "parent-resources");
  renderCategory(resources, "forms");
  renderCategory(resources, "helpful-links");
}

function renderCategory(resources, category) {
  const container = document.getElementById(category);

  if (!container) return;

  const categoryResources = resources.filter(
    (resource) => resource.category === category,
  );

  container.innerHTML = "";

  for (const resource of categoryResources) {
    container.innerHTML += `
      <a href="${resource.file}">
        <div class="link">
          ${resource.title}
        </div>
      </a>
    `;
  }
}

loadResources();
