import React, { useCallback, useMemo } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { DropzoneRootProps, useDropzone } from "react-dropzone";
import DropzoneIcon from "../../assets/img/dropzone-icon.svg";
import { useStyles } from "./styles";
import { base64ImageProps } from "../../types/types";

export interface DropzoneProps {
  base64Images: Array<base64ImageProps>;
  setBase64Images: React.Dispatch<
    React.SetStateAction<Array<base64ImageProps>>
  >;
}

const dropzoneContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  borderWidth: 2,
  borderRadius: 4,
  borderColor: "#DDA15E",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#283618",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

const activeStyle = {
  borderColor: "#2196ae",
};

const acceptStyle = {
  borderColor: "#01f676",
};

const rejectStyle = {
  borderColor: "#ff4477",
};

export default function ImageDropzone(props: DropzoneProps) {
  const { base64Images, setBase64Images } = props;
  const classes = useStyles();

  const onDropAccepted = useCallback(
    (acceptedFiles: any) => {
      acceptedFiles.forEach((file: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          const image: base64ImageProps = {
            base64Image: reader.result as string,
            filename: file.name,
          };

          if (!!image.base64Image) {
            setBase64Images((base64Images) => [...base64Images, image]);
          }
        };
      });
    },
    [setBase64Images]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    maxSize: 2000000,
    onDropAccepted: onDropAccepted,
  });

  const removeImage = (imageId: number) => {
    setBase64Images(
      base64Images.filter((_, index: number) => {
        return index !== imageId;
      })
    );
  };

  const attachmentsImages = base64Images.map(
    (image: base64ImageProps, index: number) => (
      <li key={index} className={classes.imagePreviewContainer}>
        <img
          className={classes.imagePreviewStyle}
          src={image.base64Image}
          alt={image.filename}
        />
        <div onClick={() => removeImage(index)}>
          <HighlightOffIcon className={classes.removeImageIcon} />
        </div>
      </li>
    )
  );

  const style: DropzoneRootProps = useMemo(
    () => ({
      ...dropzoneContainerStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <img src={DropzoneIcon} alt="Arraste e solte imagens" height="36px" />
        {!isDragActive && <h3>Arraste ou aperte para escolher uma imagem</h3>}
        {isDragAccept && <h3>Arraste a imagem e solte aqui</h3>}
        {isDragReject && <h3>Anexo não suportado</h3>}
      </div>
      <div>
        <ul className={classes.uploadPreviewContainer}>{attachmentsImages}</ul>
      </div>
    </div>
  );
}
