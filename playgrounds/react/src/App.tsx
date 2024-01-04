import React from "react";
import {Button} from "@designsystem/react";
import "@designsystem/scss/lib/Button.css";

import {Color} from "@designsystem/react";
import "@designsystem/scss/lib/Utilities.css";


const App = () => {
  return (
    <div>
      <Button label="Example Button" />
      <Color hexCode="#000" height="xl" width="xl"/>
    </div>
  );
};
export default App;
