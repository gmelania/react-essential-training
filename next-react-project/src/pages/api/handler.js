// API handler for 'src/app/contact' route
export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    // [ backend logic ]

    console.log("Received: ", { email, message });
    res.status(200).json({ ok: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
