export default function handler(req, res) {
  res.status(200).json({
    message: 'Hello world!',
    cookies: req.cookies,
    envVar: process.env.API_KEY,
  });
}
