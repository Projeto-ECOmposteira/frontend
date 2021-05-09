import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import { base64ImageProps, SendGenericMailProps } from "../../types/types";
import ImageDropzone from "../../components/ImageDropzone";
import AuthContext from "../../contexts/auth";
import { postGenericMail } from "../../services/email";
import { useStyles } from "./styles";

export interface ContactEmailProps {
  open: boolean;
  setOpen: any;
}

export interface EmailProps {
  title: string;
  message: string;
}

export default function ContactEmail(props: ContactEmailProps) {
  const classes = useStyles();
  const { open, setOpen } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [base64Images, setBase64Images] = useState<Array<base64ImageProps>>([]);
  const [contactUsForm, setContactUsForm] = useState<EmailProps>({
    message: "",
    title: "",
  });
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const { user } = useContext(AuthContext);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTextField = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = evt.target;
    const newcontactUsForm = { ...contactUsForm, [name]: value };
    setContactUsForm(newcontactUsForm);
  };

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    const body: SendGenericMailProps = {
      user: user?.data?.name || "Usuário sem nome",
      to: "teste@teste.com",
      subject: contactUsForm.title,
      message: contactUsForm.message,
      images: base64Images,
    };

    setIsSendingEmail(true);

    try {
      await postGenericMail(body);
      enqueueSnackbar("E-mail enviado com sucesso", { variant: "success" });
      setOpen(false);
    } catch (e) {
      enqueueSnackbar("Erro ao enviar e-mail", { variant: "error" });
    }

    setIsSendingEmail(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="contact-us-dialog-title"
      aria-describedby="contact-us-dialog-description"
      fullWidth
    >
      <DialogTitle id="contact-us-dialog-title">
        Enviar e-mail ao
        {Boolean(user?.data?.isSupermarket) === true
          ? " produtor agrícola"
          : " supermercado "}
      </DialogTitle>
      <DialogContent>
        <form
          id="contact-email-dialog-content"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            className={classes.textfield}
            id="title"
            name="title"
            label="Título do e-mail"
            fullWidth
            value={contactUsForm.title}
            onChange={handleChangeTextField}
            required
          />
          <TextField
            className={classes.textfield}
            id="message"
            name="message"
            label="Mensagem"
            rows="5"
            fullWidth
            multiline
            value={contactUsForm.message}
            onChange={handleChangeTextField}
            required
          />
        </form>
        <ImageDropzone
          base64Images={base64Images}
          setBase64Images={setBase64Images}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          form="contact-email-dialog-content"
          type="submit"
          color="primary"
          variant="contained"
          autoFocus
          disabled={isSendingEmail}
        >
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
