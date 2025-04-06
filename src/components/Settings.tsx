
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';
import { 
  Bell, Shield, Moon, Sun, Cpu, RefreshCw, 
  Clock, Upload, Download, Lock, ChevronDown,
  Server, Database
} from 'lucide-react';

const Settings = ({ onClose }: { onClose: () => void }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [autoBackup, setAutoBackup] = useState(false);
  const [refreshRate, setRefreshRate] = useState("5");
  const [threatSensitivity, setThreatSensitivity] = useState("medium");
  const [aiModelVersion, setAiModelVersion] = useState("1.2.0");
  const [storageLimit, setStorageLimit] = useState("500");
  const [advancedSectionOpen, setAdvancedSectionOpen] = useState(false);
  
  // New state variables for additional settings
  const [apiKey, setApiKey] = useState("••••••••••••••••");
  const [showApiKey, setShowApiKey] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [language, setLanguage] = useState("english");
  const [dataRetention, setDataRetention] = useState("30");

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully."
    });
    onClose();
  };

  const handleResetDefaults = () => {
    setDarkMode(true);
    setNotifications(true);
    setAutoBackup(false);
    setRefreshRate("5");
    setThreatSensitivity("medium");
    setAiModelVersion("1.2.0");
    setStorageLimit("500");
    setApiKey("••••••••••••••••");
    setShowApiKey(false);
    setTwoFactorAuth(false);
    setLanguage("english");
    setDataRetention("30");
    
    toast({
      title: "Settings reset",
      description: "All settings have been reset to default values."
    });
  };

  const generateNewApiKey = () => {
    const newKey = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    setApiKey(newKey);
    setShowApiKey(true);
    toast({
      title: "New API key generated",
      description: "Your API key has been updated successfully."
    });
  };

  const toggleShowApiKey = () => {
    setShowApiKey(!showApiKey);
  };

  const toggleAdvancedSection = () => {
    setAdvancedSectionOpen(!advancedSectionOpen);
  };

  return (
    <div className="p-6 max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl font-bold mb-6">Settings</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-400">Display</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {darkMode ? <Moon size={18} className="mr-2 text-blue-400" /> : <Sun size={18} className="mr-2 text-yellow-400" />}
              <span>Dark Mode</span>
            </div>
            <Switch 
              checked={darkMode} 
              onCheckedChange={(checked) => {
                setDarkMode(checked);
                toast({
                  title: checked ? "Dark mode enabled" : "Light mode enabled",
                  description: "Theme preference has been updated."
                });
              }}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <RefreshCw size={18} className="mr-2 text-green-400" />
              <span>Dashboard Refresh Rate</span>
            </div>
            <select 
              value={refreshRate}
              onChange={(e) => {
                setRefreshRate(e.target.value);
                toast({
                  title: "Refresh rate updated",
                  description: `Dashboard will refresh every ${e.target.value} minutes.`
                });
              }}
              className="bg-[#1a2235] border border-blue-900/20 rounded-md h-9 px-3 text-sm appearance-none focus:border-cyber-blue w-24"
            >
              <option value="1">1 min</option>
              <option value="5">5 mins</option>
              <option value="15">15 mins</option>
              <option value="30">30 mins</option>
              <option value="60">1 hour</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Server size={18} className="mr-2 text-purple-400" />
              <span>Language</span>
            </div>
            <select 
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                toast({
                  title: "Language updated",
                  description: `Interface language set to ${e.target.value}.`
                });
              }}
              className="bg-[#1a2235] border border-blue-900/20 rounded-md h-9 px-3 text-sm appearance-none focus:border-cyber-blue w-24"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="japanese">Japanese</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-400">Notifications</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell size={18} className="mr-2 text-blue-400" />
              <span>Enable Notifications</span>
            </div>
            <Switch 
              checked={notifications} 
              onCheckedChange={(checked) => {
                setNotifications(checked);
                toast({
                  title: checked ? "Notifications enabled" : "Notifications disabled",
                  description: "Your notification preferences have been updated."
                });
              }}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-400">Security</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield size={18} className="mr-2 text-red-400" />
              <span>Threat Detection Sensitivity</span>
            </div>
            <select 
              value={threatSensitivity}
              onChange={(e) => {
                setThreatSensitivity(e.target.value);
                toast({
                  title: "Threat sensitivity updated",
                  description: `Detection sensitivity set to ${e.target.value}.`
                });
              }}
              className="bg-[#1a2235] border border-blue-900/20 rounded-md h-9 px-3 text-sm appearance-none focus:border-cyber-blue w-24"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Lock size={18} className="mr-2 text-yellow-400" />
              <span>Two-Factor Authentication</span>
            </div>
            <Switch 
              checked={twoFactorAuth} 
              onCheckedChange={(checked) => {
                setTwoFactorAuth(checked);
                toast({
                  title: checked ? "2FA enabled" : "2FA disabled",
                  description: checked ? "Your account is now more secure." : "Two-factor authentication has been disabled."
                });
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Lock size={18} className="mr-2 text-blue-400" />
                <span>API Key</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="h-8 px-2 border-blue-900/20"
                  onClick={toggleShowApiKey}
                >
                  {showApiKey ? "Hide" : "Show"}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="h-8 px-2 border-blue-900/20"
                  onClick={generateNewApiKey}
                >
                  Generate New
                </Button>
              </div>
            </div>
            <input 
              type={showApiKey ? "text" : "password"} 
              value={apiKey}
              readOnly
              className="w-full bg-[#1a2235] border border-blue-900/20 rounded-md h-9 px-3 text-sm appearance-none focus:border-cyber-blue"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-400">Data Management</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock size={18} className="mr-2 text-purple-400" />
              <span>Auto-Backup</span>
            </div>
            <Switch 
              checked={autoBackup} 
              onCheckedChange={(checked) => {
                setAutoBackup(checked);
                toast({
                  title: checked ? "Auto-backup enabled" : "Auto-backup disabled",
                  description: checked ? "Your data will be backed up weekly." : "Auto-backup has been disabled."
                });
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Database size={18} className="mr-2 text-green-400" />
              <span>Data Retention (days)</span>
            </div>
            <select 
              value={dataRetention}
              onChange={(e) => {
                setDataRetention(e.target.value);
                toast({
                  title: "Data retention updated",
                  description: `Logs will be kept for ${e.target.value} days.`
                });
              }}
              className="bg-[#1a2235] border border-blue-900/20 rounded-md h-9 px-3 text-sm appearance-none focus:border-cyber-blue w-24"
            >
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
              <option value="60">60 days</option>
              <option value="90">90 days</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-blue-900/20 flex items-center"
              onClick={() => {
                toast({
                  title: "Backup created",
                  description: "Your data has been backed up successfully."
                });
              }}
            >
              <Upload size={16} className="mr-2" /> Create Backup
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-blue-900/20 flex items-center"
              onClick={() => {
                toast({
                  title: "Restore complete",
                  description: "Your data has been restored from the latest backup."
                });
              }}
            >
              <Download size={16} className="mr-2" /> Restore
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div 
            className="flex items-center justify-between cursor-pointer" 
            onClick={toggleAdvancedSection}
          >
            <h3 className="text-sm font-semibold text-gray-400">Advanced Settings</h3>
            <ChevronDown 
              size={16} 
              className={`text-gray-400 transition-transform duration-200 ${advancedSectionOpen ? 'transform rotate-180' : ''}`} 
            />
          </div>
          
          {advancedSectionOpen && (
            <div className="space-y-4 border-l-2 border-blue-900/20 pl-4 ml-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Cpu size={18} className="mr-2 text-blue-400" />
                  <span>AI Model Version</span>
                </div>
                <select 
                  value={aiModelVersion}
                  onChange={(e) => {
                    setAiModelVersion(e.target.value);
                    toast({
                      title: "AI model updated",
                      description: `Using AI model version ${e.target.value}.`
                    });
                  }}
                  className="bg-[#1a2235] border border-blue-900/20 rounded-md h-9 px-3 text-sm appearance-none focus:border-cyber-blue w-24"
                >
                  <option value="1.0.0">v1.0.0</option>
                  <option value="1.1.0">v1.1.0</option>
                  <option value="1.2.0">v1.2.0</option>
                  <option value="beta">Beta</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Database size={18} className="mr-2 text-purple-400" />
                  <span>Storage Limit (MB)</span>
                </div>
                <select 
                  value={storageLimit}
                  onChange={(e) => {
                    setStorageLimit(e.target.value);
                    toast({
                      title: "Storage limit updated",
                      description: `Storage limit set to ${e.target.value}MB.`
                    });
                  }}
                  className="bg-[#1a2235] border border-blue-900/20 rounded-md h-9 px-3 text-sm appearance-none focus:border-cyber-blue w-24"
                >
                  <option value="100">100 MB</option>
                  <option value="250">250 MB</option>
                  <option value="500">500 MB</option>
                  <option value="1000">1 GB</option>
                </select>
              </div>

              <Button 
                variant="outline" 
                className="border-red-500/20 text-red-400 hover:bg-red-500/10 hover:text-red-300 w-full"
                onClick={() => {
                  toast({
                    title: "Cache cleared",
                    description: "Application cache has been cleared successfully."
                  });
                }}
              >
                Clear Application Cache
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          className="border-blue-900/20"
          onClick={handleResetDefaults}
        >
          Reset to Defaults
        </Button>
        <div className="space-x-2">
          <Button variant="outline" className="border-blue-900/20" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
