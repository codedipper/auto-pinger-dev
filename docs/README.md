# Auto-Pinger Dev
## Installation
Open the `src` folder and edit the `main.js` file, create more constructors if you wish.
### For All Platforms:
Install [node.js](https://nodejs.org/en/download/) with a minimum version of `8.0.0`.
### For Windows:
Run `start.bat`.
### For Mac & Linux:
Open the `src` folder in the terminal\
and run the commands `npm ci --no-optional` and `npm run start`.
## Licensing
This bot is not meant to be reproducted or distributed.\
All credit goes to `Reverse#0001` or User ID `658346535087636505` on Discord.\
See `LICENSE.md` for more information.
## Discord Rate Limiting
The Discord Rate Limiting is about 1 request per second, per client in one server.\
I suggest putting the interval no shorter than 3 seconds.
## Notes
- The "INTERVAL" object is counted in seconds, because in the code\
it is multiplied by 1000, making it count in seconds because the `setInterval()` function\
is counted in milliseconds.