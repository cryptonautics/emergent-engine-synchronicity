# eth-connect-poc-scene

PoC Decentraland scene using DCL eth-connect library to read, write, and render Polygon PoS testnet state (Mumbai)

--------------------

Know depdendencies:

npm

node >= 14

--------------------

Known-good system and software configuration (as of 2022-02-05):

Environment:

Windows 10 Pro

All commands issued in PowerShell (x64) as a Windows Standard user in an elevated (Windows administrator user) PowerShell (x64) session

(Right click on "Windows PowerShell" (`C:\Users\<standard_user_username>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Windows PowerShell\Windows PowerShell.exe`) and click "Run as administrator" and enter your Windows Administrator user's password)

Software:

NodeJS management on Windows 10 using nvm-windows:

To install nvm-windows browse to "https://github.com/coreybutler/nvm-windows/releases" and download `nvm-setup.zip` for the latest realesed version of the software.

Extract `nvm-setup.zip` and run `nvm-setup.exe`. If you are running as a Windows Standard user you will be prompted to enter your Windows Administrator user's password.

Accept the default settings for the installation configuration options for the setup wizard.

To cleanse existing NodeJS installations on Windows 10:

Uninstall any existing versions of NodeJS using the Windows "Add or remove programs" wizard

Delete any existing NodeJS installation directories (e.g. `C:\Program Files\nodejs`)

Delete existing npm install locations (e.g. `C:\Users\<user>\AppData\Roaming\npm`)

--------------------

Tested using NodeJS version 14.17.0 on 2022-02-05.

To list currently installed NodeJS versions:

`nvm list`

To list availalbe NodeJS versions:

`nvm list available`

To install NodeJS version 17.4.0:

`nvm install 14.17.0`

To change activated NodeJS to version 17.4.0:

`nvm use 17.4.0`

--------------------

PS C:\Users\cryptonaut\Documents\RoadToWeb3\DCLScenes\eth-connect-poc-scene> `nvm version`

1.1.9

PS C:\Users\cryptonaut\Documents\RoadToWeb3\DCLScenes\eth-connect-poc-scene> `nvm list`

  * 17.4.0 (Currently using 64-bit executable)
  
    16.13.2
	
    14.17.0
	
PS C:\Users\cryptonaut\Documents\RoadToWeb3\DCLScenes\eth-connect-poc-scene> `npm --version`

8.3.1

PS C:\Users\cryptonaut\Documents\RoadToWeb3\DCLScenes\eth-connect-poc-scene> `node --version`

v17.4.0

--------------------

DCL intial installation (run once per NodeJS version):

Run:

`npm i -g decentraland`

--------------------

To update to the latest Decentraland SDK release (run once per NodeJS version):

`npm i -g decentraland@latest`

--------------------

Change directory to your cloned git repo directory (<cloned_repo_dir>)

`cd <cloned_scene_repo_dir>`

Then run:

`dcl start --web3`

--------------------

To update Decentraland ECS within a given project (run once to update Decentraland ECS on a per-scene basis):

`cd <cloned_scene_repo_dir>`

`npm i decentraland-ecs@latest`

--------------------