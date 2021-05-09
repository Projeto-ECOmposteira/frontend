import { SendGenericMailProps } from "../types/types";
import api from "../services/api";

export async function postGenericMail(
  emailContent: SendGenericMailProps
): Promise<void> {
  const baseUrl = `${process.env.REACT_APP_NOTIFICATION_MICROSSERVICE}`;
  const url = baseUrl + "/mail/send";

  await api.post(url, emailContent);
}
