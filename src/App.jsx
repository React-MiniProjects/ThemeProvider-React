import React from "react";
import ThemeProvider from "./ThemeProvider";
import Content from "./Content";

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
