import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Zap, 
  Eye, 
  Brain, 
  Lock, 
  Github, 
  ChevronRight,
  Database,
  Globe,
  UserCheck
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Landing = () => {
  const features = [
    {
      icon: Database,
      title: "Data Breach Detection",
      description: "Scan leaked databases and breach repositories"
    },
    {
      icon: Globe,
      title: "Web Exposure Analysis",
      description: "Monitor social media and public forums"
    },
    {
      icon: Eye,
      title: "Dark Web Monitoring",
      description: "Track pastebin sites and hidden content"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Smart recommendations for data protection"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center animate-cyber-glow">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  ShadowScan
                </h1>
                <p className="text-xs text-muted-foreground">Privacy Guardian</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="gradient-primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <Badge className="bg-cyber-green/20 text-cyber-green border-cyber-green/30 mb-8">
              <div className="w-2 h-2 bg-cyber-green rounded-full mr-2 animate-pulse" />
              Next-Gen Privacy Protection
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Digital{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Shadow
              </span>{" "}
              Exposed
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover where your private information is exposed across the internet. 
              AI-powered scanning reveals data breaches, social media leaks, and dark web dumps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/register">
                <Button size="lg" className="gradient-primary shadow-cyber">
                  <UserCheck className="w-5 h-5 mr-2" />
                  Start Your Scan
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Zap className="w-5 h-5 mr-2" />
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 border-t border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">
                Complete Privacy
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Intelligence</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our AI scans the deepest corners of the internet to find where your data lives
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="cyber-border bg-card/50 backdrop-blur-sm p-6 hover:shadow-cyber transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <Card className="cyber-border bg-card/50 backdrop-blur-sm p-12 max-w-4xl mx-auto">
              <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-6 animate-cyber-glow">
                <Lock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Take Control of Your Digital Footprint
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands who've secured their privacy with ShadowScan's advanced detection technology
              </p>
              <Link to="/register">
                <Button size="lg" className="gradient-primary shadow-cyber">
                  <Shield className="w-5 h-5 mr-2" />
                  Secure Your Privacy Now
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-card/30 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
              <div className="w-6 h-6 rounded bg-gradient-primary flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">ShadowScan</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4" />
              </Button>
              <p className="text-sm text-muted-foreground">
                © 2024 ShadowScan. Privacy First.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;