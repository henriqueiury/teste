export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const body = req.body;
    const apiUrl = "https://multi.paradisepags.com/api/v1/transaction.php";
    const apiToken = "sk_028f8840cae26af658af2879fa9dbf5e0e4ca78a26018211c68547195ebc45c7";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiToken,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
