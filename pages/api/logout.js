import cookie from "cookie";

export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      // domain: ".deltawire.io",
      expires: new Date(0),

      path: "/",
    })
  );
  res.statusCode = 200;
  res.json({ success: true });
};
