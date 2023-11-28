import React, { useEffect, useState } from "react";
import BotSpecs from "./BotSpecs";

function BotCollection({army, setArmy}) {
  // Your code here
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => {
        return response.json();
      })
      .then((bots) => {
        console.log(bots);
        setBots(bots);
      });
    // .catch();
  }, []);
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots && bots.map((bot) => {
          return <BotSpecs key={bot.id} bot={bot}  army={army} setArmy={setArmy} />;
        })}
      </div>
    </div>
  );
}

export default BotCollection;
