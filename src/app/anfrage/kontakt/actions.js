"use server";
import axios from "axios";
import sgMail from "@sendgrid/mail";

export async function sendMail(token, formData) {
  try {
    const secretKey = "6LfbdbMqAAAAACxp5kCb2zRUyV9KYzieGNVTHj10"; // Replace with your Secret Key
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    if (response.data.success) {
      // send a mail here using the formData the mail should go to deniz@deniz.com
      // structure: { name: 'Deniz', email: 'Ugur@ugur.com', message: 'test' }
      // api key: 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

      sgMail.setApiKey(
        "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"
      );

      // Email details
      const msg = {
        to: "deniz.ugur2006@hotmail.com", // Recipient email address
        from: formData.email, // Sender email (from the form)
        subject: "Eine neue Nachricht",
        text: `${formData.name} hat dir folgendes geschriben: ${formData.message}`, // Plain text body
      };

      fetch("https://usebasin.com/f/abf26cac09e9", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.status === 200) {
            console.log("successssssss");
          } else {
            console.log("fail");
          }
        })
        .catch((error) => console.log(error));
      // Send email
      // await sgMail.send(msg);

      console.log(formData);

      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
