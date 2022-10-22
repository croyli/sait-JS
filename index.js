const model = [
  { type: "title", value: "Hello World from JS" },
  { type: "text", value: "here we go with some text" },
  {
    type: "colums",
    value: [
      "1111111111",
      "1111111111",
      "1111111111",
      "1111111111",
    ],
  },
];

const site = document.querySelector('#site')



model.forEach(block => {

  let html = '';

  if (block.type === 'title') {
    html = title(block)

  } else if (block.type === 'text') {
    html = text(block)
  } else if (block.type === 'colums') {
    html = colums(block)
  }

  site.insertAdjacentHTML( 'beforeend', html)

})


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
    const html = block.value.map(it => `<div class="col-sm">${it}</div>`)
    return ` <div class="row">
          <p>${html.join('')}</p>
        </div>`;
  }


