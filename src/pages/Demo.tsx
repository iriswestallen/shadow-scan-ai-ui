import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ScanRunner } from "@/components/ScanRunner";
import { ScanResults } from "@/components/ScanResults";
import { 
  Shield, 
  ArrowLeft,
  Zap,
  UserCheck
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Demo = () => {
  const [showResults, setShowResults] = useState(false);
  const [scanTarget, setScanTarget] = useState("");

  const handleScanStart = (target: string) => {
    setScanTarget(target);
    // Simulate scan delay
    setTimeout(() => {
      setShowResults(true);
    }, 3000);
  };

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
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center animate-cyber-glow">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  ShadowScan
                </h1>
                <p className="text-xs text-muted-foreground">Privacy Guardian</p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Badge className="bg-cyber-yellow/20 text-cyber-yellow border-cyber-yellow/30">
                <Zap className="w-3 h-3 mr-1" />
                Demo Mode
              </Badge>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 py-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {!showResults ? (
            <div className="space-y-8">
              {/* Demo Introduction */}
              <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8 text-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 animate-cyber-glow">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Try ShadowScan
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Demo</span>
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Experience our privacy scanning technology with sample data. 
                  See how ShadowScan detects digital exposure across the internet.
                </p>
                <Badge className="bg-cyber-yellow/20 text-cyber-yellow border-cyber-yellow/30">
                  No real data is scanned • Safe demo environment
                </Badge>
              </Card>

              {/* Scan Interface */}
              <div className="max-w-2xl mx-auto">
                <ScanRunner 
                  onScanStart={handleScanStart}
                  demoMode={true}
                />
              </div>

              {/* Features Preview */}
              <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-6 text-center">What You'll See in the Demo</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-threat flex items-center justify-center mx-auto">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold">Exposure Detection</h4>
                    <p className="text-sm text-muted-foreground">Sample data breach findings</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto">
                      <Zap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold">AI Analysis</h4>
                    <p className="text-sm text-muted-foreground">Smart risk assessment</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-success flex items-center justify-center mx-auto">
                      <UserCheck className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold">Protection Tips</h4>
                    <p className="text-sm text-muted-foreground">Actionable security advice</p>
                  </div>
                </div>
              </Card>

              {/* CTA */}
              <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ready for Real Protection?</h3>
                <p className="text-muted-foreground mb-6">
                  Create an account to scan your actual data and get personalized security insights
                </p>
                <Link to="/register">
                  <Button className="gradient-primary shadow-cyber">
                    <Shield className="w-4 h-4 mr-2" />
                    Start Real Scan
                  </Button>
                </Link>
              </Card>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Demo Results */}
              <div className="text-center mb-8">
                <Badge className="bg-cyber-green/20 text-cyber-green border-cyber-green/30 mb-4">
                  Demo Complete • Sample Data Only
                </Badge>
                <h2 className="text-2xl font-bold mb-2">Demo Results for "{scanTarget}"</h2>
                <p className="text-muted-foreground">
                  This is a sample report showing how ShadowScan presents findings
                </p>
              </div>

              <ScanResults demoMode={true} />

              {/* Demo Actions */}
              <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Impressed with the Demo?</h3>
                <p className="text-muted-foreground mb-6">
                  Get real results by creating your ShadowScan account today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register">
                    <Button className="gradient-primary shadow-cyber">
                      <Shield className="w-4 h-4 mr-2" />
                      Create Account
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowResults(false);
                      setScanTarget("");
                    }}
                    className="border-border/50 hover:bg-secondary/50"
                  >
                    Try Demo Again
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Demo;