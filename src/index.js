import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const data = [
    { id: 1, name: "service A", parts: [{ size: 1, partId: 1 }] },
    {
      id: 2,
      name: "service B",
      parts: [{ size: 2, partId: 1 }, { size: 3, partId: 2 }]
    },
    { id: 3, name: "service C" } // Case to be tested
  ];
  return (
    <div>
      {data.map(service => (
        <div key={service.id}>
          <span>{service.name}</span>
          {service.parts &&
            service.parts.length > 0 && (
              <div style={{ marginLeft: 10, border: "solid 1px" }}>
                {service.parts.map(part => (
                  <p key={part.partId}>{part.size}</p>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
