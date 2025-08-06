import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ScanRunner } from "@/components/ScanRunner";
import { 
  Shield, 
  ArrowLeft,
  Search as SearchIcon,
  History,
  Settings
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Search = () => {
  const [scanHistory] = useState([
    { target: "john.doe@email.com", date: "2024-01-15", threats: 3 },
    { target: "johndoe123", date: "2024-01-10", threats: 1 },
    { target: "+1234567890", date: "2024-01-05", threats: 0 }
  ]);

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
            <Link to="/dashboard" className="flex items-center gap-3">
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
              <Link to="/history">
                <Button variant="ghost" size="sm">
                  <History className="w-4 h-4 mr-2" />
                  History
                </Button>
              </Link>
              <Link to="/settings">
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 py-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {/* Page Header */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 animate-cyber-glow">
                <SearchIcon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-2">
                Personal Data
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Scanner</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Search for your personal information across data breaches, social media, and dark web sources. 
                Get detailed insights about your digital exposure.
              </p>
            </div>

            {/* Scan Interface */}
            <div className="max-w-2xl mx-auto">
              <ScanRunner onScanStart={(target) => console.log("Scanning:", target)} />
            </div>

            {/* Recent Scans */}
            {scanHistory.length > 0 && (
              <Card className="cyber-border bg-card/50 backdrop-blur-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Recent Scans</h3>
                  <Link to="/history">
                    <Button variant="ghost" size="sm">
                      <History className="w-4 h-4 mr-2" />
                      View All
                    </Button>
                  </Link>
                </div>

                <div className="space-y-3">
                  {scanHistory.slice(0, 3).map((scan, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                          <SearchIcon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{scan.target}</p>
                          <p className="text-sm text-muted-foreground">{scan.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          scan.threats > 0 
                            ? 'bg-destructive/20 text-destructive' 
                            : 'bg-cyber-green/20 text-cyber-green'
                        }`}>
                          {scan.threats > 0 ? `${scan.threats} Threats` : 'Clean'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Scan Tips */}
            <Card className="cyber-border bg-card/50 backdrop-blur-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Scanning Tips</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Email Addresses</h4>
                  <p className="text-sm text-muted-foreground">
                    Use your primary email addresses to find data breaches and account leaks
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Usernames</h4>
                  <p className="text-sm text-muted-foreground">
                    Check common usernames you use across social platforms
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Phone Numbers</h4>
                  <p className="text-sm text-muted-foreground">
                    Include area code for comprehensive phone number searches
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Regular Scanning</h4>
                  <p className="text-sm text-muted-foreground">
                    Scan monthly to stay ahead of new data exposures
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;