import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Rocket, Zap, Shield, Globe, Users, TrendingUp } from "lucide-react";

export default function HomePage() {
  // Features data
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description:
        "Built with Vite for instant reloading and optimal performance.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Type Safety",
      description:
        "Full TypeScript support ensures fewer bugs and better code quality.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Modern Stack",
      description:
        "Powered by React 18 with the latest features and best practices.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Driven",
      description:
        "Built and maintained by a passionate community of developers.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Scalable",
      description:
        "Architected to grow with your project from prototype to production.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Production Ready",
      description: "Preconfigured with ESLint, Prettier, and testing tools.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
              Modern React Boilerplate
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              A production-ready template with TypeScript, Vite, and Tailwind
              CSS. Start building your next web application with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg">View Example</Button>
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern web applications with best
              practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start your project today with our production-ready boilerplate and
            focus on what matters most - building great features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary">
                Explore Dashboard
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
