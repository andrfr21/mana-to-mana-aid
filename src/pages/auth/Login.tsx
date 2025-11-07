import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import { Button } from "@/components/ui/button";

export default function Login() {
  const { signIn } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    const res = await signIn(email.trim(), password);
    setLoading(false);
    if ((res as any)?.error) {
      setErr((res as any).error);
    } else {
      nav("/dashboard");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--primary)/0.12),transparent),radial-gradient(60%_60%_at_90%_80%,hsl(var(--secondary)/0.12),transparent)]" />

      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">Se connecter</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Heureux de vous revoir 👋
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]"
        >
          {err && (
            <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-red-800 text-sm">
              {err}
            </div>
          )}

          <div className="space-y-3">
            <label className="block text-sm font-medium">Email</label>
            <input
              className="w-full rounded-lg border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              placeholder="vous@exemple.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-3 mt-4">
            <label className="block text-sm font-medium">Mot de passe</label>
            <div className="relative">
              <input
                className="w-full rounded-lg border bg-background px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                placeholder="••••••••"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute inset-y-0 right-2 text-xs text-muted-foreground hover:text-foreground"
                tabIndex={-1}
              >
                {show ? "Masquer" : "Afficher"}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-6 h-11 rounded-xl shadow-[var(--shadow-soft)]"
          >
            {loading ? "Connexion..." : "Connexion"}
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Pas de compte ?{" "}
            <Link to="/signup" className="underline">
              Créer un compte
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
