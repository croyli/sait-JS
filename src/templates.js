 function title(block) {
  return ` <div class="row">
        <div class="col-sm">
          <h1>${block.value}</h1>
        </div>
      </div>
      `;
}

 function text(block) {
  return ` <div class="row">
        <div class="col-sm">
          <p>${block.value}</p>
        </div>
      </div>
      `;
}

 function colums(block) {
  const html = block.value.map((it) => `<div class="col-sm">${it}</div>`);
  return ` <div class="row">
          <p>${html.join("")}</p>
        </div>`;
}

 function image(block) {
  return `
    <div class="row">
      <img src="${block.value}" />
    </div>
    `;
}

export const templates = {
  title,
  text,
  image,
  colums
}
