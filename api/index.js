// api/index.js
export default async function handler(req, res) {
    res.status(200).json({ message: "Hello from Node.js on Vercel!" });
}
