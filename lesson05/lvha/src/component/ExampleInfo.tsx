import React, { useContext } from "react";
import { ThemeContext } from "./ExampleContext";

export default function ExampleInfo() {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h2>ExampleInfo</h2>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit quasi
        culpa. Hic sapiente quibusdam odit non aperiam voluptas, maiores quod
        illo laudantium est, impedit, voluptatem totam neque quasi tempore?
      </p>
    </div>
  );
}
