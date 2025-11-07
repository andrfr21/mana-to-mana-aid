import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import { Button } from "@/components/ui/button";


export default function Signup() {
const { signUp } = useAuth();
const nav = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState<"donor" | "beneficiary">("donor");
const [err, setErr] = useState<string | null>(null);


const onSubmit = async (e: React.FormEvent) => {
e.preventDefault();
const res = await signUp(email, password, role);
if ((res as any)?.error) setErr((res as any).error);
else nav("/dashboard");
};


return (
<div className="min-h-screen flex items-center justify-center bg-background p-6">
<form onSubmit={onSubmit} className="w-full max-w-md space-y-4 bg-card p-6 rounded-xl border">
<h1 className="text-2xl font-semibold">Créer un compte</h1>
{err && <p className="text-sm text-red-600">{err}</p>}
<input
className="w-full rounded-md border p-3 bg-background"
placeholder="Email"
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<input
className="w-full rounded-md border p-3 bg-background"
placeholder="Mot de passe (min 6)"
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
minLength={6}
/>
<div className="flex gap-3">
<label className="flex items-center gap-2">
<input type="radio" name="role" checked={role === "donor"} onChange={() => setRole("donor")} /> Donateur
</label>
<label className="flex items-center gap-2">
<input type="radio" name="role" checked={role === "beneficiary"} onChange={() => setRole("beneficiary")} /> Bénéficiaire
</label>
</div>
<Button type="submit" className="w-full">Créer mon compte</Button>
<p className="text-sm text-muted-foreground">Déjà inscrit ? <Link to="/login" className="underline">Connexion</Link></p>
</form>
</div>
);
}
