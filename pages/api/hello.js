import axios from "axios"
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
axios.defaults.headers.common = {
  "X-CMC_PRO_API_KEY": "47681c4e-0f63-4e83-91e3-628888c514a6",
};
export default async function handler(req, res) {
try {
  const lala = await axios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
  );
  console.log(lala.data)
  res.status(200).json(lala.data.data)
} catch(e){
  console.log("hmm", e.response.data)
}
  
  res.status(200).json({ name: 'John Doe' })
}
