import React from "react";
import { Button } from "@designsystem/react";
import "@designsystem/scss/lib/Button.css";

import { Color } from "@designsystem/react";
import "@designsystem/scss/lib/Utilities.css";

import { Margin } from "@designsystem/react";
import "@designsystem/scss/lib/Margin.css";

const App = () => {
  return (
    <div>
      <Button label="Example Button" />
      <Color hexCode="#000" height="xl" width="xl" />
      <div>
        <Margin space="xl" left>
          <Color hexCode="gray" height="xl" width="xl" />
        </Margin>
      </div>
    </div>
  );
};
export default App;
