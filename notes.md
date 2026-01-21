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

#### JSX Rules:-

- JSX must return a single parent element.
- Must be properly closed.
- Must written using camelCase

### Expressions in JSX:-

- With JSX we can write expressions inside curly braces.
- The expressions can be react variable or property or any other valid Javascript expression.
- JSX will execute the expression and return the result.
- Can be written using `{}`

> Example:-

```js
const App = () => {
  return <p>{2 + 2}</p>;
};

export default App;
```

- We can pass variables and also functions using expressions.

## Lists in React-

- In react, we will render lists with some type of loop.
- The `js map()` array method is generally preferred method.

  ```js
  const App = () => {
    const nums = [1, 2, 3, 4, 5];
    return (
      <main>
        {nums.map((num) => (
          <ul key={Math.random()}>
            <li>{num}</li>
          </ul>
        ))}
      </main>
    );
  };
  ```

  > `map()` is js method. not want to write about it here

## Props in React:-

- Props or Properties are arguments passed into react compnents.
- Props allow us to pass data from parent to child component
- Props are passed to components via HTML attributes

  ```js
  const App = () => {
    return (
      <User
        img="https:/sdckshfkscxh/cjksfh"
        name="Priyansu"
        age={27}
        isMarried={false}
        hobbies={["Programming"]}
      />
    );
  };

  export default App;
  ```

  ```js
  // User.jsx

  const User = ({ img, nam, age, isMarried, hobbies }) => {
    return (
      <div>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <h3>{age}</h3>
        <h3>{isMarried}</h3>
        <h3>{hobbies}</h3>
      </div>
    );
  };

  export default User;
  ```

  > We can use also props instead of all names like img, name, age, isMarried, hobbies.
  > We have to write like props.name, props.age and etc

## Conditional Rendering

- Conditional rendering allows us to dynamically display different UI components or content based on specific conditions.
- This enables us to create more interactive and responsive user experiences

  ```js
  const ValidPassword = () => <h1>VALID PASSWORD</h1>;

  const InValidPassword = () => <h1>INVALID PASSWORD</h1>;

  const Password = ({ isValid }) => {
    return isValid ? <ValidPassword /> : <InValidPassword />;
  };

  const App = () => {
    return <Password isValid={true} />;
  };
  ```
