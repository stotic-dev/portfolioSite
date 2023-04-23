import { render } from "@react-email/render"
import { EmailComponent } from "../Components/Other/Email/EmailComponent"
import sendgrid from '@sendgrid/mail'
import { EmailType } from "../Models/Types/EmailType"

const emailProp: EmailType = {
    receiver: {
        name: "taichi",
        email: "taichis844@gmail.com"
    }
}

export const useSendEmail = () => {
    const emailHtml = render(<EmailComponent receiver={emailProp.receiver} />);
    const sendEmail = (name: string, email: string, completion: () => void) => {

        const emailOption = {
            from: email,
            to: "",
            subject: "Contact from Portfolio Site",
            html: emailHtml,
        };

        sendgrid.send(emailOption);
    }
    
    return { sendEmail };
}