import dotenv from "dotenv";
dotenv.config();
function getGoogleOAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_AUTH_REDIRECT_URL as string,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    state: "Buyer",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };


  const qs = new URLSearchParams(options);
  console.log(qs.toString());

  return `${rootUrl}?${qs.toString()}`;
}

export default getGoogleOAuthURL;
