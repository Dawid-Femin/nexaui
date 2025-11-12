import Cropper, { CropperProps } from "react-easy-crop";

export type { CropperProps };

const CropperComponent = (props: CropperProps) => {
  return <Cropper {...props} />;
};

export default CropperComponent;
