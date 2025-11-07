import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { user_id, role } = req.body as { user_id: string; role: "donor" | "beneficiary" };
  if (!user_id || !role) return res.status(400).json({ error: "Missing body" });

  const { error } = await supabase.from("profiles").insert({ id: user_id, role });
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ ok: true });
}
