# Setting up
cd Frontend > npm create vite@latest . > React > Javascript

frontend > npm i react-router-dom react react-icons zustand

frontend > npm install



cd root > npm init -y 

backend > npm install

cd backend > npm i express mongoose dotenv

npm install nodemon -D


Add "dev": "nodemon backend/server.js" to scripts in root > package.json

Add  "server: {
    proxy:{
      "/api": {
        target: "http://localhost:5000",
      },
    }," to vite.config.js

Add "type": "module", to root > package.json

# Starting 
cd backend > run npm run dev
cd frontend > run npm run dev

