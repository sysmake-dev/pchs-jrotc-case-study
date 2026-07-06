const PAGE_SIZE = 6;

async function loadGallery() {
  const response = await fetch("https://sysmake-dev.github.io/pchs-jrotc-case-study/src/content/gallery.json");
  const gallery = await response.json();

  const categories = [
    {
      name: "leadership",
      container: "leadership-gallery",
    },
    {
      name: "drill",
      container: "drill-gallery",
    },
    {
      name: "color-guard",
      container: "color-guard-gallery",
    },
    {
      name: "community-service",
      container: "community-service-gallery",
    },
    {
      name: "awards",
      container: "awards-gallery",
    },
    {
      name: "battalion-life",
      container: "battalion-gallery",
    },
  ];

  categories.forEach((category) => {
    const images = gallery.filter((image) => image.category === category.name);

    renderCategory(category.container, images);
  });
}

function renderCategory(containerId, images) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const button = container.parentElement.querySelector(".gallery__expand");

  let expanded = false;

  function render() {
    const visibleImages = expanded ? images : images.slice(0, PAGE_SIZE);

    container.innerHTML = "";

    visibleImages.forEach((image) => {
      container.innerHTML += `
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

    if (images.length <= PAGE_SIZE) {
      button.hidden = true;
      return;
    }

    button.textContent = expanded ? "Show Less" : "View More";
  }

  button.addEventListener("click", () => {
    expanded = !expanded;

    render();
  });

  render();
}

loadGallery();
