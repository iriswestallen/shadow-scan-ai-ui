import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Shield, 
  ArrowLeft,
  User,
  Bell,
  Lock,
  Palette,
  Database,
  Download,
  Trash2,
  Moon,
  Sun
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Settings = () => {
  const [settings, setSettings] = useState({
    // Profile
    name: "John Doe",
    email: "john.doe@email.com",
    
    // Notifications
    emailAlerts: true,
    weeklyReports: true,
    threatAlerts: true,
    scanReminders: false,
    
    // Privacy
    dataRetention: "12months",
    shareAnalytics: false,
    publicProfile: false,
    
    // Appearance
    theme: "dark",
    compactMode: false,
    animations: true
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
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

            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 py-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {/* Page Header */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">
                Account
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Settings</span>
              </h2>
              <p className="text-muted-foreground">
                Customize your ShadowScan experience and privacy preferences
              </p>
            </div>

            {/* Settings Tabs */}
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-secondary/50">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Alerts
                </TabsTrigger>
                <TabsTrigger value="privacy" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Privacy
                </TabsTrigger>
                <TabsTrigger value="appearance" className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Display
                </TabsTrigger>
              </TabsList>

              {/* Profile Settings */}
              <TabsContent value="profile" className="space-y-6">
                <Card className="cyber-border bg-card/50 backdrop-blur-sm p-6">
                  <h3 className="text-xl font-semibold mb-6">Profile Information</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={settings.name}
                        onChange={(e) => updateSetting("name", e.target.value)}
                        className="bg-input/50 border-border/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={settings.email}
                        onChange={(e) => updateSetting("email", e.target.value)}
                        className="bg-input/50 border-border/50"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="cyber-border bg-card/50 backdrop-blur-sm p-6">
                  <h3 className="text-xl font-semibold mb-6">Security</h3>
                  
                  <div className="space-y-4">
                    <Button className="gradient-primary shadow-cyber">
                      <Lock className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                    <Button variant="outline" className="border-border/50 hover:bg-secondary/50">
                      <Shield className="w-4 h-4 mr-2" />
                      Two-Factor Authentication
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              {/* Notification Settings */}
              <TabsContent value="notifications" className="space-y-6">
                <Card className="cyber-border bg-card/50 backdrop-blur-sm p-6">
                  <h3 className="text-xl font-semibold mb-6">Alert Preferences</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-alerts" className="text-base">Email Alerts</Label>
                        <p className="text-sm text-muted-foreground">Receive important security alerts via email</p>
                      </div>
                      <Switch
                        id="email-alerts"
                        checked={settings.emailAlerts}
                        onCheckedChange={(checked) => updateSetting("emailAlerts", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="threat-alerts" className="text-base">Threat Alerts</Label>
                        <p className="text-sm text-muted-foreground">Immediate notifications for new data exposures</p>
                      </div>
                      <Switch
                        id="threat-alerts"
                        checked={settings.threatAlerts}
                        onCheckedChange={(checked) => updateSetting("threatAlerts", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="weekly-reports" className="text-base">Weekly Reports</Label>
                        <p className="text-sm text-muted-foreground">Summary of your privacy status</p>
                      </div>
                      <Switch
                        id="weekly-reports"
                        checked={settings.weeklyReports}
                        onCheckedChange={(checked) => updateSetting("weeklyReports", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="scan-reminders" className="text-base">Scan Reminders</Label>
                        <p className="text-sm text-muted-foreground">Monthly reminders to run new scans</p>
                      </div>
                      <Switch
                        id="scan-reminders"
                        checked={settings.scanReminders}
                        onCheckedChange={(checked) => updateSetting("scanReminders", checked)}
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Privacy Settings */}
              <TabsContent value="privacy" className="space-y-6">
                <Card className="cyber-border bg-card/50 backdrop-blur-sm p-6">
                  <h3 className="text-xl font-semibold mb-6">Data & Privacy</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Data Retention Period</Label>
                      <Select value={settings.dataRetention} onValueChange={(value) => updateSetting("dataRetention", value)}>
                        <SelectTrigger className="bg-input/50 border-border/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3months">3 Months</SelectItem>
                          <SelectItem value="6months">6 Months</SelectItem>
                          <SelectItem value="12months">12 Months</SelectItem>
                          <SelectItem value="24months">24 Months</SelectItem>
                          <SelectItem value="forever">Keep Forever</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">How long to keep your scan history</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="analytics" className="text-base">Share Analytics</Label>
                        <p className="text-sm text-muted-foreground">Help improve ShadowScan with anonymous usage data</p>
                      </div>
                      <Switch
                        id="analytics"
                        checked={settings.shareAnalytics}
                        onCheckedChange={(checked) => updateSetting("shareAnalytics", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="public-profile" className="text-base">Public Profile</Label>
                        <p className="text-sm text-muted-foreground">Allow others to see your privacy score</p>
                      </div>
                      <Switch
                        id="public-profile"
                        checked={settings.publicProfile}
                        onCheckedChange={(checked) => updateSetting("publicProfile", checked)}
                      />
                    </div>
                  </div>
                </Card>

                <Card className="cyber-border bg-card/50 backdrop-blur-sm p-6">
                  <h3 className="text-xl font-semibold mb-6">Data Management</h3>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full border-border/50 hover:bg-secondary/50">
                      <Download className="w-4 h-4 mr-2" />
                      Export My Data
                    </Button>
                    <Button variant="outline" className="w-full border-destructive/50 text-destructive hover:bg-destructive/10">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete All Scan History
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              {/* Appearance Settings */}
              <TabsContent value="appearance" className="space-y-6">
                <Card className="cyber-border bg-card/50 backdrop-blur-sm p-6">
                  <h3 className="text-xl font-semibold mb-6">Display Preferences</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <Select value={settings.theme} onValueChange={(value) => updateSetting("theme", value)}>
                        <SelectTrigger className="bg-input/50 border-border/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dark">
                            <div className="flex items-center gap-2">
                              <Moon className="w-4 h-4" />
                              Dark Mode
                            </div>
                          </SelectItem>
                          <SelectItem value="light">
                            <div className="flex items-center gap-2">
                              <Sun className="w-4 h-4" />
                              Light Mode
                            </div>
                          </SelectItem>
                          <SelectItem value="auto">System Default</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="compact-mode" className="text-base">Compact Mode</Label>
                        <p className="text-sm text-muted-foreground">Show more information in less space</p>
                      </div>
                      <Switch
                        id="compact-mode"
                        checked={settings.compactMode}
                        onCheckedChange={(checked) => updateSetting("compactMode", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="animations" className="text-base">Animations</Label>
                        <p className="text-sm text-muted-foreground">Enable interface animations and transitions</p>
                      </div>
                      <Switch
                        id="animations"
                        checked={settings.animations}
                        onCheckedChange={(checked) => updateSetting("animations", checked)}
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Save Button */}
            <div className="flex justify-center">
              <Button className="gradient-primary shadow-cyber px-8">
                <Database className="w-4 h-4 mr-2" />
                Save All Settings
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;