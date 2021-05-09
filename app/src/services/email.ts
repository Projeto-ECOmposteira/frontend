import { SendGenericMailProps } from "../types/types";
import api from "../services/api";

export async function postGenericMail(
  emailContent: SendGenericMailProps
): Promise<void> {
  let url = "http://localhost:8003/mail/send";

  await api.post(url, emailContent);
}
