import image from './accets/image.png'

 export const model = [
  { type: "title", value: "Конструктор сайтов на чистом JavaScript", options: {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }},
  { type: "text", value: "Это конструктор сайтов" },
  {
    type: "colums",
    value: ["Колонка", "Колонка", "Все еще колонка", "И это колонка"],
  },
  { type: "image", value: image },
];


