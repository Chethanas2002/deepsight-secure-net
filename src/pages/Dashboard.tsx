
import { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, Bell, Settings, LogOut, User, Home, Monitor, 
  Brain, AlertTriangle, FileText, Menu, Search, Filter, BarChart, 
  Calendar, Download, Mail, Upload, Clock, FileType, Info, Check, 
  AlertCircle, Cpu, MoreHorizontal, Trash, Flag, X
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from '@/components/ui/table';

// Dummy data for the dashboard
const threatData = [
  { date: '2023-03-01', count: 12 },
  { date: '2023-03-02', count: 19 },
  { date: '2023-03-03', count: 15 },
  { date: '2023-03-04', count: 25 },
  { date: '2023-03-05', count: 32 },
  { date: '2023-03-06', count: 18 },
  { date: '2023-03-07', count: 29 }
];

const honeypotLogs = [
  { 
    id: 1, 
    processType: 'cmd.exe', 
    timestamp: '2023-03-07 14:32:45', 
    detected: true, 
    severity: 'high',
    behaviorSummary: 'File encryption attempt detected on multiple directories' 
  },
  { 
    id: 2, 
    processType: 'python.exe', 
    timestamp: '2023-03-07 12:15:22', 
    detected: false, 
    severity: 'low',
    behaviorSummary: 'Regular file system operations with no encryption patterns' 
  },
  { 
    id: 3, 
    processType: 'powershell.exe', 
    timestamp: '2023-03-07 10:45:11', 
    detected: true, 
    severity: 'medium',
    behaviorSummary: 'Registry modifications and suspicious network connections' 
  },
  { 
    id: 4, 
    processType: 'explorer.exe', 
    timestamp: '2023-03-07 09:22:36', 
    detected: false, 
    severity: 'low',
    behaviorSummary: 'Standard file browsing behavior with no malicious actions' 
  },
  { 
    id: 5, 
    processType: 'unknown', 
    timestamp: '2023-03-06 23:41:17', 
    detected: true, 
    severity: 'high',
    behaviorSummary: 'Shadow copy deletion and ransomware note creation' 
  }
];

const aiPredictions = [
  { id: 1, prediction: 'Ransomware', confidence: 97, timestamp: '2023-03-07 14:35:12' },
  { id: 2, prediction: 'Safe', confidence: 99, timestamp: '2023-03-07 12:18:45' },
  { id: 3, prediction: 'Ransomware', confidence: 86, timestamp: '2023-03-07 10:48:33' },
  { id: 4, prediction: 'Safe', confidence: 95, timestamp: '2023-03-07 09:25:51' }
];

const alerts = [
  { 
    id: 1, 
    title: 'Suspicious Activity Detected', 
    timestamp: '2023-03-07 14:32:45', 
    severity: 'high',
    description: 'Multiple file encryption attempts detected from process cmd.exe'
  },
  { 
    id: 2, 
    title: 'Unusual Network Traffic', 
    timestamp: '2023-03-07 10:45:11', 
    severity: 'medium',
    description: 'Powershell process attempting to connect to known malicious IP'
  },
  { 
    id: 3, 
    title: 'System File Modification', 
    timestamp: '2023-03-06 23:41:17', 
    severity: 'high',
    description: 'Critical system files being modified by unknown process'
  }
];

// Dashboard component
const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [selectedLog, setSelectedLog] = useState<any>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  
  // Toggle sidebar
  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);
  
  // Open log details modal
  const openLogDetails = (log: any) => setSelectedLog(log);
  
  // Close log details modal
  const closeLogDetails = () => setSelectedLog(null);
  
  // Toggle notifications panel
  const toggleNotifications = () => setShowNotifications(!showNotifications);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-mono flex">
      {/* Sidebar */}
      <div 
        className={`bg-[#111827] border-r border-blue-900/20 transition-all duration-300 ease-in-out fixed h-full z-20 ${
          sidebarExpanded ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="p-4 border-b border-blue-900/20 flex justify-between items-center">
            {sidebarExpanded ? (
              <span className="text-xl font-bold text-cyber-blue">RansomGuard</span>
            ) : (
              <span className="text-xl font-bold text-cyber-blue">RG</span>
            )}
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-blue-900/20 text-cyber-blue transition-colors"
            >
              {sidebarExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 py-4">
            <ul className="space-y-2 px-2">
              <li>
                <button
                  onClick={() => setActiveSection('dashboard')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 
                    ${activeSection === 'dashboard' 
                      ? 'bg-blue-600/20 text-cyber-blue shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                      : 'hover:bg-blue-900/20 text-gray-300'}`
                  }
                >
                  <Home size={20} />
                  {sidebarExpanded && <span className="ml-3">Dashboard</span>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('honeypotLogs')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200
                    ${activeSection === 'honeypotLogs' 
                      ? 'bg-blue-600/20 text-cyber-blue shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                      : 'hover:bg-blue-900/20 text-gray-300'}`
                  }
                >
                  <Monitor size={20} />
                  {sidebarExpanded && <span className="ml-3">Honeypot Logs</span>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('aiPredictions')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200
                    ${activeSection === 'aiPredictions' 
                      ? 'bg-blue-600/20 text-cyber-blue shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                      : 'hover:bg-blue-900/20 text-gray-300'}`
                  }
                >
                  <Brain size={20} />
                  {sidebarExpanded && <span className="ml-3">AI Predictions</span>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('alerts')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200
                    ${activeSection === 'alerts' 
                      ? 'bg-blue-600/20 text-cyber-blue shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                      : 'hover:bg-blue-900/20 text-gray-300'}`
                  }
                >
                  <AlertTriangle size={20} />
                  {sidebarExpanded && <span className="ml-3">Alerts</span>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('reports')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200
                    ${activeSection === 'reports' 
                      ? 'bg-blue-600/20 text-cyber-blue shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                      : 'hover:bg-blue-900/20 text-gray-300'}`
                  }
                >
                  <FileText size={20} />
                  {sidebarExpanded && <span className="ml-3">Reports</span>}
                </button>
              </li>
            </ul>
          </nav>
          
          {/* Sidebar footer */}
          <div className="p-4 border-t border-blue-900/20">
            <button className="w-full p-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors flex items-center justify-center">
              <LogOut size={18} />
              {sidebarExpanded && <span className="ml-2">Logout</span>}
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarExpanded ? 'ml-64' : 'ml-20'}`}>
        {/* Top nav */}
        <header className="bg-[#111827]/80 backdrop-blur-sm border-b border-blue-900/20 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden mr-2"
              onClick={toggleSidebar}
            >
              <Menu size={20} />
            </Button>
            <h1 className="text-lg font-bold text-cyber-blue">
              Ransomware Behaviour Monitoring
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon"
                className="relative hover:bg-blue-900/20" 
                onClick={toggleNotifications}
              >
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              
              {/* Notifications panel */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-96 bg-[#111827] border border-blue-900/20 rounded-lg shadow-xl z-20 overflow-hidden">
                  <div className="p-4 border-b border-blue-900/20 flex justify-between items-center">
                    <h3 className="font-bold">Notifications</h3>
                    <Button variant="ghost" size="sm" className="text-xs">Mark all as read</Button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {alerts.map(alert => (
                      <div key={alert.id} className="p-4 border-b border-blue-900/20 hover:bg-blue-900/10">
                        <div className="flex items-start">
                          <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${
                            alert.severity === 'high' ? 'bg-red-500' :
                            alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                          <div className="ml-3 flex-1">
                            <p className="font-semibold text-sm">{alert.title}</p>
                            <p className="text-gray-400 text-xs mt-1">{alert.description}</p>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-xs text-gray-500">{alert.timestamp}</span>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">Dismiss</Button>
                                <Button variant="outline" size="sm" className="h-6 px-2 text-xs border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10">View</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-blue-900/20 text-center">
                    <Button variant="ghost" size="sm" className="text-xs text-cyber-blue">View all notifications</Button>
                  </div>
                </div>
              )}
            </div>
            
            <Button variant="ghost" size="icon" className="hover:bg-blue-900/20">
              <Settings size={20} />
            </Button>
            
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-blue-900/40 text-cyber-blue">JD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-400">Security Analyst</p>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6">
          {/* Live Threat Monitoring Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-[#111827] border border-blue-900/20 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Live Threat Monitoring</h2>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">Low</Badge>
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">Medium</Badge>
                  <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">High</Badge>
                </div>
              </div>
              <div className="h-64 w-full bg-[#1a2235] rounded-lg flex items-center justify-center border border-blue-900/20">
                <div className="text-center px-4">
                  <BarChart className="h-10 w-10 text-cyber-blue mx-auto mb-3 opacity-80" />
                  <p className="text-gray-400">Chart visualization would go here</p>
                  <p className="text-xs text-gray-500 mt-2">Showing threat levels for the past 7 days</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-xs text-gray-500">
                <span>Mar 1</span>
                <span>Mar 2</span>
                <span>Mar 3</span>
                <span>Mar 4</span>
                <span>Mar 5</span>
                <span>Mar 6</span>
                <span>Mar 7</span>
              </div>
            </div>
            
            <div className="bg-[#111827] border border-blue-900/20 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-6">Threat Summary</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Active Honeypots</p>
                    <p className="text-2xl font-bold text-cyber-blue">12</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-blue-900/20 flex items-center justify-center text-cyber-blue">
                    <Cpu />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Threats Detected (24h)</p>
                    <p className="text-2xl font-bold text-red-400">7</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-red-900/20 flex items-center justify-center text-red-400">
                    <AlertCircle />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">AI Model Accuracy</p>
                    <p className="text-2xl font-bold text-green-400">97.3%</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-green-900/20 flex items-center justify-center text-green-400">
                    <Brain />
                  </div>
                </div>
                
                <Button className="w-full bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20 border border-cyber-blue/20">
                  View Detailed Report
                </Button>
              </div>
            </div>
          </div>
          
          {/* Honeypot Logs Section */}
          <div className="bg-[#111827] border border-blue-900/20 rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Honeypot Logs</h2>
                <div className="flex space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input 
                      placeholder="Search logs..." 
                      className="pl-10 bg-[#1a2235] border-blue-900/20 focus:border-cyber-blue h-9 text-sm"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="border-blue-900/20 hover:bg-blue-900/20">
                    <Filter size={16} className="mr-2" /> Filter
                  </Button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden border border-blue-900/20">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-blue-900/10 border-blue-900/20">
                      <TableHead className="text-gray-400 font-medium">Process Type</TableHead>
                      <TableHead className="text-gray-400 font-medium">Time of Access</TableHead>
                      <TableHead className="text-gray-400 font-medium">Status</TableHead>
                      <TableHead className="text-gray-400 font-medium">Behavior Summary</TableHead>
                      <TableHead className="text-gray-400 font-medium w-20">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {honeypotLogs.map(log => (
                      <TableRow 
                        key={log.id} 
                        className="hover:bg-blue-900/10 border-blue-900/20 cursor-pointer"
                        onClick={() => openLogDetails(log)}
                      >
                        <TableCell className="font-mono">
                          <div className="flex items-center">
                            <span className="h-2 w-2 rounded-full bg-cyber-blue mr-2"></span>
                            {log.processType}
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-400 text-sm">{log.timestamp}</TableCell>
                        <TableCell>
                          {log.detected ? (
                            <Badge className="bg-red-500/20 text-red-400 border-none">
                              Ransomware
                            </Badge>
                          ) : (
                            <Badge className="bg-green-500/20 text-green-400 border-none">
                              Safe
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-gray-400 text-sm max-w-sm truncate">
                          {log.behaviorSummary}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                            <MoreHorizontal size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                <span>Showing 5 of 127 logs</span>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="h-8 border-blue-900/20">
                    <ChevronLeft size={16} /> Previous
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 border-blue-900/20">
                    Next <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Model Predictions & Reports Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-[#111827] border border-blue-900/20 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-6">AI Model Predictions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {aiPredictions.map(prediction => (
                  <div 
                    key={prediction.id}
                    className={`p-4 rounded-lg border ${
                      prediction.prediction === 'Ransomware' 
                        ? 'bg-red-500/10 border-red-500/30' 
                        : 'bg-green-500/10 border-green-500/30'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-bold ${
                          prediction.prediction === 'Ransomware' ? 'text-red-400' : 'text-green-400'
                        }`}>
                          {prediction.prediction}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">{prediction.timestamp}</p>
                      </div>
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold ${
                        prediction.prediction === 'Ransomware' 
                          ? 'bg-red-500/20 text-red-400' 
                          : 'bg-green-500/20 text-green-400'
                      }`}>
                        {prediction.confidence}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="h-48 w-full bg-[#1a2235] rounded-lg flex items-center justify-center border border-blue-900/20 mb-6">
                <div className="text-center px-4">
                  <BarChart className="h-8 w-8 text-cyber-blue mx-auto mb-3 opacity-80" />
                  <p className="text-gray-400">Model accuracy over time</p>
                  <p className="text-xs text-gray-500 mt-2">Trending at 97.3% accuracy</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-cyber-blue hover:bg-cyber-blue/90 flex items-center">
                  <Upload size={16} className="mr-2" />
                  Upload File for Analysis
                </Button>
              </div>
            </div>
            
            <div className="bg-[#111827] border border-blue-900/20 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-6">Report Generator</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Time Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="border-blue-900/20 bg-blue-900/5">
                      <Clock size={16} className="mr-2" /> Today
                    </Button>
                    <Button variant="outline" size="sm" className="border-blue-900/20">
                      <Calendar size={16} className="mr-2" /> This Week
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Process Type</label>
                  <div className="relative">
                    <select className="w-full bg-[#1a2235] border border-blue-900/20 rounded-md h-10 px-3 text-sm appearance-none focus:border-cyber-blue">
                      <option value="all">All Processes</option>
                      <option value="cmd.exe">cmd.exe</option>
                      <option value="powershell.exe">powershell.exe</option>
                      <option value="python.exe">python.exe</option>
                      <option value="explorer.exe">explorer.exe</option>
                      <option value="unknown">Unknown</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Export Format</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="border-blue-900/20 bg-blue-900/5">
                      <FileText size={16} className="mr-2" /> PDF
                    </Button>
                    <Button variant="outline" size="sm" className="border-blue-900/20">
                      <FileType size={16} className="mr-2" /> CSV
                    </Button>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/90">
                    <Download size={16} className="mr-2" /> Generate Report
                  </Button>
                </div>
                
                <div className="flex items-center justify-between text-sm pt-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="email-me" className="h-4 w-4 rounded border-gray-600 bg-[#1a2235] text-cyber-blue focus:ring-cyber-blue" />
                    <label htmlFor="email-me" className="ml-2 text-gray-400">Email me the report</label>
                  </div>
                  <Mail size={16} className="text-gray-500" />
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input type="checkbox" id="auto-schedule" className="h-4 w-4 rounded border-gray-600 bg-[#1a2235] text-cyber-blue focus:ring-cyber-blue" />
                    <label htmlFor="auto-schedule" className="ml-2 text-gray-400">Weekly auto-schedule</label>
                  </div>
                  <Calendar size={16} className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Log details modal */}
      {selectedLog && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111827] border border-blue-900/30 rounded-lg w-full max-w-2xl shadow-xl">
            <div className="flex justify-between items-center p-6 border-b border-blue-900/20">
              <h2 className="text-xl font-bold">Log Details</h2>
              <Button variant="ghost" size="icon" onClick={closeLogDetails}>
                <X size={20} />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Process Type</p>
                  <p className="font-mono">{selectedLog.processType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Timestamp</p>
                  <p>{selectedLog.timestamp}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Status</p>
                  {selectedLog.detected ? (
                    <Badge className="bg-red-500/20 text-red-400 border-none">
                      Ransomware
                    </Badge>
                  ) : (
                    <Badge className="bg-green-500/20 text-green-400 border-none">
                      Safe
                    </Badge>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Severity</p>
                  <Badge className={`border-none ${
                    selectedLog.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                    selectedLog.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {selectedLog.severity.charAt(0).toUpperCase() + selectedLog.severity.slice(1)}
                  </Badge>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-1">Behavior Summary</p>
                <p className="text-gray-300">{selectedLog.behaviorSummary}</p>
              </div>
              
              <div className="bg-[#1a2235] border border-blue-900/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Full Behavior Pattern</p>
                <div className="text-xs font-mono text-gray-300 whitespace-pre-wrap">
                  {`Process: ${selectedLog.processType}\nStarted: ${selectedLog.timestamp}\nActivity log:\n1. ${selectedLog.behaviorSummary}\n2. Access to system directory detected\n3. Multiple file operations in quick succession\n${selectedLog.detected ? '4. Encryption patterns detected\n5. Ransom note creation attempt' : '4. Normal system operations\n5. No encryption patterns detected'}`}
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                  <Flag size={16} className="mr-2" /> Flag as Suspicious
                </Button>
                <Button variant="outline" className="border-blue-900/20 hover:bg-blue-900/10">
                  <Download size={16} className="mr-2" /> Export Log
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
