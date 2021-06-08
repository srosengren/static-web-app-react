import React, { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("World");

  useEffect(() => {
    (async function () {
      const text = await (await fetch(`/api/HttpTrigger1`)).text();
      setValue(text);
    })();
  }, []);

  return <div>Hello {value}</div>;
}


export default App;
