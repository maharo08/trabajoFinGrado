import { createTransport } from "nodemailer";

export function send() {

  const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'gymserrharo@gmail.com',
        pass: 'gym@tfg1',
      },
    });

    transporter.sendMail({
      from: 'gymserrharo@gmail.com', // sender address
      to: "receiverone@gmail.com, receivertwo@outlook.com", // list of receivers
      subject: "Medium @edigleyssonsilva ", // Subject line
      text: "There is a new article. It's about sending emails, check it out!", // plain text body
      html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
    }).then((info: any) => {
      console.log({info});
    }).catch(console.error);
}
