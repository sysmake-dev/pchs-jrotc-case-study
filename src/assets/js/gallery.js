const PAGE_SIZE = 6;

async function loadGallery() {
  const response = await fetch("https://sysmake-dev.github.io/pchs-jrotc-case-study/src/content/gallery.json");

  const data = await response.json();
  const gallery = data.gallery;

  const categories = [
    {
      category: "leadership",
      container: "leadership-gallery",
    },
    {
      category: "drill",
      container: "drill-gallery",
    },
    {
      category: "color-guard",
      container: "color-guard-gallery",
    },
    {
      category: "community-service",
      container: "community-service-gallery",
    },
    {
      category: "awards",
      container: "awards-gallery",
    },
    {
      category: "battalion-life",
      container: "battalion-gallery",
    },
  ];

  categories.forEach(({ category, container }) => {
    const images = gallery.filter((image) => image.category === category);

    renderCategory(container, images);
  });
}

function renderCategory(containerId, images) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const button = container.parentElement.querySelector(".gallery__expand");

  let expanded = false;

  function render() {
    const visibleImages = expanded ? images : images.slice(0, PAGE_SIZE);

    let html = "";

    visibleImages.forEach((image) => {
      html += `
        <figure class="gallery__item">
          <a
            href="${image.image}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="${image.image}"
              alt="${image.alt}"
            >
          </a>

          <figcaption>
            ${image.title}
          </figcaption>
        </figure>
      `;
    });

    container.innerHTML = html;

    if (images.length <= PAGE_SIZE) {
      button.hidden = true;
      return;
    }

    button.hidden = false;
    button.textContent = expanded ? "Show Less" : "View More";
  }

  button.addEventListener("click", () => {
    expanded = !expanded;
    render();
  });

  render();
}

loadGallery();
