import { Award, Clock, ShieldCheck, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Award, value: "12+", label: "Expert Services" },
  { icon: Clock, value: "24/7", label: "Available" },
  { icon: ShieldCheck, value: "100%", label: "Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand mb-3">
            About AllFix
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted maintenance experts in{" "}
            <span className="text-gradient-brand">Bahria Town & beyond</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            AllFix Maintenance Services Pvt Ltd is your single trusted partner for every
            home or office repair need. We bring together certified plumbers, electricians,
            carpenters, welders and technicians under one roof — ensuring quality work,
            fair pricing and total peace of mind.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From quick fixes to full installations, we treat every property with the care
            we'd give our own.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-hover rounded-2xl border border-border bg-card p-7 text-center cursor-default"
            >
              <s.icon className="mx-auto h-10 w-10 text-brand transition-transform duration-500 hover:scale-110 hover:rotate-12" />
              <div className="mt-3 text-3xl lg:text-4xl font-bold text-gradient-brand">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
