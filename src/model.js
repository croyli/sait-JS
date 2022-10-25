import image from './accets/image.jpg'
import { TextBlock, TitleBlock, ColumsBlock, ImageBlock } from './classes/blocks'

const text = `Меня зовут Нефедов Павел. Я работаю официантом в отеле, живу в Санкт-Петербурге`

 export const model = [
   new TitleBlock("Конструктор сайтов на чистом JavaScript", {
     tag: "h2",
     styles: {
       background: " linear-gradient(to top right, #000099 0%, #ff0000 100%)",
       color: "#fff",
       "text-align": "center",
       padding: "1.5rem",
     },
   }),

   new TextBlock(text, {
     tag: "h1",
     styles: {
       background: "linear-gradient(to right, #ff0099, #493240)",
       "text-align": "center",
       padding: "20px",
       color: "white",
     },
   }),

   new ColumsBlock(
     ["Колонка", "Колонка", "Все еще колонка", "И это колонка"],
     {
       tag: "p",
       styles: {
         background: "linear-gradient(to top right, #ffff99 0%, #ff3399 84%)",
         padding: "20px",
         "column-width": "200px",
         color: "white",
         "font-weight": "bold",
       },
     }
   ),

   new ImageBlock(image, {
     styles: {
       padding: "2 rem 0",
       display: "flex",
       "justify-content": "center",
     },
     imageStyles: {
       width: "500px",
       height: "auto",
     },
     alt: "Это картинка",
   }),
 ];


