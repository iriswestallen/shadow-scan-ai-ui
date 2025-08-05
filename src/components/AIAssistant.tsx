import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Bot, 
  Send, 
  Brain, 
  Lightbulb, 
  Shield, 
  AlertCircle,
  TrendingUp,
  Zap
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  type?: "analysis" | "suggestion" | "alert";
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm your AI cybersecurity assistant. I can help analyze scan results, suggest security improvements, and explain threat vectors. What would you like to know?",
    timestamp: new Date(Date.now() - 300000),
    type: "analysis"
  },
  {
    id: "2",
    role: "assistant",
    content: "I've detected 3 high-risk vulnerabilities in your latest scan of company.com. The exposed S3 bucket contains sensitive configuration files that could lead to further compromise. Would you like me to generate a remediation plan?",
    timestamp: new Date(Date.now() - 120000),
    type: "alert"
  }
];

const quickActions = [
  { label: "Analyze Last Scan", icon: Brain, action: "analyze_scan" },
  { label: "Risk Assessment", icon: Shield, action: "risk_assessment" },
  { label: "Remediation Plan", icon: Lightbulb, action: "remediation" },
  { label: "Threat Intelligence", icon: TrendingUp, action: "threat_intel" }
];

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on the scan data, I've identified several patterns that suggest a potential supply chain vulnerability. The exposed Docker registries contain images with known CVEs.",
        "The AI analysis shows a 94% confidence that this subdomain enumeration reveals a staging environment with default credentials. I recommend immediate credential rotation.",
        "Cross-referencing with threat intelligence feeds, this IP range has been associated with recent APT campaign infrastructure. Enhanced monitoring recommended.",
        "The machine learning model detected anomalous SSL certificate patterns that may indicate certificate transparency log manipulation attempts."
      ];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        type: "analysis"
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickAction = (action: string) => {
    const actionMessages: Record<string, string> = {
      analyze_scan: "Please analyze the results from my latest scan and highlight any critical findings.",
      risk_assessment: "Can you provide a comprehensive risk assessment for my current digital footprint?",
      remediation: "Generate a step-by-step remediation plan for the detected vulnerabilities.",
      threat_intel: "What's the latest threat intelligence relevant to my organization's attack surface?"
    };

    if (actionMessages[action]) {
      setInput(actionMessages[action]);
    }
  };

  return (
    <Card className="cyber-border bg-card/50 backdrop-blur-sm h-full flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center animate-cyber-glow">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <div className="text-lg font-bold">AI Assistant</div>
            <div className="text-sm text-muted-foreground font-normal">
              Powered by advanced threat intelligence
            </div>
          </div>
          <Badge className="ml-auto bg-cyber-green/20 text-cyber-green border-cyber-green/30">
            <Zap className="w-3 h-3 mr-1" />
            Online
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-4">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="text-xs h-8 bg-secondary/50 hover:bg-primary/20 hover:border-primary/50"
              onClick={() => handleQuickAction(action.action)}
            >
              <action.icon className="w-3 h-3 mr-1" />
              {action.label}
            </Button>
          ))}
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground ml-4"
                      : "bg-secondary/50 border border-border/50"
                  }`}
                >
                  {message.role === "assistant" && message.type && (
                    <div className="flex items-center gap-2 mb-2 text-xs">
                      {message.type === "analysis" && <Brain className="w-3 h-3 text-primary" />}
                      {message.type === "suggestion" && <Lightbulb className="w-3 h-3 text-cyber-yellow" />}
                      {message.type === "alert" && <AlertCircle className="w-3 h-3 text-destructive" />}
                      <span className="text-muted-foreground uppercase tracking-wide">
                        {message.type}
                      </span>
                    </div>
                  )}
                  <div className="text-sm">{message.content}</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary/50 border border-border/50 p-3 rounded-lg">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">AI is analyzing...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Ask about vulnerabilities, get recommendations..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !isTyping && handleSend()}
            className="flex-1 bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            size="sm"
            className="px-3 bg-gradient-primary hover:shadow-cyber"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}