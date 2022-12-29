import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// function Greeting() {
//   return <h2>My First Component</h2>;
// }
// function Greeting() {
//   return React.createElement('h2', {}, 'hello world');
// }
// function Greeting() {
//   return (
//     <div>
//       <h2>My First Component</h2>
//     </div>
//   );
// }
// function Greeting() {
//   return (
//     <div>
//       <div>
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//     </div>
//   );
// }
// function Greeting() {
//   return (
//     <React.Fragment>
//       <div>
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//     </React.Fragment>
//   );
// }
// function Greeting() {
//   return (
//     <>
//       <div className="someValue">
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//       <input type="text" name="" id="" />
//     </>
//   );
// }
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }
// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Greeting />);

// const img = './img/book-1.jpg';
// const title = 'Interesting Facts For Curious Minds';
// const author = 'Jordan Moore';

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './img/book-1.jpg',
};
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './img/book-2.jpg',
};
const thirdBook = {
  author: 'Jim Edwards',
  title: 'Say Thank You for Everything',
  img: './img/book-3.jpg',
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam
          dicta iste sunt animi itaque officia sequi, a quisquam numquam sint
          architecto inventore pariatur ea quo at nostrum consequuntur dolores.
        </p>
        <button>click me</button>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
};
// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };
// const Book = ({ img, title, author }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };
const Book = props => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
// Children props
// const Book = props => {
//   const { img, title, author, children } = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
