#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectDir = process.cwd();
const agentsDir = path.join(projectDir, '.agents');
const dnaPath = path.join(agentsDir, 'startup_dna.md');

// 1. Ensure .agents directory exists
if (!fs.existsSync(agentsDir)) {
    console.log('Creating .agents directory...');
    fs.mkdirSync(agentsDir, { recursive: true });
}

console.log('Analyzing codebase dependencies...');

// 2. Scan package.json for tech stack detection
let techStack = {
    frontend: 'Vanilla HTML/JS',
    backend: 'Not detected (assuming client-only or serverless)',
    database: 'Not detected',
    auth: 'Not detected',
    styling: 'Vanilla CSS'
};

const packageJsonPath = path.join(projectDir, 'package.json');
if (fs.existsSync(packageJsonPath)) {
    try {
        const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

        // Frontend frameworks detection
        if (allDeps['react'] || allDeps['react-dom']) techStack.frontend = 'React.js';
        else if (allDeps['vue']) techStack.frontend = 'Vue.js';
        else if (allDeps['svelte']) techStack.frontend = 'Svelte';
        else if (allDeps['next']) techStack.frontend = 'Next.js (React)';
        else if (allDeps['@nuxt/kit']) techStack.frontend = 'Nuxt.js (Vue)';

        // Backend detection
        if (allDeps['express']) techStack.backend = 'Node.js (Express)';
        else if (allDeps['koa']) techStack.backend = 'Node.js (Koa)';
        else if (allDeps['nest']) techStack.backend = 'NestJS';
        else if (allDeps['fastify']) techStack.backend = 'Fastify';

        // Database detection
        if (allDeps['pg'] || allDeps['postgres'] || allDeps['sequelize']) techStack.database = 'PostgreSQL';
        else if (allDeps['mongodb'] || allDeps['mongoose']) techStack.database = 'MongoDB';
        else if (allDeps['mysql'] || allDeps['mysql2']) techStack.database = 'MySQL';
        else if (allDeps['firebase-admin'] || allDeps['firebase']) techStack.database = 'Firebase Firestore';
        else if (allDeps['sqlite3'] || allDeps['better-sqlite3']) techStack.database = 'SQLite';

        // Styling detection
        if (allDeps['tailwindcss']) techStack.styling = 'Tailwind CSS';
        else if (allDeps['sass'] || allDeps['node-sass']) techStack.styling = 'SASS/SCSS';
        else if (allDeps['@emotion/react'] || allDeps['styled-components']) techStack.styling = 'CSS-in-JS';

        // Auth detection
        if (allDeps['passport']) techStack.auth = 'Passport.js';
        else if (allDeps['jsonwebtoken']) techStack.auth = 'JWT (JSON Web Tokens)';
        else if (allDeps['@supabase/supabase-js']) {
            techStack.auth = 'Supabase Auth';
            techStack.database = 'PostgreSQL (Supabase)';
        } else if (allDeps['firebase']) {
            techStack.auth = 'Firebase Auth';
        }
    } catch (e) {
        console.warn('Could not parse package.json. Using default presets.');
    }
}

// 3. Detect styling markers in style.css or tailwind configurations
const tailwindConfigPath = path.join(projectDir, 'tailwind.config.js');
if (fs.existsSync(tailwindConfigPath)) {
    techStack.styling = 'Tailwind CSS';
}

// 4. Gather git presence
const hasGit = fs.existsSync(path.join(projectDir, '.git'));

// 5. Generate template content based on detection
const projectFolderName = path.basename(projectDir);
const defaultAppName = projectFolderName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const dnaTemplate = `# Startup DNA & Project Preferences

> [!NOTE]
> File ini dihasilkan secara otomatis oleh \`bin/init-dna.js\`. Silakan sesuaikan Profil Bisnis dan Target Pasar sesuai kebutuhan Anda.

## 1. Profil Bisnis & Target Pasar
- **Nama Proyek**: ${defaultAppName}
- **Industri**: [Tentukan Industri, contoh: E-Commerce, Fintech, HealthTech]
- **Bahasa Utama**: Bahasa Indonesia (untuk salinan/copy marketing), Bahasa Inggris (untuk kode & dokumentasi teknis)
- **Target Audiens Utama**: [Tentukan Target Audiens Utama, contoh: Mahasiswa, Ibu Rumah Tangga, Developer]

## 2. Spesifikasi Teknologi (Tech Stack Terdeteksi)
- **Frontend**: ${techStack.frontend}
- **Backend**: ${techStack.backend}
- **Database**: ${techStack.database}
- **Authentikasi**: ${techStack.auth}
- **Styling**: ${techStack.styling}
- **Version Control**: ${hasGit ? 'Git' : 'Not setup yet'}

## 3. Standar & Aturan Keamanan (Security & Compliance)
- **Aturan Global**: Selalu pastikan kredensial/API key disimpan di \`.env\` dan diakses via backend (TIDAK BOLEH bocor di client-side atau frontend).
- **Desain UI**: Mobile-first responsive, premium aesthetics, menggunakan modern typography.
- **Standar Git**: Menggunakan Conventional Commits untuk setiap commit message (e.g., \`feat:\`, \`fix:\`, \`docs:\`).
`;

// 6. Write or overwrite the dna file
fs.writeFileSync(dnaPath, dnaTemplate, 'utf8');

console.log(`\nSuccess! Startup DNA generated at: ${dnaPath}`);
console.log('Please check and adjust the business details in the generated file.');
console.log('Point your AI agents to read this file before they start coding.');
