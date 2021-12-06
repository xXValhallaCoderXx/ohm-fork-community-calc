import faqs from "./Data/faq.json"

export default async function handler(req, res) {
  res.status(200).json(faqs);
}
