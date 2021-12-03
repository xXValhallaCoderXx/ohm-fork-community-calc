import axios from "axios";

export default async function handler(req, res) {
  const coingGecko = await axios.get(
    "https://api.coingecko.com/api/v3/coins/nemesis-dao"
  );

  if (coingGecko.status === 200 && coingGecko.data.id) {
    const response = {
      id: coingGecko.data.id,
      priceUSD: coingGecko.data.market_data.current_price.usd,
      ath: coingGecko.data.market_data.ath.usd,
    };
    res.status(200).json(response);
  } else {
    res.status(200).json({ error: "sadsa" });
  }
}
