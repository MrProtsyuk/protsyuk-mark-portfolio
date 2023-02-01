// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SG_MAIL_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const data = {
    to: "protsyukmark@gmail.com",
    from: `${body.email}`,
    subject: "Reaching out because I saw your Portfolio",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
    <head>
      <meta charset="utf-8">
    
      <title>English Cafe</title>
      <meta name="description" content="The HTML5 Herald">
      <meta name="author" content="SitePoint">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <link href="./dist/output.css" rel="stylesheet">
    
    </head>
    
    <body>
      <div>              
            </div>
            <div class="flex flex-col place-content-center">
              <div class="flex flex-row place-content-center">
                <h2 class="text-2xl text-blue-700">Hey this is, ${body.name}!</h2>
              </div>
              <div class="border border-solid rounded-lg border-slate-400">
              <p class="text-xl text-blue-700">${body.message}</p>
              </div>
            </div>
    </body>
    </html>`,
  };
  mail.send(data);
  res.status(200).json({ status: "ok" });
};
