import React, { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Title2 = () => {
  return <div>Hello, world</div>;
};

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// Define our button, but with the use of props.theme this time
const Button2 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.color};
  border: 3px solid ${(props) => props.theme.borderColor};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button2.defaultProps = {
  theme: {
    color: "red",
    borderColor: "blue",
  },
};

// Define what props.theme will look like
const defaultTheme = {
  color: "green",
  borderColor: "pink",
};

const redTheme = {
  color: "red",
  borderColor: "red",
};

export default function StyledComponentsExample() {
  const [theme, setTheme] = useState(defaultTheme);
  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <>
        <button onClick={() => setTheme(redTheme)}>red</button>
        <button onClick={() => setTheme(defaultTheme)}>green</button>
        <ThemeProvider theme={theme}>
          <Button2>Seolyu</Button2>
          <Button2>Yeasul</Button2>
        </ThemeProvider>
      </>
      <>
        <Rotate>&lt; 💅🏾 &gt;</Rotate>
      </>
      <>
        <Input placeholder="A bigger text input" size="2em" />
        <br />
        {/* Notice we can still use the size attr from Input */}
        <PasswordInput placeholder="A bigger password input" size="2em" />
      </>
      <>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>
      </>
      <Wrapper>
        <Title>Hello World!</Title>
        <Title2 />
      </Wrapper>
      <Button onClick={() => alert("normal")}>Normal</Button>
      <Button onClick={() => alert("primary")} primary>
        Primary
      </Button>
      <TomatoButton>Tomato</TomatoButton>
      <br />
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>
      <br />
      <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button>
    </>
  );
}
