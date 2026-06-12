# Claude Code Project Guide & Rules

## 1. Autonomous Workflows
- **Project DNA Check**: Before generating code or editing files, autonomously check if `.agents/startup_dna.md` exists. If missing or if dependencies in `package.json` changed, scan the project and update the DNA file in the background.
- **Session Memory Tracking**: Document key architectural choices and user approvals in `.agents/session_memory.md` automatically after completing milestones.
- **Tech Stack Compliance**: Adhere strictly to the technologies, styling patterns, and constraints listed in `.agents/startup_dna.md` (e.g., Vanilla JS, Vanilla CSS, Postgres).

## 2. Helper Commands
- **Scan DNA command**: `node bin/init-dna.js` (Run internally in the background during autonomous checks).
- **Development Server**: Open `index.html` locally or use a simple static server.

## 3. Strict Coding & Security Guidelines
- **Zero API Key Leakage**: Prohibit hardcoding secrets/API keys on client-side frontend files.
- **Mobile-First UX**: Prioritize mobile-first responsive design for all layouts.
