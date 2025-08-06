import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { 
  Shield, 
  ArrowLeft,
  Search,
  Filter,
  Download,
  MoreVertical,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Eye
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  const scanHistory = [
    {
      id: 1,
      target: "john.doe@email.com",
      type: "email",
      date: "2024-01-15T10:30:00",
      threats: 3,
      platforms: ["HaveIBeenPwned", "DataBreach.com", "Social Media"],
      status: "completed",
      actions: ["Remove from LinkedIn", "Update passwords", "Enable 2FA"]
    },
    {
      id: 2,
      target: "johndoe123",
      type: "username",
      date: "2024-01-10T14:22:00",
      threats: 1,
      platforms: ["Gaming Forums"],
      status: "completed",
      actions: ["Change username"]
    },
    {
      id: 3,
      target: "+1234567890",
      type: "phone",
      date: "2024-01-05T09:15:00",
      threats: 0,
      platforms: [],
      status: "completed",
      actions: []
    },
    {
      id: 4,
      target: "jane.smith@company.com",
      type: "email",
      date: "2024-01-01T16:45:00",
      threats: 5,
      platforms: ["Professional Networks", "Marketing Lists", "Data Brokers"],
      status: "action_needed",
      actions: ["Contact data brokers", "Opt out of marketing", "Update privacy settings"]
    }
  ];

  const filteredHistory = scanHistory.filter(scan => {
    const matchesSearch = scan.target.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterBy === "all" || 
                         (filterBy === "threats" && scan.threats > 0) ||
                         (filterBy === "clean" && scan.threats === 0) ||
                         (filterBy === "email" && scan.type === "email") ||
                         (filterBy === "username" && scan.type === "username") ||
                         (filterBy === "phone" && scan.type === "phone");
    return matchesSearch && matchesFilter;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
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
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
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
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Scan
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> History</span>
                </h2>
                <p className="text-muted-foreground">
                  Review your past scans and track security improvements over time
                </p>
              </div>
              <Link to="/search">
                <Button className="gradient-primary shadow-cyber">
                  <Search className="w-4 h-4 mr-2" />
                  New Scan
                </Button>
              </Link>
            </div>

            {/* Filters */}
            <Card className="cyber-border bg-card/50 backdrop-blur-sm p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search scans..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-input/50 border-border/50"
                    />
                  </div>
                </div>
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-full lg:w-48 bg-input/50 border-border/50">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Scans</SelectItem>
                    <SelectItem value="threats">With Threats</SelectItem>
                    <SelectItem value="clean">Clean Results</SelectItem>
                    <SelectItem value="email">Email Scans</SelectItem>
                    <SelectItem value="username">Username Scans</SelectItem>
                    <SelectItem value="phone">Phone Scans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>

            {/* History List */}
            <div className="space-y-4">
              {filteredHistory.map((scan) => (
                <Card key={scan.id} className="cyber-border bg-card/50 backdrop-blur-sm p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        scan.threats > 0 ? 'bg-gradient-threat' : 'bg-gradient-success'
                      }`}>
                        {scan.threats > 0 ? (
                          <AlertTriangle className="w-6 h-6 text-white" />
                        ) : (
                          <CheckCircle className="w-6 h-6 text-white" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{scan.target}</h3>
                          <Badge variant="secondary" className="capitalize">
                            {scan.type}
                          </Badge>
                          {scan.status === "action_needed" && (
                            <Badge className="bg-cyber-orange/20 text-cyber-orange border-cyber-orange/30">
                              Action Needed
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(scan.date)}
                          </div>
                          <div className={`flex items-center gap-1 ${
                            scan.threats > 0 ? 'text-destructive' : 'text-cyber-green'
                          }`}>
                            {scan.threats > 0 ? (
                              <>
                                <AlertTriangle className="w-4 h-4" />
                                {scan.threats} Threat{scan.threats !== 1 ? 's' : ''}
                              </>
                            ) : (
                              <>
                                <CheckCircle className="w-4 h-4" />
                                No Threats Found
                              </>
                            )}
                          </div>
                        </div>

                        {scan.platforms.length > 0 && (
                          <div className="mb-3">
                            <p className="text-sm text-muted-foreground mb-2">Found on platforms:</p>
                            <div className="flex flex-wrap gap-2">
                              {scan.platforms.map((platform, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {platform}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {scan.actions.length > 0 && (
                          <div>
                            <p className="text-sm text-muted-foreground mb-2">Recommended actions:</p>
                            <div className="flex flex-wrap gap-2">
                              {scan.actions.slice(0, 2).map((action, index) => (
                                <Badge key={index} className="bg-primary/20 text-primary border-primary/30 text-xs">
                                  {action}
                                </Badge>
                              ))}
                              {scan.actions.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{scan.actions.length - 2} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredHistory.length === 0 && (
              <Card className="cyber-border bg-card/50 backdrop-blur-sm p-12 text-center">
                <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Scans Found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery || filterBy !== "all" 
                    ? "Try adjusting your search or filter criteria"
                    : "Start your first privacy scan to see results here"
                  }
                </p>
                <Link to="/search">
                  <Button className="gradient-primary shadow-cyber">
                    <Search className="w-4 h-4 mr-2" />
                    Start New Scan
                  </Button>
                </Link>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;