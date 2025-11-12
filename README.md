# Nexa Components

React UI components library built with Material-UI.

## Installation
```bash
npm install nexa-components
# or
pnpm add nexa-components
# or
yarn add nexa-components
```

## Peer Dependencies

Make sure you have these installed:
```bash
pnpm add react react-dom @mui/material @emotion/react @emotion/styled
```

## Usage

### Basic Components
```tsx
import { Alert, Button, Breadcrumbs } from "nexa-components";

function App() {
  return (
    <div>
      <Alert severity="success" message="Hello World!" />
      <Button label="Click me" variant="contained" />
    </div>
  );
}
```

### Image Cropper
```tsx
import { CropperComponent } from "nexa-components";
import { useState } from "react";

function ImageCropper() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <CropperComponent
      image="your-image-url.jpg"
      crop={crop}
      zoom={zoom}
      aspect={1}
      onCropChange={setCrop}
      onZoomChange={setZoom}
      onCropComplete={(croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels);
      }}
    />
  );
}
```

### Theme
```tsx
import { lightTheme, darkTheme } from "nexa-components/theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

## Components

- **Alert** - Display alerts with different severity levels
- **Button** - Customizable Material-UI button
- **Breadcrumbs** - Navigation breadcrumbs
- **CropperComponent** - Image cropping component

## License

ISC