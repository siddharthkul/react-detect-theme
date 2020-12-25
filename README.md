# react-detect-theme

> hook to detect user system theme

[![NPM](https://img.shields.io/npm/v/react-detect-theme.svg)](https://www.npmjs.com/package/react-detect-theme) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-detect-theme
```

## Usage

```tsx
import * as React from "react";

import { useIsDark } from "react-detect-theme";

const Example = () => {
  const theme = useIsDark();
  return <div>{theme ? "dark" : "light"}</div>;
};
```

## License

MIT © [siddharthkul](https://github.com/siddharthkul)
