
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';
import { 
  Bell, Shield, Moon, Sun, Cpu, RefreshCw, 
  Clock, Upload, Download
} from 'lucide-react';

const Settings = ({ onClose }: { onClose: () => void }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [autoBackup, setAutoBackup] = useState(false);
  const [refreshRate, setRefreshRate] = useState("5");
  const [threatSensitivity, setThreatSensitivity] = useState("medium");

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
    
    toast({
      title: "Settings reset",
      description: "All settings have been reset to default values."
    });
  };

  return (
    <div className="p-6">
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
