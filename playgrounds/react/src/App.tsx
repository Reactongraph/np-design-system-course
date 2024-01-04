import React from "react";
import { Button } from "@designsystem/react";
import "@designsystem/scss/lib/Button.css";

import { Color } from "@designsystem/react";
import "@designsystem/scss/lib/Utilities.css";

import { Margin } from "@designsystem/react";
import "@designsystem/scss/lib/Margin.css";

import { Text } from "@designsystem/react";
import "@designsystem/scss/lib/Text.css";

import { Select } from "@designsystem/react";
import "@designsystem/scss/lib/Select.css";

const options = [{
  label: 'Strict Black',
  value: 'strict-black'
}, {
  label: 'Heavenly Green',
  value: 'heavenly-green'
}, {
  label: 'Sweet Pink',
  value: 'pink'
}]

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
      <Text size="xl">This is Text Component</Text>
      <Select options={options}/>
    </div>
  );
};
export default App;
