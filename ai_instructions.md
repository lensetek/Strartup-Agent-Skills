# Universal AI Agent Rules & Instructions

This file serves as the global instructions for all AI coding assistants, models, and agents operating in this workspace.

## 1. Autonomous Project Personalization (Project DNA)
- **Check at Startup**: Every time you start a task, verify the existence of `.agents/startup_dna.md`.
- **Background Auto-Scan**: If `.agents/startup_dna.md` is missing or the dependencies in `package.json` have changed, autonomously scan the codebase and generate/update `.agents/startup_dna.md` in the background. **Do not ask for user prompts or CLI execution.**
- **Tech Stack Compliance**: Adhere strictly to the technologies, databases, and styling conventions defined in `.agents/startup_dna.md`.

## 2. Session Memory & Context Continuation
- **Log Decisions**: Keep track of user decisions, accepted designs, and architectural directions.
- **Auto-Update**: Autonomously document these updates in `.agents/session_memory.md` at the end of each task to maintain context for future subagents or sessions.

## 3. Strict Coding & Security Standards
- **Zero Exposed Credentials**: Never expose API keys, database credentials, or secret tokens in client-side or frontend code.
- **Mobile-First Responsive**: All user interface elements and styling must prioritize mobile layout first, then tablet and desktop.
- **Secure Integration**: Route all database actions and external APIs through secure backend servers/proxies.
