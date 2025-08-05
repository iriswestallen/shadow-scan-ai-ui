import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Zap, 
  Globe,
  Eye,
  Clock
} from "lucide-react";

const recentScans = [
  {
    target: "company.com",
    status: "completed",
    assets: 23,
    threats: 3,
    timestamp: "2 minutes ago",
    risk: "medium"
  },
  {
    target: "api.service.com",
    status: "running",
    assets: 8,
    threats: 0,
    timestamp: "5 minutes ago",
    risk: "low"
  },
  {
    target: "staging.app.io",
    status: "completed",
    assets: 45,
    threats: 7,
    timestamp: "1 hour ago",
    risk: "high"
  }
];

const riskDistribution = [
  { level: "Critical", count: 5, color: "bg-destructive", percentage: 12 },
  { level: "High", count: 12, color: "bg-cyber-orange", percentage: 28 },
  { level: "Medium", count: 18, color: "bg-cyber-yellow", percentage: 42 },
  { level: "Low", count: 8, color: "bg-cyber-green", percentage: 18 }
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          ShadowScan Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          AI-powered digital asset reconnaissance and threat intelligence
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="cyber-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
            <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
            <Globe className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-primary">1,247</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="cyber-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/10 to-transparent" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
            <CardTitle className="text-sm font-medium">Assets Found</CardTitle>
            <Eye className="h-4 w-4 text-cyber-green" />
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-cyber-green">3,891</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +23% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="cyber-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
            <CardTitle className="text-sm font-medium">Threats Detected</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-destructive">43</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              -8% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="cyber-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
            <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
            <Zap className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-accent">94.7%</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Scans */}
        <Card className="cyber-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Recent Scans
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentScans.map((scan, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    scan.status === 'completed' ? 'bg-cyber-green' : 
                    scan.status === 'running' ? 'bg-primary animate-pulse' : 'bg-destructive'
                  }`} />
                  <div>
                    <div className="font-medium">{scan.target}</div>
                    <div className="text-sm text-muted-foreground">
                      {scan.assets} assets • {scan.threats} threats • {scan.timestamp}
                    </div>
                  </div>
                </div>
                <Badge variant={
                  scan.risk === 'high' ? 'destructive' : 
                  scan.risk === 'medium' ? 'secondary' : 'outline'
                } className={
                  scan.risk === 'high' ? 'bg-destructive/20 text-destructive border-destructive/30' :
                  scan.risk === 'medium' ? 'bg-cyber-orange/20 text-cyber-orange border-cyber-orange/30' :
                  'bg-cyber-green/20 text-cyber-green border-cyber-green/30'
                }>
                  {scan.risk}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Risk Distribution */}
        <Card className="cyber-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Risk Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {riskDistribution.map((risk, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{risk.level}</span>
                  <span className="text-sm text-muted-foreground">{risk.count} threats</span>
                </div>
                <Progress 
                  value={risk.percentage} 
                  className="h-2"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}