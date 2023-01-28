import express from "express"
import { sendEmail } from "../service/sendEmail.js"


const apiRouter = new express.Router()

apiRouter.post("/sendEmail/:email/:sub/:body", async (request,response) => {
    console.log("343wsfcno");

    const sendersEmail = request.params["email"]
    const emailSub = request.params["sub"]
    const emailBody = request.params["body"]

   console.log(sendersEmail);
    try {
    const emailResponse = await sendEmail(sendersEmail, emailSub, emailBody)
    console.log("email sended", emailResponse);
    response.send({"status":200, "body": emailResponse})
   } catch (error) {
    console.log("email not send");
    response.send({"status":404, "body": "email has not send"})
   }

})

export default apiRouter;