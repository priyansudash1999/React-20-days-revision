# React

### What ?

- Is a free and open source JavaScript library for building user interfaces
- It is maintained by Facebook and a community of individual developers and companies
- React can be used as a base in the development of single-page or mobile applications
- Learn Once write anywhere
  - Native
  - Desktop
  - React 360

### Installation

- `npm create vite@latest` sets up a fast modern frontend project boilerplate in seconds.
- After this there are some folder and files in the directory.
- Main folder is src and main file is index.html.
- README.md has contain summary of project.
- package.json contain installed libraries.
- vite.config.js contains data about vite

### Components in react

- What ?
  - They are independent and reusable bits of code.
  - They serve the same purpose as JS functions, but work in isolation and return HTML.
- Before react we have to manually create html, css and js file.
- A component is like a js function but first letter is in Uppercase.
- We can create a component using arrow func or function keyword.

  ```js
  const App = () => {
    return <>hello</>;
  };
  export default App;
  ```

- After exporting we can use it in another file.
- If there are more than one components in a file and we have to export both componets then we can use `{}`.

  ```js
  const Home = () => {
    return <>hello</>;
  };

  const Navbar = () => {
    return <>hi</>;
  };

  export { Home, Navbar };
  ```
