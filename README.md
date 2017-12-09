# netManager
A tool to manage, deploy and upgrade one or more netwok devices. Switches, Routers &amp; PIX systems.

## Updates

ciscoManager has been renamed to netManager as it will now support multiple makes of network devices (i.e Cisco and Dell PowerConnect) 

NetManager will start development soon, but it will be hard to support multiple makes of networking devices, this is why the program will be very very modular, meaning anyone can make a simple YAML (or JSON) file that allows support for their network devices. 

### Features

These are the features of netManager:

- AutoConfigure - Automatically configure 1 or more devices based on a YAML file.

- Update - Update (flash) the device with any version of the software. 

- Remotely control devices - Have a server with serial connects to the devices that can be controlled by a client over the network or internet.

- POE Monitoring - Monitor the status of POE devices.

- Custom Devices - See below

## Custom Devices

Once the base of the program is finished, a simple YAML (or possibly JSON) file will be used to tell the program how to handle different devices (say a Cisco or Dell switch). As in some cases a device may require extra code or a new protocol, so custom JS can be written and placed in the mods folder to add this support.

Here's an example
```YAML
# Info
name: Dell_Support
by: Nevexo
version: 1.0
OSVer: 1.0
# Load extra JavaScript to support Dell PowerConnect
customJS: dellSupport.js
# BAUD Rate
baud: 1300
# Commands
restart_device: reload
save_config: copy running_config rom_config
update_tasks: !include update.yaml
```
