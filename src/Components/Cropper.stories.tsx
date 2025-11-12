import { useCallback, useState } from "react";
import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "@storybook/test";
import { Area } from "react-easy-crop";
import CropperComponent from "./Cropper";

const ASPECT_RATIOS = {
  SQUARE: 1,
  PANORAMA: 16 / 9,
  CLASSIC: 4 / 3,
  VERTICAL: 9 / 16,
  PORTRAIT: 3 / 4,
} as const;

const meta: Meta<typeof CropperComponent> = {
  title: "Components/CropperComponent",
  component: CropperComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 1,
    onCropChange: fn(),
    onZoomChange: fn(),
    onCropComplete: fn(),
    onCropAreaChange: fn(),
    onInteractionStart: fn(),
    onInteractionEnd: fn(),
    onMediaLoaded: fn(),
    objectFit: "cover",
  },
  argTypes: {
    image: {
      control: "text",
      description: "URL obrazu do przycięcia",
    },
    aspect: {
      control: "select",
      options: {
        "Kwadrat (1:1)": ASPECT_RATIOS.SQUARE,
        "Panorama (16:9)": ASPECT_RATIOS.PANORAMA,
        "Klasyczny (4:3)": ASPECT_RATIOS.CLASSIC,
        "Pionowy (9:16)": ASPECT_RATIOS.VERTICAL,
        "Portret (3:4)": ASPECT_RATIOS.PORTRAIT,
      },
      description: "Proporcje obszaru przycinania",
    },
    minZoom: {
      control: { type: "number", min: 0.1, max: 2, step: 0.1 },
      description: "Minimalne powiększenie",
    },
    maxZoom: {
      control: { type: "number", min: 1, max: 10, step: 0.1 },
      description: "Maksymalne powiększenie",
    },
    zoomSpeed: {
      control: { type: "number", min: 0.1, max: 2, step: 0.1 },
      description: "Prędkość zoomowania",
    },
    rotation: {
      control: { type: "number", min: 0, max: 360, step: 1 },
      description: "Rotacja obrazu w stopniach",
    },
    cropShape: {
      control: "select",
      options: ["rect", "round"],
      description: "Kształt obszaru przycinania",
    },
    showGrid: {
      control: "boolean",
      description: "Pokazuje siatkę pomocniczą",
    },
    restrictPosition: {
      control: "boolean",
      description: "Ogranicza pozycję obrazu",
    },
    objectFit: {
      control: "select",
      options: ["contain", "cover", "horizontal-cover", "vertical-cover"],
      description: "Sposób dopasowania obrazu",
    },
    crop: { table: { disable: true } },
    onCropChange: { table: { disable: true } },
    onZoomChange: { table: { disable: true } },
    onCropComplete: { table: { disable: true } },
    onCropAreaChange: { table: { disable: true } },
    onInteractionStart: { table: { disable: true } },
    onInteractionEnd: { table: { disable: true } },
    onMediaLoaded: { table: { disable: true } },
    zoom: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof CropperComponent>;

const sampleImage =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800";

export const Basic: Story = {
  args: {
    image: sampleImage,
    aspect: 1,
    minZoom: 0.1,
    maxZoom: 3,
    showGrid: false,
    restrictPosition: true,
    cropShape: "round",
    rotation: 0,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [zoom, setZoom] = useState(args.zoom || 1);

    const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log(croppedArea, croppedAreaPixels);
    };

    return (
      <Box sx={{ width: 286, height: 286, margin: 5 }}>
        <Box sx={{ position: "relative", width: 286, height: 286 }}>
          <CropperComponent
            {...args}
            zoom={zoom}
            crop={crop}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{ cropAreaStyle: { borderWidth: "2px" } }}
            cropSize={{ width: 256, height: 256 }}
          />
        </Box>
      </Box>
    );
  },
};

export const CropperWithScroll: Story = {
  args: {
    image: sampleImage,
    aspect: 1,
    minZoom: 0.1,
    maxZoom: 2,
    zoomSpeed: 0.2,
    showGrid: false,
    restrictPosition: false,
    cropShape: "rect",
    rotation: 0,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [zoom, setZoom] = useState(1);

    const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log(croppedArea, croppedAreaPixels);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleOnZoom = useCallback((zoomValue: number) => {
      setZoom(zoomValue);
    }, []);

    return (
      <Box margin={5}>
        <Box sx={{ width: "286px", height: "286px" }}>
          <Box
            sx={{
              position: "relative",
              width: "286px",
              height: "286px",
            }}
          >
            <CropperComponent
              {...args}
              zoom={zoom}
              crop={crop}
              onCropChange={setCrop}
              onZoomChange={handleOnZoom}
              onCropComplete={onCropComplete}
              cropSize={{ width: 256, height: 256 }}
            />
          </Box>
          <Slider
            sx={{ mt: 2 }}
            min={args.minZoom}
            max={args.maxZoom}
            value={zoom}
            step={0.1}
            onChange={(_, value) => setZoom(value as number)}
          />
        </Box>
      </Box>
    );
  },
};
