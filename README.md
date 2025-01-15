# PlanetsAndShipsReactSolution

This repository contains:
React TypeScript app with Vite and ES lint to display and edit Planets & Ships

## Prerequisites
- React.js
- MSSQL database instance (local or remote)

## Steps

1. **Frontend Setup**
   - `npm install`
   - `npm start`
   - Frontend runs on `http://localhost:5173`

2. **Usage**
   - The app fetches Planets and Ships from `http://localhost:5105/api/planets` and `http://localhost:5105/api/ships`
   - Edit entries, then click Save (PUT requests)
   - Click "Submit All" to POST all data to `http://localhost:5105/api/submission`
   - The .NET API then (mock) POSTs to a "destination system" (replace with real URL in SubmissionService located in the Program.cs)

Thankyou!
