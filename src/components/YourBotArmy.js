import React from "react";
import BotSpecs from "./BotSpecs";
function YourBotArmy({army, setArmy}) {

  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {army && army.map((bot)=>{
         return <BotSpecs key={bot.id} bot={bot}  army={army} setArmy={setArmy}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
