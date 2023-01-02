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

// const firstBook = {
//   author: 'Jordan Moore',
//   title: 'Interesting Facts For Curious Minds',
//   img: './img/book-1.jpg',
// };
// const secondBook = {
//   author: 'James Clear',
//   title: 'Atomic Habits',
//   img: './img/book-2.jpg',
// };
// const thirdBook = {
//   author: 'Jim Edwards',
//   title: 'Say Thank You for Everything',
//   img: './img/book-3.jpg',
// };

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam
//           dicta iste sunt animi itaque officia sequi, a quisquam numquam sint
//           architecto inventore pariatur ea quo at nostrum consequuntur dolores.
//         </p>
//         <button>click me</button>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//       <Book
//         img={thirdBook.img}
//         title={thirdBook.title}
//         author={thirdBook.author}
//       />
//     </section>
//   );
// };

// const names = ['john', 'peter', 'susan'];
// const newNames = names.map(name => {
//   return <h1>{name}</h1>;
// });

// const BookList = () => {
//   return (
//     <section className="booklist">
//       {names.map(name => {
//         return <h1>{name}</h1>;
//       })}
//     </section>
//   );
// };
// const books = [
//   {
//     author: 'Jordan Moore',
//     title: 'Interesting Facts For Curious Minds',
//     img: './img/book-1.jpg',
//     id: 1,
//   },
//   {
//     author: 'James Clear',
//     title: 'Atomic Habits',
//     img: './img/book-2.jpg',
//     id: 2,
//   },
//   {
//     author: 'Jim Edwards',
//     title: 'Say Thank You for Everything',
//     img: './img/book-3.jpg',
//     id: 3,
//   },
// ];
// const Book = props => {
//   // const { img, title, author } = props.book;
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };
// const BookList = () => {
//   return (
//     <section className="booklist">
//       {books.map(book => {
//         // const { img, title, author, id } = book;
//         // return <Book img={img} title={title} author={author} key={id} />;
//         // return <Book book={book} key={book.id} />;
//         return <Book {...book} key={book.id} />;
//       })}
//     </section>
//   );
// };
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

// -------- Event Basics -------
// const books = [
//   {
//     author: 'Jordan Moore',
//     title: 'Interesting Facts For Curious Minds',
//     img: './img/book-1.jpg',
//     id: 1,
//   },
//   {
//     author: 'James Clear',
//     title: 'Atomic Habits',
//     img: './img/book-2.jpg',
//     id: 2,
//   },
// ];
// const BookList = () => {
//   return (
//     <section className="booklist">
//       <EventExamples />
//       {books.map(book => {
//         return <Book {...book} key={book.id} />;
//       })}
//     </section>
//   );
// };
// const Book = props => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };
// const EventExamples = () => {
//   const handleFormInput = e => {
//     // console.log(e);
//     console.log(e.target);
//     console.log(e.target.name);
//     console.log(e.target.value);
//   };
//   const handleButtonClick = () => {
//     alert('handle button click');
//   };
//   const handleFormSubmission = e => {
//     e.preventDefault();
//     console.log('form submitted');
//   };
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: '1rem 0' }}
//         />
//         <button type="submit" onClick={handleFormSubmission}>
//           submit
//         </button>
//         <div>
//           <button onClick={handleButtonClick} type="button">
//             click me
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };
// const books = [
//   {
//     author: 'Jordan Moore',
//     title: 'Interesting Facts For Curious Minds',
//     img: './img/book-1.jpg',
//     id: 1,
//   },
//   {
//     author: 'James Clear',
//     title: 'Atomic Habits',
//     img: './img/book-2.jpg',
//     id: 2,
//   },
// ];
// const BookList = () => {
//   return (
//     <section className="booklist">
//       <EventExamples />
//       {books.map(book => {
//         return <Book {...book} key={book.id} />;
//       })}
//     </section>
//   );
// };
// const Book = props => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };
// const EventExamples = () => {
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={e => console.log(e.target.value)}
//           style={{ margin: '1rem 0' }}
//         />
//         <button type="submit">submit</button>
//         <div>
//           <button onClick={() => console.log('click me')} type="button">
//             click me
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './img/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './img/book-2.jpg',
    id: 2,
  },
  {
    author: 'Jim Edwards',
    title: 'Say Thank You for Everything',
    img: './img/book-3.jpg',
    id: 3,
  },
];
const BookList = () => {
  const someValue = 'shakeAndBake';
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};
const Book = props => {
  const { img, title, author, displayValue } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
