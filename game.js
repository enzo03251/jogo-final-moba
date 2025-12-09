// ============================================
// ANIME MOBA - EPIC BATTLE ARENA
// Versão Otimizada e Corrigida
// ============================================

// ============================================
// CONFIGURAÇÕES E CONSTANTES
// ============================================
const CONFIG = {
    MAX_PARTICLES: 700,
    MAX_PROJECTILES: 200,
    CANVAS_MIN_WIDTH: 800,
    CANVAS_MAX_WIDTH: 1280,
    CANVAS_MIN_HEIGHT: 600,
    CANVAS_MAX_HEIGHT: 720,
    MINIMAP_WIDTH: 200,
    MINIMAP_HEIGHT: 150,
    TARGET_FPS: 60,
    GRID_SIZE: 50,
    BASE_MANA_REGEN: 5,
    PALADIN_REGEN_PERCENT: 0.01
};

// ============================================
// DADOS DOS CAMPEÕES
// ============================================
const champions = [
    {
        id: 'ninja',
        name: 'Ninja das Sombras',
        icon: '🥷',
        speed: 6,
        damage: 15,
        health: 80,
        mana: 100,
        description: 'Assassino veloz com alta mobilidade',
        passive: 'Velocidade Fantasma',
        passiveDesc: '+30% velocidade ao matar inimigo (5s)',
        skills: [
            { name: 'Shuriken Triplo', damage: 1, mana: 15, cooldown: 1000, type: 'triple', color: '#4a00e0' },
            { name: 'Dash Sombrio', damage: 1.8, mana: 25, cooldown: 2000, type: 'dash', color: '#8b00ff' },
            { name: 'Clone Explosivo', damage: 2.2, mana: 35, cooldown: 3000, type: 'aoe', color: '#9d4edd' },
            { name: 'Tempestade de Lâminas', damage: 4, mana: 60, cooldown: 8000, type: 'storm', color: '#ff00ff' }
        ]
    },
    {
        id: 'samurai',
        name: 'Samurai Lendário',
        icon: '⚔️',
        speed: 4,
        damage: 25,
        health: 120,
        mana: 80,
        description: 'Guerreiro corpo a corpo com alto dano',
        passive: 'Lâmina Crítica',
        passiveDesc: '25% chance de causar dano crítico (2x)',
        skills: [
            { name: 'Corte Cruzado', damage: 1.5, mana: 15, cooldown: 1000, type: 'cross', color: '#e01a4f' },
            { name: 'Golpe Giratório', damage: 2, mana: 25, cooldown: 2000, type: 'spin', color: '#ff4d6d' },
            { name: 'Contra-Ataque', damage: 2.5, mana: 35, cooldown: 3000, type: 'counter', color: '#c9184a' },
            { name: 'Corte Dimensional', damage: 5, mana: 60, cooldown: 8000, type: 'slash', color: '#800f2f' }
        ]
    },
    {
        id: 'mage',
        name: 'Arquimago Arcano',
        icon: '🔮',
        speed: 3,
        damage: 30,
        health: 70,
        mana: 150,
        description: 'Conjurador poderoso com magia devastadora',
        passive: 'Surto Arcano',
        passiveDesc: 'Skills custam -20% mana após acerto crítico',
        skills: [
            { name: 'Mísseis Arcanos', damage: 1.2, mana: 15, cooldown: 1000, type: 'missiles', color: '#f77f00' },
            { name: 'Nova de Gelo', damage: 1.7, mana: 25, cooldown: 2000, type: 'nova', color: '#00f5ff' },
            { name: 'Corrente de Raios', damage: 2.3, mana: 35, cooldown: 3000, type: 'chain', color: '#ffff00' },
            { name: 'Meteoro Devastador', damage: 4.5, mana: 60, cooldown: 8000, type: 'meteor', color: '#ff6b00' }
        ]
    },
    {
        id: 'archer',
        name: 'Arqueiro Místico',
        icon: '🏹',
        speed: 5,
        damage: 20,
        health: 85,
        mana: 90,
        description: 'Atirador de longo alcance preciso',
        passive: 'Precisão Mortal',
        passiveDesc: '+15% dano a cada 3 acertos consecutivos',
        skills: [
            { name: 'Flecha Perfurante', damage: 1.3, mana: 15, cooldown: 800, type: 'pierce', color: '#06d6a0' },
            { name: 'Chuva de Flechas', damage: 1.5, mana: 25, cooldown: 2000, type: 'rain', color: '#118ab2' },
            { name: 'Flecha Explosiva', damage: 2.5, mana: 35, cooldown: 3000, type: 'explosive', color: '#ef476f' },
            { name: 'Tiro Perfuro-Tudo', damage: 3.8, mana: 60, cooldown: 7000, type: 'snipe', color: '#ffd60a' }
        ]
    },
    {
        id: 'tank',
        name: 'Guardião de Ferro',
        icon: '🛡️',
        speed: 2,
        damage: 12,
        health: 180,
        mana: 70,
        description: 'Tanque resistente com alta defesa',
        passive: 'Armadura Impenetrável',
        passiveDesc: 'Reduz 30% do dano recebido',
        skills: [
            { name: 'Golpe de Escudo', damage: 0.8, mana: 10, cooldown: 1000, type: 'shield', color: '#8b8b8b' },
            { name: 'Muralha de Ferro', damage: 1, mana: 20, cooldown: 2500, type: 'wall', color: '#495057' },
            { name: 'Onda de Choque', damage: 1.8, mana: 30, cooldown: 3000, type: 'shockwave', color: '#6c757d' },
            { name: 'Impacto Sísmico', damage: 3, mana: 50, cooldown: 8000, type: 'quake', color: '#343a40' }
        ]
    },
    {
        id: 'assassin',
        name: 'Assassina Noturna',
        icon: '🗡️',
        speed: 7,
        damage: 22,
        health: 75,
        mana: 95,
        description: 'Assassina furtiva com dano crítico',
        passive: 'Golpe das Sombras',
        passiveDesc: 'Primeiros 3s de combate causa +50% dano',
        skills: [
            { name: 'Punhal Venenoso', damage: 1.4, mana: 15, cooldown: 900, type: 'poison', color: '#9d4edd' },
            { name: 'Passo das Sombras', damage: 1.6, mana: 25, cooldown: 1800, type: 'blink', color: '#7209b7' },
            { name: 'Marca da Morte', damage: 2.8, mana: 35, cooldown: 3000, type: 'mark', color: '#560bad' },
            { name: 'Dança Letal', damage: 4.2, mana: 60, cooldown: 7000, type: 'dance', color: '#3c096c' }
        ]
    },
    {
        id: 'necromancer',
        name: 'Necromante Sombrio',
        icon: '💀',
        speed: 3,
        damage: 18,
        health: 90,
        mana: 140,
        description: 'Invocador de mortos-vivos',
        passive: 'Colheita de Almas',
        passiveDesc: 'Recupera 5% HP máximo ao matar',
        skills: [
            { name: 'Toque Necrótico', damage: 1.1, mana: 15, cooldown: 1000, type: 'necro', color: '#2d00f7' },
            { name: 'Drenar Essência', damage: 1.5, mana: 25, cooldown: 2000, type: 'drain', color: '#5a00e6' },
            { name: 'Explosão Cadavérica', damage: 2.4, mana: 35, cooldown: 3000, type: 'corpse', color: '#8000ff' },
            { name: 'Levantar Exército', damage: 3.5, mana: 60, cooldown: 8000, type: 'army', color: '#1a0033' }
        ]
    },
    {
        id: 'paladin',
        name: 'Paladino Sagrado',
        icon: '⚜️',
        speed: 4,
        damage: 18,
        health: 130,
        mana: 110,
        description: 'Guerreiro sagrado com cura',
        passive: 'Luz Divina',
        passiveDesc: 'Regenera 1% HP por segundo',
        skills: [
            { name: 'Martelo Sagrado', damage: 1.3, mana: 15, cooldown: 1000, type: 'hammer', color: '#ffd60a' },
            { name: 'Cura Divina', damage: 0, mana: 30, cooldown: 2500, type: 'heal', color: '#90e0ef' },
            { name: 'Escudo da Fé', damage: 1.8, mana: 35, cooldown: 3000, type: 'blessing', color: '#00b4d8' },
            { name: 'Julgamento Final', damage: 3.8, mana: 60, cooldown: 8000, type: 'judgment', color: '#ffd700' }
        ]
    }
];

// ============================================
// LOJA DE ITENS
// ============================================
const shopItems = [
    { id: 'sword', name: 'Espada Longa', icon: '⚔️', cost: 400, category: 'Arma', description: 'Espada básica de combate', bonus: { damage: 10 } },
    { id: 'katana', name: 'Katana Lendária', icon: '🗡️', cost: 800, category: 'Arma', description: 'Lâmina afiada do oriente', bonus: { damage: 20, speed: 1 } },
    { id: 'excalibur', name: 'Excalibur', icon: '⚜️', cost: 1500, category: 'Arma', description: 'Espada lendária do rei', bonus: { damage: 35, health: 30 } },
    { id: 'staff', name: 'Cajado Arcano', icon: '🪄', cost: 700, category: 'Arma', description: 'Amplifica poderes mágicos', bonus: { damage: 15, mana: 40 } },
    { id: 'leather', name: 'Armadura de Couro', icon: '🦺', cost: 350, category: 'Armadura', description: 'Proteção leve e flexível', bonus: { health: 40, speed: 1 } },
    { id: 'armor', name: 'Armadura de Aço', icon: '🛡️', cost: 600, category: 'Armadura', description: 'Armadura pesada e resistente', bonus: { health: 80 } },
    { id: 'dragonarmor', name: 'Armadura de Dragão', icon: '🐉', cost: 1200, category: 'Armadura', description: 'Feita de escamas de dragão', bonus: { health: 150, damage: 10 } },
    { id: 'boots', name: 'Botas Rápidas', icon: '👢', cost: 300, category: 'Botas', description: 'Aumenta mobilidade', bonus: { speed: 2 } },
    { id: 'windboots', name: 'Botas do Vento', icon: '🌪️', cost: 650, category: 'Botas', description: 'Leveza sobrenatural', bonus: { speed: 4, damage: 5 } },
    { id: 'shadowboots', name: 'Botas das Sombras', icon: '👟', cost: 900, category: 'Botas', description: 'Velocidade do assassino', bonus: { speed: 6, health: 20 } },
    { id: 'ring', name: 'Anel de Mana', icon: '💍', cost: 450, category: 'Acessório', description: 'Cristaliza energia mágica', bonus: { mana: 50 } },
    { id: 'amulet', name: 'Amuleto Místico', icon: '📿', cost: 750, category: 'Acessório', description: 'Poder arcano concentrado', bonus: { damage: 15, mana: 40 } },
    { id: 'crown', name: 'Coroa do Poder', icon: '👑', cost: 1800, category: 'Acessório', description: 'Para verdadeiros campeões', bonus: { damage: 30, health: 50, mana: 50, speed: 2 } },
    { id: 'orb', name: 'Orbe da Vida', icon: '🔮', cost: 500, category: 'Acessório', description: 'Pulsa com energia vital', bonus: { health: 60, mana: 30 } },
    { id: 'healthpotion', name: 'Poção de Vida', icon: '🧪', cost: 150, category: 'Consumível', description: 'Restaura vida instantaneamente', consumable: true, bonus: { healthRegen: 50 } },
    { id: 'megapotion', name: 'Mega Poção', icon: '⚗️', cost: 300, category: 'Consumível', description: 'Cura completa', consumable: true, bonus: { healthRegen: 150 } },
    { id: 'manapotion', name: 'Poção de Mana', icon: '💧', cost: 120, category: 'Consumível', description: 'Restaura energia mágica', consumable: true, bonus: { manaRegen: 60 } },
    { id: 'elixir', name: 'Elixir Supremo', icon: '🍷', cost: 500, category: 'Consumível', description: 'Poder temporário intenso', consumable: true, bonus: { damageBoost: 20, speedBoost: 2, duration: 30000 } }
];

// ============================================
// BANCO DE DADOS
// ============================================
const gameDB = {
    users: [],
    scores: [],
    
    addUser(username) {
        const user = { 
            id: Date.now(), 
            username: username.trim(), 
            createdAt: new Date() 
        };
        this.users.push(user);
        return user;
    },
    
    saveScore(userId, username, score, character, stats) {
        const scoreEntry = { 
            userId, 
            username, 
            score, 
            character, 
            stats, 
            date: new Date() 
        };
        this.scores.push(scoreEntry);
        this.scores.sort((a, b) => b.score - a.score);
    },
    
    getTopScores(limit = 10) {
        return this.scores.slice(0, limit);
    }
};

// ============================================
// GERENCIADOR DE ESTADO
// ============================================
class GameStateManager {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.player = null;
        this.enemies = [];
        this.projectiles = [];
        this.particles = [];
        this.score = 0;
        this.gold = 0;
        this.level = 1;
        this.exp = 0;
        this.expToLevel = 100;
        this.wave = 1;
        this.running = false;
        this.kills = 0;
        this.items = [];
        this.cooldowns = { 1: 0, 2: 0, 3: 0, 4: 0 };
        this.passiveActive = false;
        this.passiveTimer = 0;
        this.consecutiveHits = 0;
        this.lastHitTime = 0;
        this.manaCostReduction = 1;
        this.combatStartTime = 0;
        this.lastFrameTime = 0;
        this.temporaryBuffs = [];
    }
}

// ============================================
// VARIÁVEIS GLOBAIS
// ============================================
let currentUser = null;
let selectedCharacter = null;
let selectedDifficulty = 'normal';
let animationFrameId = null;
let activeIntervals = [];
let activeTimeouts = [];

const gameState = new GameStateManager();

let canvas = null;
let ctx = null;
let miniMap = null;
let miniCtx = null;

// ============================================
// CLASSES
// ============================================
class Character {
    constructor(x, y, champData, isPlayer = false) {
        this.x = x;
        this.y = y;
        this.champData = champData;
        this.isPlayer = isPlayer;
        this.health = champData.health;
        this.maxHealth = champData.health;
        this.mana = champData.mana;
        this.maxMana = champData.mana;
        this.speed = champData.speed;
        this.size = 25;
        this.damage = champData.damage;
        this.color = this.getColor();
        this.angle = 0;
        this.baseSpeed = champData.speed;
        this.baseDamage = champData.damage;
    }

    getColor() {
        const colors = {
            ninja: '#4a00e0',
            samurai: '#e01a4f',
            mage: '#f77f00',
            archer: '#06d6a0',
            tank: '#8b8b8b',
            assassin: '#9d4edd',
            necromancer: '#2d00f7',
            paladin: '#ffd700'
        };
        return colors[this.champData.id] || '#666';
    }

    draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        ctx.fillStyle = this.isPlayer ? this.color : '#8b0000';
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.champData.icon, 0, 0);
        
        ctx.restore();

        this.drawHealthBar();
    }
    
    drawHealthBar() {
        const barWidth = 50;
        const barHeight = 8;
        const barX = this.x - barWidth / 2;
        const barY = this.y - 45;
        
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(barX, barY, barWidth, barHeight);
        
        const healthPercent = Math.max(0, this.health) / this.maxHealth;
        ctx.fillStyle = this.isPlayer ? '#00ff00' : '#ff0000';
        ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);
        
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.strokeRect(barX, barY, barWidth, barHeight);
    }

    update(deltaTime) {
        if (!this.isPlayer && gameState.player) {
            const dx = gameState.player.x - this.x;
            const dy = gameState.player.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist > 0) {
                this.angle = Math.atan2(dy, dx);
            }
            
            if (dist > 60) {
                const frameFactor = deltaTime / (1000 / CONFIG.TARGET_FPS);
                const moveSpeed = this.speed * 0.5 * frameFactor;
                this.x += (dx / dist) * moveSpeed;
                this.y += (dy / dist) * moveSpeed;
                
                this.constrainToCanvas();
            }
        }
    }
    
    constrainToCanvas() {
        if (!canvas) return;
        this.x = Math.max(this.size, Math.min(canvas.width - this.size, this.x));
        this.y = Math.max(this.size, Math.min(canvas.height - this.size, this.y));
    }
}

class Projectile {
    constructor(x, y, targetX, targetY, damage, color) {
        this.x = x;
        this.y = y;
        this.damage = damage;
        this.color = color;
        
        const angle = Math.atan2(targetY - y, targetX - x);
        const baseSpeed = 10;
        this.vx = Math.cos(angle) * baseSpeed;
        this.vy = Math.sin(angle) * baseSpeed;
        this.size = 10;
        this.life = 0;
        this.maxLife = 120;
    }

    draw() {
        if (!ctx) return;
        
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        if (this.life % 3 === 0) {
            ParticleManager.create(this.x, this.y, this.color);
        }
    }

    update(deltaTime) {
        const frameFactor = deltaTime / (1000 / CONFIG.TARGET_FPS);
        this.x += this.vx * frameFactor;
        this.y += this.vy * frameFactor;
        this.life++;
    }

    isOutOfBounds() {
        if (!canvas) return this.life > this.maxLife;
        
        return this.x < -50 || 
               this.x > canvas.width + 50 || 
               this.y < -50 || 
               this.y > canvas.height + 50 || 
               this.life > this.maxLife;
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 5 + 2;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.life = 30;
    }

    draw() {
        if (!ctx) return;
        
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, this.life / 30);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    update(deltaTime) {
        const frameFactor = deltaTime / (1000 / CONFIG.TARGET_FPS);
        this.x += this.vx * frameFactor;
        this.y += this.vy * frameFactor;
        this.life--;
    }
}

// ============================================
// GERENCIADORES
// ============================================
class ParticleManager {
    static create(x, y, color) {
        if (!gameState.particles) gameState.particles = [];
        if (gameState.particles.length >= CONFIG.MAX_PARTICLES) return;
        gameState.particles.push(new Particle(x, y, color));
    }
    
    static createBurst(x, y, color, count = 10) {
        for (let i = 0; i < count; i++) {
            this.create(x, y, color);
        }
    }
}

class UIManager {
    static showDamageNumber(x, y, damage) {
        try {
            const div = document.createElement('div');
            div.className = 'damage-number';
            div.textContent = typeof damage === 'number' ? `-${Math.round(damage)}` : damage;
            
            const rect = canvas?.getBoundingClientRect() || { left: 0, top: 0 };
            div.style.left = `${rect.left + x - 20}px`;
            div.style.top = `${rect.top + y - 40}px`;
            
            document.body.appendChild(div);
            
            const timeout = setTimeout(() => div.remove(), 1000);
            activeTimeouts.push(timeout);
        } catch (e) {
            console.warn('showDamageNumber falhou:', e);
        }
    }
    
    static showLevelUp() {
        const div = document.createElement('div');
        div.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:3em;color:#f093fb;text-shadow:0 0 20px #f093fb;animation:wave-pulse 2s ease-in-out;pointer-events:none;z-index:9999';
        div.textContent = `LEVEL UP! ${gameState.level}`;
        document.body.appendChild(div);
        
        const timeout = setTimeout(() => div.remove(), 2000);
        activeTimeouts.push(timeout);
    }
    
    static showWaveIndicator() {
        const indicator = document.getElementById('waveIndicator');
        if (!indicator) return;
        
        indicator.textContent = `WAVE ${gameState.wave}`;
        indicator.style.display = 'block';
        
        const timeout = setTimeout(() => {
            indicator.style.display = 'none';
        }, 2000);
        activeTimeouts.push(timeout);
    }
    
    static updateUI() {
        if (!gameState.player) return;

        this.updateHealthBar();
        this.updateManaBar();
        this.updateExpBar();
        this.updateStats();
        this.updateEnemyInfo();
    }
    
    static updateHealthBar() {
        const playerHealthEl = document.getElementById('playerHealth');
        const healthText = document.getElementById('healthText');
        
        if (playerHealthEl && healthText) {
            const healthPercent = (gameState.player.health / gameState.player.maxHealth * 100);
            playerHealthEl.style.width = `${Math.max(0, Math.min(100, healthPercent))}%`;
            healthText.textContent = `${Math.round(gameState.player.health)}/${gameState.player.maxHealth}`;
        }
    }
    
    static updateManaBar() {
        const playerManaEl = document.getElementById('playerMana');
        const manaText = document.getElementById('manaText');
        
        if (playerManaEl && manaText) {
            const manaPercent = (gameState.player.mana / gameState.player.maxMana * 100);
            playerManaEl.style.width = `${Math.max(0, Math.min(100, manaPercent))}%`;
            manaText.textContent = `${Math.round(gameState.player.mana)}/${gameState.player.maxMana}`;
        }
    }
    
    static updateExpBar() {
        const playerExpEl = document.getElementById('playerExp');
        const expText = document.getElementById('expText');
        
        if (playerExpEl && expText) {
            const expPercent = (gameState.exp / gameState.expToLevel * 100);
            playerExpEl.style.width = `${Math.max(0, Math.min(100, expPercent))}%`;
            expText.textContent = `${Math.round(gameState.exp)}/${gameState.expToLevel}`;
        }
    }
    
    static updateStats() {
        const playerScoreEl = document.getElementById('playerScore');
        const playerLevelEl = document.getElementById('playerLevel');
        const goldAmountEl = document.getElementById('goldAmount');
        const enemyCountEl = document.getElementById('enemyCount');

        if (playerScoreEl) playerScoreEl.textContent = `Pontos: ${gameState.score} | Wave: ${gameState.wave}`;
        if (playerLevelEl) playerLevelEl.textContent = gameState.level;
        if (goldAmountEl) goldAmountEl.textContent = gameState.gold;
        if (enemyCountEl) enemyCountEl.textContent = gameState.enemies.length;
    }
    
    static updateEnemyInfo() {
        const enemyHealthEl = document.getElementById('enemyHealth');
        const enemyHealthText = document.getElementById('enemyHealthText');
        const enemyNameEl = document.getElementById('enemyName');

        if (gameState.enemies.length > 0) {
            const boss = gameState.enemies[0];
            const bossHealthPercent = (boss.health / boss.maxHealth * 100);
            
            if (enemyHealthEl) enemyHealthEl.style.width = `${Math.max(0, Math.min(100, bossHealthPercent))}%`;
            if (enemyHealthText) enemyHealthText.textContent = `${Math.round(boss.health)}/${Math.round(boss.maxHealth)}`;
            if (enemyNameEl) enemyNameEl.textContent = boss.champData.name;
        } else {
            if (enemyHealthEl) enemyHealthEl.style.width = '0%';
            if (enemyHealthText) enemyHealthText.textContent = '';
            if (enemyNameEl) enemyNameEl.textContent = 'Inimigo';
        }
    }
}

class TimerManager {
    static clearAll() {
        activeIntervals.forEach(interval => clearInterval(interval));
        activeTimeouts.forEach(timeout => clearTimeout(timeout));
        activeIntervals = [];
        activeTimeouts = [];
    }
}

// ============================================
// FUNÇÕES DE UTILIDADE
// ============================================
function getDifficultyMultiplier() {
    const multipliers = {
        easy: { hp: 0.7, damage: 0.7, gold: 1.5, exp: 1.2 },
        normal: { hp: 1, damage: 1, gold: 1, exp: 1 },
        hard: { hp: 1.5, damage: 1.5, gold: 0.8, exp: 0.9 },
        extreme: { hp: 2, damage: 2, gold: 0.6, exp: 0.8 }
    };
    return multipliers[selectedDifficulty] || multipliers.normal;
}

function setDifficulty(diff) {
    selectedDifficulty = diff;
    const names = { 
        easy: '😊 Fácil', 
        normal: '😐 Normal', 
        hard: '😈 Difícil', 
        extreme: '💀 EXTREMO' 
    };
    const el = document.getElementById('difficultySelected');
    if (el) el.textContent = `Dificuldade: ${names[diff] || names.normal}`;
}

// ============================================
// FUNÇÕES DE UI
// ============================================
function login() {
    const usernameEl = document.getElementById('username');
    const username = usernameEl?.value.trim() || '';
    
    if (!username) {
        alert('Por favor, digite um nome!');
        return;
    }
    
    const diffTextEl = document.getElementById('difficultySelected');
    const diffText = diffTextEl?.textContent || '';
    
    if (!diffText || !diffText.includes('Dificuldade:')) {
        alert('Por favor, escolha uma dificuldade!');
        return;
    }
    
    currentUser = gameDB.addUser(username);
    
    const loginScreen = document.getElementById('loginScreen');
    const charSelect = document.getElementById('characterSelect');
    
    loginScreen?.classList.remove('active');
    charSelect?.classList.add('active');
    
    loadCharacters();
}

function loadCharacters() {
    const grid = document.getElementById('characterGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    champions.forEach(champ => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.dataset.id = champ.id;
        card.onclick = () => selectCharacter(champ.id);
        
        const speedStars = '★'.repeat(Math.min(5, Math.round(champ.speed)));
        const damageStars = '★'.repeat(Math.min(5, Math.round(champ.damage / 6)));
        const healthStars = '★'.repeat(Math.min(5, Math.round(champ.health / 30)));
        
        card.innerHTML = `
            <div class="character-icon">${champ.icon}</div>
            <h3>${champ.name}</h3>
            <div class="character-stats">   
                <p>⚡ Velocidade: ${speedStars}</p>
                <p>⚔️ Dano: ${damageStars}</p>
                <p>❤️ Vida: ${healthStars}</p>
                <p style="margin-top: 8px; font-style: italic; font-size: 0.85em;">${champ.description}</p>
                <p style="margin-top: 8px; color: #4caf50; font-weight: bold;">
                    <span style="color: #ffd700;">⚡ Passiva:</span> ${champ.passive}
                </p>
                <p style="font-size: 0.8em; color: rgba(255,255,255,0.7);">${champ.passiveDesc}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function selectCharacter(id) {
    selectedCharacter = champions.find(c => c.id === id);
    
    document.querySelectorAll('.character-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const sel = document.querySelector(`.character-card[data-id="${id}"]`);
    sel?.classList.add('selected');
}

function startGame() {
    if (!selectedCharacter) {
        alert('Escolha um campeão!');
        return;
    }
    
    const charSelect = document.getElementById('characterSelect');
    const gameScreen = document.getElementById('gameScreen');
    
    charSelect?.classList.remove('active');
    gameScreen?.classList.add('active');
    
    initGame();
}

// ============================================
// LOJA
// ============================================
function openShop() {
    if (!gameState.running) return;
    
    gameState.running = false;
    
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    TimerManager.clearAll();

    const shopScreen = document.getElementById('shopScreen');
    const shopGold = document.getElementById('shopGold');
    
    shopScreen?.classList.add('active');
    if (shopGold) shopGold.textContent = `💰 Ouro: ${gameState.gold}`;

    const shopDiv = document.getElementById('shopItems');
    if (!shopDiv) return;
    
    shopDiv.innerHTML = '';

    shopItems.forEach(item => {
        const owned = gameState.items.includes(item.id);
        const card = document.createElement('div');
        card.className = 'item-card' + (owned ? ' owned' : '');
        
        const bonusText = item.bonus 
            ? Object.entries(item.bonus)
                .filter(([k]) => k !== 'duration')
                .map(([k, v]) => `+${v} ${k}`)
                .join(', ') 
            : '';
        
        card.innerHTML = `
            <div style="font-size: 3em;">${item.icon}</div>
            <h3>${item.name}</h3>
            <p>💰 ${item.cost} Ouro</p>
            <p style="font-size: 0.9em; color: #4caf50;">${bonusText}</p>
            ${item.consumable 
                ? '<p style="color: #ffd166;">Consumível</p>' 
                : (owned ? '<p style="color: #4caf50;">✓ Comprado</p>' : '')}
        `;
        
        if (!owned || item.consumable) {
            card.onclick = () => buyItem(item);
        }
        
        shopDiv.appendChild(card);
    });
}

function applyConsumable(item) {
    if (!gameState.player) return;
    
    const bonus = item.bonus || {};
    
    if (bonus.healthRegen) {
        gameState.player.health = Math.min(
            gameState.player.maxHealth,
            gameState.player.health + bonus.healthRegen
        );
    }
    
    if (bonus.manaRegen) {
        gameState.player.mana = Math.min(
            gameState.player.maxMana,
            gameState.player.mana + bonus.manaRegen
        );
    }
    
    if (item.id === 'elixir') {
        const damageBoost = bonus.damageBoost || 0;
        const speedBoost = bonus.speedBoost || 0;
        const duration = bonus.duration || 10000;
        
        const buff = {
            type: 'elixir',
            endTime: Date.now() + duration,
            damageBoost,
            speedBoost
        };
        
        gameState.temporaryBuffs.push(buff);
        gameState.player.damage += damageBoost;
        gameState.player.speed += speedBoost;
    }
}

function buyItem(item) {
    if (gameState.gold < item.cost) {
        alert('Ouro insuficiente!');
        return;
    }

    if (item.consumable) {
        gameState.gold -= item.cost;
        applyConsumable(item);
        openShop();
        return;
    }

    if (!gameState.items.includes(item.id)) {
        gameState.gold -= item.cost;
        gameState.items.push(item.id);

        if (gameState.player) {
            const bonus = item.bonus || {};
            
            if (bonus.damage) gameState.player.damage += bonus.damage;
            if (bonus.health) {
                gameState.player.maxHealth += bonus.health;
                gameState.player.health += bonus.health;
            }
            if (bonus.speed) gameState.player.speed += bonus.speed;
            if (bonus.mana) {
                gameState.player.maxMana += bonus.mana;
                gameState.player.mana += bonus.mana;
            }
        }

        openShop();
    }
}

function closeShop() {
    const shopScreen = document.getElementById('shopScreen');
    shopScreen?.classList.remove('active');
    
    gameState.running = true;
    gameState.lastFrameTime = Date.now();
    
    if (!animationFrameId) {
        gameLoop();
    }
}

// ============================================
// LEADERBOARD
// ============================================
function showLeaderboard() {
    const scores = gameDB.getTopScores();
    const list = document.getElementById('leaderboardList');
    if (!list) return;
    
    list.innerHTML = '';

    if (scores.length === 0) {
        list.innerHTML = '<p>Nenhuma pontuação ainda. Seja o primeiro!</p>';
    } else {
        scores.forEach((score, index) => {
            const item = document.createElement('div');
            item.className = 'leaderboard-item' + (index < 3 ? ' top3' : '');
            const medals = ['🥇', '🥈', '🥉'];
            
            item.innerHTML = `
                <span>${medals[index] || `${index + 1}.`} ${score.username} - ${score.character}</span>
                <span>${score.score.toLocaleString()} pts</span>
            `;
            
            list.appendChild(item);
        });
    }

    const board = document.getElementById('leaderboard');
    if (board) board.style.display = 'block';
}

function hideLeaderboard() {
    const board = document.getElementById('leaderboard');
    if (board) board.style.display = 'none';
}

// ============================================
// INICIALIZAÇÃO DO JOGO
// ============================================
function initGame() {
    TimerManager.clearAll();
    
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    if (!canvas || !ctx) {
        initElementsIfNeeded();
    }
    
    gameState.reset();
    gameState.player = new Character(
        canvas.width / 2, 
        canvas.height / 2, 
        selectedCharacter, 
        true
    );
    gameState.running = true;
    gameState.combatStartTime = Date.now();
    gameState.lastFrameTime = Date.now();

    const playerNameEl = document.getElementById('playerName');
    if (playerNameEl) playerNameEl.textContent = currentUser?.username || 'Jogador';
    
    const playerLevelEl = document.getElementById('playerLevel');
    if (playerLevelEl) playerLevelEl.textContent = gameState.level;
    
    updateSkillUI();
    spawnEnemies();
    gameLoop();
}

function spawnEnemies() {
    UIManager.showWaveIndicator();
    
    const difficulty = getDifficultyMultiplier();
    const count = 3 + gameState.wave * 2;

    for (let i = 0; i < count; i++) {
        const timeout = setTimeout(() => {
            if (!gameState.running) return;
            
            const side = Math.floor(Math.random() * 4);
            let x, y;

            switch (side) {
                case 0: 
                    x = Math.random() * canvas.width; 
                    y = -30; 
                    break;
                case 1: 
                    x = canvas.width + 30; 
                    y = Math.random() * canvas.height; 
                    break;
                case 2: 
                    x = Math.random() * canvas.width; 
                    y = canvas.height + 30; 
                    break;
                case 3: 
                    x = -30; 
                    y = Math.random() * canvas.height; 
                    break;
            }

            const enemyChamp = champions[Math.floor(Math.random() * champions.length)];
            const enemy = new Character(x, y, enemyChamp, false);

            enemy.maxHealth = enemy.maxHealth * (1 + gameState.wave * 0.3) * difficulty.hp;
            enemy.health = enemy.maxHealth;
            enemy.damage = enemy.damage * (1 + gameState.wave * 0.2) * difficulty.damage;

            gameState.enemies.push(enemy);
        }, i * 500);
        
        activeTimeouts.push(timeout);
    }
}

function levelUp() {
    gameState.level++;
    gameState.exp = 0;
    gameState.expToLevel = Math.floor(gameState.expToLevel * 1.5);
    
    if (gameState.player) {
        gameState.player.maxHealth += 20;
        gameState.player.health = gameState.player.maxHealth;
        gameState.player.maxMana += 15;
        gameState.player.mana = gameState.player.maxMana;
        gameState.player.damage += 5;
    }

    UIManager.showLevelUp();
}

// ============================================
// GAME OVER
// ============================================
function endGame(won) {
    gameState.running = false;
    TimerManager.clearAll();
    
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    const stats = {
        kills: gameState.kills,
        wave: gameState.wave,
        level: gameState.level
    };
    
    gameDB.saveScore(
        currentUser?.id || 0,
        currentUser?.username || 'Anônimo',
        gameState.score,
        selectedCharacter?.name || 'N/A',
        stats
    );

    const gameScreen = document.getElementById('gameScreen');
    const gameOver = document.getElementById('gameOver');
    
    gameScreen?.classList.remove('active');
    gameOver?.classList.add('active');

    const resultText = document.getElementById('resultText');
    const finalScore = document.getElementById('finalScore');
    const statsDisplay = document.getElementById('statsDisplay');
    
    if (resultText) resultText.textContent = won ? '🎉 VITÓRIA ÉPICA!' : '💀 DERROTA';
    if (finalScore) finalScore.textContent = `Pontuação Final: ${gameState.score.toLocaleString()} pontos`;
    if (statsDisplay) {
        statsDisplay.innerHTML = `
            <p>🎯 Abates: ${stats.kills}</p>
            <p>🌊 Waves Completadas: ${stats.wave}</p>
            <p>⭐ Nível Alcançado: ${stats.level}</p>
            <p>💰 Ouro Coletado: ${gameState.gold}</p>
        `;
    }
}

function restartGame() {
    const gameOver = document.getElementById('gameOver');
    const charSelect = document.getElementById('characterSelect');
    
    gameOver?.classList.remove('active');
    charSelect?.classList.add('active');
}

function backToMenu() {
    const gameOver = document.getElementById('gameOver');
    const loginScreen = document.getElementById('loginScreen');
    
    gameOver?.classList.remove('active');
    loginScreen?.classList.add('active');
    
    currentUser = null;
    selectedCharacter = null;
    selectedDifficulty = 'normal';
    
    const diffEl = document.getElementById('difficultySelected');
    if (diffEl) diffEl.textContent = '';
}

// ============================================
// CONTROLES
// ============================================
const keys = {};

document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;

    if (gameState.running) {
        if (['1', '2', '3', '4'].includes(e.key)) {
            useSkill(parseInt(e.key));
        }
        if (e.key.toLowerCase() === 'b') {
            openShop();
        }
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

// ============================================
// SISTEMA DE SKILLS
// ============================================
function updateSkillUI() {
    if (!selectedCharacter) return;
    
    selectedCharacter.skills.forEach((skill, index) => {
        const btn = document.getElementById(`skill${index + 1}`);
        if (btn) {
            btn.textContent = `${skill.name} (${index + 1})`;
            btn.title = `${skill.name} - ${skill.mana} Mana - Cooldown: ${skill.cooldown/1000}s`;
        }
    });
}

function useSkill(skillNum) {
    if (!gameState.running || !gameState.player || !selectedCharacter) return;
    if (gameState.cooldowns[skillNum] > 0) return;

    const skill = selectedCharacter.skills[skillNum - 1];
    if (!skill) return;

    const manaCost = Math.floor(skill.mana * gameState.manaCostReduction);

    if (gameState.player.mana < manaCost) return;

    gameState.player.mana -= manaCost;
    gameState.cooldowns[skillNum] = skill.cooldown;

    const btn = document.getElementById(`skill${skillNum}`);
    if (btn) {
        btn.classList.add('cooldown');
        btn.disabled = true;
        
        const overlay = document.createElement('div');
        overlay.className = 'cooldown-overlay';
        btn.appendChild(overlay);
    }

    if (skill.type === 'heal') {
        const healAmount = gameState.player.maxHealth * 0.3;
        gameState.player.health = Math.min(
            gameState.player.maxHealth, 
            gameState.player.health + healAmount
        );
        ParticleManager.createBurst(gameState.player.x, gameState.player.y, '#90e0ef', 30);
        UIManager.showDamageNumber(gameState.player.x, gameState.player.y - 50, `+${Math.round(healAmount)}`);
        UIManager.updateUI();
        return;
    }

    if (skill.type === 'dash' && gameState.enemies.length > 0) {
        const target = gameState.enemies[0];
        const dx = target.x - gameState.player.x;
        const dy = target.y - gameState.player.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        
        const dashDistance = 150;
        gameState.player.x += (dx / dist) * dashDistance;
        gameState.player.y += (dy / dist) * dashDistance;
        
        gameState.player.constrainToCanvas();
        ParticleManager.createBurst(gameState.player.x, gameState.player.y, skill.color, 20);
    }

    if (gameState.enemies.length > 0) {
        let baseDamage = gameState.player.damage * skill.damage;

        if (selectedCharacter.id === 'samurai' && Math.random() < 0.25) {
            baseDamage *= 2;
            UIManager.showDamageNumber(gameState.player.x, gameState.player.y - 50, 'CRÍTICO!');
        }

        if (selectedCharacter.id === 'archer') {
            const bonus = Math.floor(gameState.consecutiveHits / 3) * 0.15;
            baseDamage *= (1 + bonus);
        }

        if (selectedCharacter.id === 'assassin') {
            const timeSinceCombat = Date.now() - gameState.combatStartTime;
            if (timeSinceCombat < 3000) {
                baseDamage *= 1.5;
            }
        }

        executeSkillAttack(skill, baseDamage);
    }

    UIManager.updateUI();
}

function executeSkillAttack(skill, baseDamage) {
    const projectileTypes = {
        triple: () => createMultipleProjectiles(3, baseDamage / 3, skill.color, 150),
        missiles: () => createMultipleProjectiles(3, baseDamage / 3, skill.color, 150),
        aoe: () => createAOEProjectiles(5, baseDamage * 0.7, skill.color),
        spin: () => createAOEProjectiles(5, baseDamage * 0.7, skill.color),
        nova: () => createAOEProjectiles(5, baseDamage * 0.7, skill.color),
        rain: () => createAOEProjectiles(5, baseDamage * 0.7, skill.color),
        storm: () => createAllEnemyProjectiles(baseDamage, skill.color),
        meteor: () => createAllEnemyProjectiles(baseDamage, skill.color),
        judgment: () => createAllEnemyProjectiles(baseDamage, skill.color),
        army: () => createAllEnemyProjectiles(baseDamage, skill.color),
        chain: () => createChainProjectiles(baseDamage * 0.6, skill.color),
        default: () => createSingleProjectile(baseDamage, skill.color)
    };

    const attackFunction = projectileTypes[skill.type] || projectileTypes.default;
    attackFunction();
}

function createMultipleProjectiles(count, damage, color, delay) {
    for (let i = 0; i < count; i++) {
        const timeout = setTimeout(() => {
            if (gameState.enemies.length > 0 && gameState.running) {
                const target = gameState.enemies[Math.floor(Math.random() * gameState.enemies.length)];
                if (gameState.projectiles.length < CONFIG.MAX_PROJECTILES) {
                    gameState.projectiles.push(new Projectile(
                        gameState.player.x, 
                        gameState.player.y,
                        target.x, 
                        target.y, 
                        damage, 
                        color
                    ));
                }
            }
        }, i * delay);
        activeTimeouts.push(timeout);
    }
}

function createAOEProjectiles(maxCount, damage, color) {
    gameState.enemies.slice(0, maxCount).forEach(enemy => {
        if (gameState.projectiles.length < CONFIG.MAX_PROJECTILES) {
            gameState.projectiles.push(new Projectile(
                gameState.player.x, 
                gameState.player.y,
                enemy.x, 
                enemy.y, 
                damage, 
                color
            ));
        }
    });
}

function createAllEnemyProjectiles(damage, color) {
    gameState.enemies.forEach(enemy => {
        if (gameState.projectiles.length < CONFIG.MAX_PROJECTILES) {
            gameState.projectiles.push(new Projectile(
                gameState.player.x, 
                gameState.player.y,
                enemy.x, 
                enemy.y, 
                damage, 
                color
            ));
        }
    });
}

function createChainProjectiles(damage, color) {
    let currentTarget = 0;
    const maxTargets = Math.min(4, gameState.enemies.length);
    
    const chainInterval = setInterval(() => {
        if (currentTarget >= maxTargets || !gameState.running) {
            clearInterval(chainInterval);
            return;
        }
        
        if (gameState.enemies[currentTarget]) {
            const enemy = gameState.enemies[currentTarget];
            if (gameState.projectiles.length < CONFIG.MAX_PROJECTILES) {
                gameState.projectiles.push(new Projectile(
                    gameState.player.x, 
                    gameState.player.y,
                    enemy.x, 
                    enemy.y, 
                    damage, 
                    color
                ));
            }
        }
        currentTarget++;
    }, 200);
    
    activeIntervals.push(chainInterval);
}

function createSingleProjectile(damage, color) {
    if (gameState.enemies.length > 0 && gameState.projectiles.length < CONFIG.MAX_PROJECTILES) {
        const target = gameState.enemies[0];
        gameState.projectiles.push(new Projectile(
            gameState.player.x, 
            gameState.player.y,
            target.x, 
            target.y, 
            damage, 
            color
        ));
    }
}

// ============================================
// MINI MAPA
// ============================================
function drawMiniMap() {
    if (!miniCtx || !miniMap || !canvas) return;
    
    miniCtx.clearRect(0, 0, miniMap.width, miniMap.height);
    miniCtx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    miniCtx.fillRect(0, 0, miniMap.width, miniMap.height);

    const scaleX = miniMap.width / canvas.width;
    const scaleY = miniMap.height / canvas.height;

    if (gameState.player) {
        miniCtx.fillStyle = '#00ff00';
        miniCtx.beginPath();
        miniCtx.arc(
            gameState.player.x * scaleX, 
            gameState.player.y * scaleY, 
            3, 
            0, 
            Math.PI * 2
        );
        miniCtx.fill();
    }

    miniCtx.fillStyle = '#ff0000';
    gameState.enemies.forEach(enemy => {
        miniCtx.beginPath();
        miniCtx.arc(
            enemy.x * scaleX, 
            enemy.y * scaleY, 
            2, 
            0, 
            Math.PI * 2
        );
        miniCtx.fill();
    });
}

// ============================================
// GAME LOOP PRINCIPAL
// ============================================
function updateCooldowns(deltaTime) {
    Object.keys(gameState.cooldowns).forEach(key => {
        if (gameState.cooldowns[key] > 0) {
            gameState.cooldowns[key] = Math.max(0, gameState.cooldowns[key] - deltaTime);
            
            const btn = document.getElementById(`skill${key}`);
            if (btn) {
                const overlay = btn.querySelector('.cooldown-overlay');
                if (gameState.cooldowns[key] > 0) {
                    if (overlay) {
                        overlay.textContent = Math.ceil(gameState.cooldowns[key] / 1000);
                    }
                } else {
                    btn.classList.remove('cooldown');
                    btn.disabled = false;
                    overlay?.remove();
                }
            }
        }
    });
}

function updateTemporaryBuffs() {
    const now = Date.now();
    gameState.temporaryBuffs = gameState.temporaryBuffs.filter(buff => {
        if (now >= buff.endTime) {
            if (buff.type === 'elixir' && gameState.player) {
                gameState.player.damage = Math.max(0, gameState.player.damage - buff.damageBoost);
                gameState.player.speed = Math.max(0, gameState.player.speed - buff.speedBoost);
            }
            return false;
        }
        return true;
    });
}

function drawBackground() {
    const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
    );
    gradient.addColorStop(0, '#2d3561');
    gradient.addColorStop(1, '#1a1a2e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(102, 126, 234, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < canvas.width; i += CONFIG.GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    
    for (let i = 0; i < canvas.height; i += CONFIG.GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
}

function updatePlayer(deltaTime) {
    if (!gameState.player) return;
    
    const moveSpeed = gameState.player.speed;
    const frameFactor = deltaTime / (1000 / CONFIG.TARGET_FPS);

    if (keys['arrowup'] || keys['w']) {
        gameState.player.y = Math.max(
            gameState.player.size, 
            gameState.player.y - moveSpeed * frameFactor
        );
    }
    if (keys['arrowdown'] || keys['s']) {
        gameState.player.y = Math.min(
            canvas.height - gameState.player.size, 
            gameState.player.y + moveSpeed * frameFactor
        );
    }
    if (keys['arrowleft'] || keys['a']) {
        gameState.player.x = Math.max(
            gameState.player.size, 
            gameState.player.x - moveSpeed * frameFactor
        );
    }
    if (keys['arrowright'] || keys['d']) {
        gameState.player.x = Math.min(
            canvas.width - gameState.player.size, 
            gameState.player.x + moveSpeed * frameFactor
        );
    }
    
    gameState.player.draw();
}

function updateEnemies(deltaTime) {
    for (let i = gameState.enemies.length - 1; i >= 0; i--) {
        const enemy = gameState.enemies[i];
        enemy.update(deltaTime);
        enemy.draw();

        if (gameState.player) {
            const dx = enemy.x - gameState.player.x;
            const dy = enemy.y - gameState.player.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < enemy.size + gameState.player.size) {
                const basePerFrame = enemy.damage * 0.02;
                const frameFactor = deltaTime / (1000 / CONFIG.TARGET_FPS);
                let damage = basePerFrame * frameFactor;

                if (selectedCharacter?.id === 'tank') {
                    damage *= 0.7;
                }

                gameState.player.health -= damage;
                
                if (gameState.player.health <= 0) {
                    endGame(false);
                    return;
                }
            }
        }
    }
}

function updateProjectiles(deltaTime) {
    gameState.projectiles = gameState.projectiles.filter(proj => {
        proj.update(deltaTime);
        proj.draw();

        if (proj.isOutOfBounds()) return false;

        for (let i = gameState.enemies.length - 1; i >= 0; i--) {
            const enemy = gameState.enemies[i];
            const dx = proj.x - enemy.x;
            const dy = proj.y - enemy.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < proj.size + enemy.size) {
                enemy.health -= proj.damage;
                UIManager.showDamageNumber(enemy.x, enemy.y - 30, proj.damage);

                handleHit();
                ParticleManager.createBurst(proj.x, proj.y, proj.color, 10);

                if (enemy.health <= 0) {
                    handleEnemyDeath(enemy, i);
                }
                
                return false;
            }
        }
        return true;
    });
}

function handleHit() {
    const now = Date.now();
    if (now - gameState.lastHitTime <= 3000) {
        gameState.consecutiveHits++;
    } else {
        gameState.consecutiveHits = 1;
    }
    gameState.lastHitTime = now;

    if (selectedCharacter?.id === 'mage' && Math.random() < 0.3) {
        gameState.manaCostReduction = 0.8;
        const timeout = setTimeout(() => {
            if (gameState) gameState.manaCostReduction = 1;
        }, 5000);
        activeTimeouts.push(timeout);
    }
}

function handleEnemyDeath(enemy, index) {
    const difficulty = getDifficultyMultiplier();
    
    gameState.enemies.splice(index, 1);
    gameState.score += Math.floor(100 * gameState.wave);
    gameState.gold += Math.floor((50 + gameState.wave * 10) * difficulty.gold);
    gameState.exp += Math.floor(20 * difficulty.exp);
    gameState.kills++;

    applyPassiveOnKill();
    ParticleManager.createBurst(enemy.x, enemy.y, '#ff0000', 20);

    if (gameState.exp >= gameState.expToLevel) {
        levelUp();
    }

    if (gameState.enemies.length === 0) {
        handleWaveComplete();
    }
}

function applyPassiveOnKill() {
    if (!selectedCharacter || !gameState.player) return;

    if (selectedCharacter.id === 'ninja') {
        const originalSpeed = gameState.player.baseSpeed || selectedCharacter.speed;
        gameState.player.speed = originalSpeed * 1.3;
        
        const timeout = setTimeout(() => {
            if (gameState.player) {
                gameState.player.speed = originalSpeed;
            }
        }, 5000);
        activeTimeouts.push(timeout);
    }

    if (selectedCharacter.id === 'necromancer') {
        const healAmount = gameState.player.maxHealth * 0.05;
        gameState.player.health = Math.min(
            gameState.player.maxHealth,
            gameState.player.health + healAmount
        );
    }
}

function handleWaveComplete() {
    gameState.wave++;
    gameState.combatStartTime = Date.now();
    gameState.consecutiveHits = 0;
    
    const timeout = setTimeout(() => {
        if (gameState.running) {
            spawnEnemies();
        }
    }, 2000);
    activeTimeouts.push(timeout);
}

function updateMana(deltaTime) {
    if (!gameState.player) return;
    
    if (gameState.player.mana < gameState.player.maxMana) {
        const manaPerSecond = CONFIG.BASE_MANA_REGEN;
        gameState.player.mana = Math.min(
            gameState.player.maxMana, 
            gameState.player.mana + (manaPerSecond * (deltaTime / 1000))
        );
    }
}

function updatePaladinPassive(deltaTime) {
    if (selectedCharacter?.id === 'paladin' && gameState.player) {
        const regenPerSecond = gameState.player.maxHealth * CONFIG.PALADIN_REGEN_PERCENT;
        gameState.player.health = Math.min(
            gameState.player.maxHealth,
            gameState.player.health + regenPerSecond * (deltaTime / 1000)
        );
    }
}

function updateParticles(deltaTime) {
    gameState.particles = gameState.particles.filter(p => {
        p.update(deltaTime);
        p.draw();
        return p.life > 0;
    });
}

function gameLoop() {
    if (!gameState.running) {
        animationFrameId = null;
        return;
    }

    const currentTime = Date.now();
    const deltaTime = currentTime - (gameState.lastFrameTime || currentTime);
    gameState.lastFrameTime = currentTime;

    if (!ctx || !canvas) {
        initElementsIfNeeded();
        animationFrameId = requestAnimationFrame(gameLoop);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawBackground();
    updateCooldowns(deltaTime);
    updateTemporaryBuffs();
    updateParticles(deltaTime);
    updatePlayer(deltaTime);
    updateEnemies(deltaTime);
    updateProjectiles(deltaTime);
    updateMana(deltaTime);
    updatePaladinPassive(deltaTime);
    
    UIManager.updateUI();
    drawMiniMap();
    
    animationFrameId = requestAnimationFrame(gameLoop);
}

// ============================================
// INICIALIZAÇÃO DOS ELEMENTOS DO DOM
// ============================================
function initElementsIfNeeded() {
    if (!canvas) {
        canvas = document.getElementById('gameCanvas');
        if (canvas) {
            ctx = canvas.getContext('2d');
            canvas.width = Math.max(
                CONFIG.CANVAS_MIN_WIDTH, 
                Math.min(window.innerWidth - 200, CONFIG.CANVAS_MAX_WIDTH)
            );
            canvas.height = Math.max(
                CONFIG.CANVAS_MIN_HEIGHT, 
                Math.min(window.innerHeight - 200, CONFIG.CANVAS_MAX_HEIGHT)
            );
        }
    }
    
    if (!miniMap) {
        miniMap = document.getElementById('miniMapCanvas');
        if (miniMap) {
            miniCtx = miniMap.getContext('2d');
            miniMap.width = CONFIG.MINIMAP_WIDTH;
            miniMap.height = CONFIG.MINIMAP_HEIGHT;
        }
    }
}

function handleResize() {
    if (canvas) {
        canvas.width = Math.max(
            CONFIG.CANVAS_MIN_WIDTH, 
            Math.min(window.innerWidth - 200, CONFIG.CANVAS_MAX_WIDTH)
        );
        canvas.height = Math.max(
            CONFIG.CANVAS_MIN_HEIGHT, 
            Math.min(window.innerHeight - 200, CONFIG.CANVAS_MAX_HEIGHT)
        );
    }
    
    if (miniMap) {
        miniMap.width = CONFIG.MINIMAP_WIDTH;
        miniMap.height = CONFIG.MINIMAP_HEIGHT;
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================
window.addEventListener('load', () => {
    initElementsIfNeeded();
    window.addEventListener('resize', handleResize);
    updateSkillUI();
});

// ============================================
// EXPORTAR FUNÇÕES GLOBAIS
// ============================================
window.login = login;
window.selectCharacter = selectCharacter;
window.startGame = startGame;
window.setDifficulty = setDifficulty;
window.openShop = openShop;
window.closeShop = closeShop;
window.showLeaderboard = showLeaderboard;
window.hideLeaderboard = hideLeaderboard;
window.restartGame = restartGame;
window.backToMenu = backToMenu; 
// ============================================
// ADICIONE ESTAS FUNÇÕES NO SEU GAME.JS
// Substitua as funções endGame e showLeaderboard
// ============================================

// ============================================
// FUNÇÃO ATUALIZADA: endGame
// ============================================
async function endGame(won) {
    gameState.running = false;
    TimerManager.clearAll();
    
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    const stats = {
        kills: gameState.kills,
        wave: gameState.wave,
        level: gameState.level,
        gold: gameState.gold
    };
    
    // Salvar no banco local (mantém compatibilidade)
    gameDB.saveScore(
        currentUser?.id || 0,
        currentUser?.username || 'Anônimo',
        gameState.score,
        selectedCharacter?.name || 'N/A',
        stats
    );

    // 🔥 SALVAR NO FIREBASE
    try {
        if (typeof window.saveScoreToFirebase === 'function') {
            await window.saveScoreToFirebase(
                currentUser?.username || 'Anônimo',
                gameState.score,
                selectedCharacter?.name || 'N/A',
                stats,
                selectedDifficulty
            );
            console.log('✅ Score salvo no Firebase com sucesso!');
        }
    } catch (error) {
        console.error('❌ Erro ao salvar no Firebase:', error);
        // Jogo continua mesmo se falhar
    }

    const gameScreen = document.getElementById('gameScreen');
    const gameOver = document.getElementById('gameOver');
    
    gameScreen?.classList.remove('active');
    gameOver?.classList.add('active');

    const resultText = document.getElementById('resultText');
    const finalScore = document.getElementById('finalScore');
    const statsDisplay = document.getElementById('statsDisplay');
    
    if (resultText) resultText.textContent = won ? '🎉 VITÓRIA ÉPICA!' : '💀 DERROTA';
    if (finalScore) finalScore.textContent = `Pontuação Final: ${gameState.score.toLocaleString()} pontos`;
    if (statsDisplay) {
        statsDisplay.innerHTML = `
            <p>🎯 Abates: ${stats.kills}</p>
            <p>🌊 Waves Completadas: ${stats.wave}</p>
            <p>⭐ Nível Alcançado: ${stats.level}</p>
            <p>💰 Ouro Coletado: ${stats.gold}</p>
            <p style="margin-top: 15px; color: #4caf50;">✅ Score salvo online!</p>
        `;
    }
}

// ============================================
// FUNÇÃO ATUALIZADA: showLeaderboard
// ============================================
async function showLeaderboard() {
    const list = document.getElementById('leaderboardList');
    if (!list) return;
    
    // Mostrar loading
    list.innerHTML = '<p style="text-align: center;">⏳ Carregando ranking...</p>';

    try {
        // 🔥 BUSCAR DO FIREBASE
        let scores = [];
        
        if (typeof window.getTopScoresFromFirebase === 'function') {
            scores = await window.getTopScoresFromFirebase(10);
        } else {
            // Fallback para banco local se Firebase não estiver disponível
            scores = gameDB.getTopScores(10);
        }
        
        list.innerHTML = '';

        if (scores.length === 0) {
            list.innerHTML = '<p style="text-align: center;">Nenhuma pontuação ainda. Seja o primeiro! 🚀</p>';
        } else {
            scores.forEach((score, index) => {
                const item = document.createElement('div');
                item.className = 'leaderboard-item' + (index < 3 ? ' top3' : '');
                const medals = ['🥇', '🥈', '🥉'];
                
                // Formatar data
                let dateStr = 'Recente';
                if (score.timestamp) {
                    try {
                        const date = score.timestamp.toDate ? score.timestamp.toDate() : new Date(score.createdAt);
                        dateStr = date.toLocaleDateString('pt-BR', { 
                            day: '2-digit', 
                            month: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit'
                        });
                    } catch (e) {
                        dateStr = 'Recente';
                    }
                } else if (score.date) {
                    const date = new Date(score.date);
                    dateStr = date.toLocaleDateString('pt-BR');
                }
                
                // Definir emoji de dificuldade
                const diffEmoji = {
                    'easy': '😊',
                    'normal': '😐',
                    'hard': '😈',
                    'extreme': '💀'
                };
                const diffText = diffEmoji[score.difficulty] || '😐';
                
                item.innerHTML = `
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                            <span style="font-size: 1.5em;">${medals[index] || `${index + 1}.`}</span>
                            <strong style="font-size: 1.1em; color: #f093fb;">${score.username}</strong>
                        </div>
                        <div style="display: flex; gap: 15px; font-size: 0.85em; opacity: 0.8; flex-wrap: wrap;">
                            <span>🎭 ${score.character || 'N/A'}</span>
                            <span>🌊 Wave ${score.wave || 1}</span>
                            <span>⭐ Lvl ${score.level || 1}</span>
                            <span>${diffText} ${(score.difficulty || 'normal').toUpperCase()}</span>
                        </div>
                        <div style="font-size: 0.75em; opacity: 0.5; margin-top: 5px;">
                            📅 ${dateStr}
                        </div>
                    </div>
                    <div style="text-align: right; display: flex; flex-direction: column; justify-content: center;">
                        <strong style="font-size: 1.3em; color: #ffd700;">${score.score.toLocaleString()}</strong>
                        <small style="opacity: 0.7; font-size: 0.8em;">pontos</small>
                        ${score.kills ? `<small style="opacity: 0.6; font-size: 0.75em; margin-top: 3px;">💀 ${score.kills} kills</small>` : ''}
                    </div>
                `;
                
                list.appendChild(item);
            });
        }
    } catch (error) {
        console.error('Erro ao carregar leaderboard:', error);
        list.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <p style="color: #ff6b6b; margin-bottom: 10px;">
                    ❌ Erro ao carregar ranking online
                </p>
                <p style="font-size: 0.9em; opacity: 0.7;">
                    Verifique sua conexão com a internet
                </p>
            </div>
        `;
        
        // Tentar mostrar ranking local como fallback
        try {
            const localScores = gameDB.getTopScores(10);
            if (localScores.length > 0) {
                list.innerHTML += '<p style="text-align: center; margin: 10px 0; color: #ffd700;">📊 Mostrando ranking local:</p>';
                localScores.forEach((score, index) => {
                    const item = document.createElement('div');
                    item.className = 'leaderboard-item';
                    item.innerHTML = `
                        <span>${index + 1}. ${score.username} - ${score.character}</span>
                        <span>${score.score.toLocaleString()} pts</span>
                    `;
                    list.appendChild(item);
                });
            }
        } catch (e) {
            console.error('Erro ao carregar ranking local:', e);
        }
    }

    const board = document.getElementById('leaderboard');
    if (board) board.style.display = 'block';
}

// ============================================
// NOVA FUNÇÃO: Ver stats do jogador
// ============================================
async function showPlayerStats(username) {
    if (!username) {
        username = currentUser?.username || prompt('Digite o nome do jogador:');
    }
    
    if (!username) return;
    
    try {
        const playerScores = await window.getPlayerScores(username, 5);
        
        if (playerScores.length === 0) {
            console.log(`❌ Nenhum score encontrado para ${username}`);
            alert(`Nenhum score encontrado para ${username}`);
            return;
        }
        
        console.log(`📊 Top ${playerScores.length} scores de ${username}:`);
        console.table(playerScores.map(s => ({
            Score: s.score,
            Campeão: s.character,
            Wave: s.wave,
            Level: s.level,
            Kills: s.kills,
            Dificuldade: s.difficulty
        })));
        
        // Calcular estatísticas
        const totalScore = playerScores.reduce((sum, s) => sum + s.score, 0);
        const avgScore = Math.round(totalScore / playerScores.length);
        const maxScore = Math.max(...playerScores.map(s => s.score));
        const totalKills = playerScores.reduce((sum, s) => sum + (s.kills || 0), 0);
        
        const statsText = `
🎮 ESTATÍSTICAS DE ${username.toUpperCase()} 🎮

📊 Total de Partidas: ${playerScores.length}
⭐ Score Médio: ${avgScore.toLocaleString()}
🏆 Melhor Score: ${maxScore.toLocaleString()}
💀 Total de Kills: ${totalKills}
🎯 Média de Kills: ${Math.round(totalKills / playerScores.length)}
        `;
        
        console.log(statsText);
        alert(statsText);
        
        return playerScores;
    } catch (error) {
        console.error('Erro ao buscar stats do jogador:', error);
        alert('Erro ao buscar estatísticas. Tente novamente.');
        return [];
    }
}

// ============================================
// NOVA FUNÇÃO: Ver estatísticas gerais
// ============================================
async function showGeneralStats() {
    try {
        const stats = await window.getGameStats();
        
        if (!stats || stats.totalGames === 0) {
            console.log('❌ Nenhuma estatística disponível ainda');
            alert('Nenhuma estatística disponível ainda. Jogue algumas partidas!');
            return;
        }
        
        console.log('📊 ESTATÍSTICAS GERAIS DO JOGO 📊');
        console.log('='.repeat(50));
        console.log(`📈 Total de Partidas: ${stats.totalGames}`);
        console.log(`⭐ Score Médio: ${stats.averageScore.toLocaleString()}`);
        console.log(`🏆 Maior Score: ${stats.maxScore.toLocaleString()}`);
        console.log(`🌊 Maior Wave: ${stats.maxWave}`);
        console.log('\n🎭 CAMPEÕES MAIS USADOS:');
        Object.entries(stats.championStats)
            .sort((a, b) => b[1] - a[1])
            .forEach(([champ, count]) => {
                const percent = ((count / stats.totalGames) * 100).toFixed(1);
                console.log(`   ${champ}: ${count} vezes (${percent}%)`);
            });
        console.log('\n😈 DIFICULDADES:');
        Object.entries(stats.difficultyStats)
            .forEach(([diff, count]) => {
                const percent = ((count / stats.totalGames) * 100).toFixed(1);
                console.log(`   ${diff}: ${count} vezes (${percent}%)`);
            });
        
        const statsText = `
📊 ESTATÍSTICAS GERAIS 📊

📈 Total: ${stats.totalGames} partidas
⭐ Score Médio: ${stats.averageScore.toLocaleString()}
🏆 Recorde: ${stats.maxScore.toLocaleString()}
🌊 Maior Wave: ${stats.maxWave}

Use console.log para ver detalhes completos!
        `;
        
        alert(statsText);
        
        return stats;
    } catch (error) {
        console.error('Erro ao buscar estatísticas gerais:', error);
        alert('Erro ao buscar estatísticas. Tente novamente.');
        return null;
    }
}

// ============================================
// EXPORTAR PARA WINDOW (se ainda não estiver)
// ============================================
window.showPlayerStats = showPlayerStats;
window.showGeneralStats = showGeneralStats;

// Log de confirmação
console.log('✅ Funções Firebase integradas ao game.js');
console.log('📊 Use showPlayerStats("nome") para ver stats de um jogador');
console.log('📊 Use showGeneralStats() para ver estatísticas gerais');



// ============================================
// FIREBASE (COMPAT v8) - CONFIGURAÇÃO UNIFICADA
// IMPORTANTE: insira estes <script> no seu HTML ANTES de carregar game.cleaned.js:
// <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
// ============================================
const firebaseConfig = {
    apiKey: "AIzaSyA8AEW-1torcFCMiNwsfQ6ktN-bORMauJE",
    authDomain: "moba1-34cf5.firebaseapp.com",
    projectId: "moba1-34cf5",
    storageBucket: "moba1-34cf5.firebasestorage.app",
    messagingSenderId: "460683196012",
    appId: "1:460683196012:web:c9de01c57f721349200a49",
    measurementId: "G-1QDL5VQ2VH"
};

let db = null;
let firebaseInitialized = false;

function initializeFirebaseCompat() {
    try {
        if (typeof firebase === 'undefined' || !firebase.initializeApp) {
            console.warn('⚠️ Firebase compat (v8) não detectado. Verifique se incluiu os scripts no HTML.');
            return false;
        }

        if (!firebase.apps || firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

        if (!firebase.firestore) {
            console.warn('⚠️ Firestore não detectado. Inclua firebase-firestore.js');
            return false;
        }

        db = firebase.firestore();
        firebaseInitialized = true;
        console.log('✅ Firebase (compat v8) inicializado com sucesso!');
        return true;
    } catch (e) {
        console.error('❌ Erro ao inicializar Firebase (compat):', e);
        return false;
    }
}

// Funções de integração usadas pelo jogo (compat v8)
async function saveScoreToFirebaseCompat(username, score, character, stats = {}, difficulty = 'normal') {
    if (!firebaseInitialized || !db) {
        console.warn('Firestore não inicializado. Salvando apenas localmente.');
        return null;
    }
    try {
        const payload = {
            username: (username || 'Anônimo').toString(),
            score: Number(score) || 0,
            character: character || 'N/A',
            difficulty: difficulty || 'normal',
            kills: stats.kills || 0,
            wave: stats.wave || 0,
            level: stats.level || 0,
            gold: stats.gold || 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        const ref = await db.collection('scores').add(payload);
        console.log('🔥 Score salvo no Firebase (compat):', ref.id);
        return ref.id;
    } catch (err) {
        console.error('Erro ao salvar score no Firebase (compat):', err);
        return null;
    }
}

async function getTopScoresFromFirebaseCompat(limit = 10) {
    if (!firebaseInitialized || !db) {
        console.warn('Firestore não inicializado — retornando ranking local.');
        return [];
    }
    try {
        const snapshot = await db.collection('scores').orderBy('score', 'desc').limit(limit).get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (err) {
        console.error('Erro ao buscar top scores (compat):', err);
        return [];
    }
}

// Expor as funções no window para o restante do game.js usar
window.initializeFirebase = initializeFirebaseCompat;
window.saveScoreToFirebase = saveScoreToFirebaseCompat;
window.getTopScoresFromFirebase = getTopScoresFromFirebaseCompat;



// FUNÇÃO ATUALIZADA: showLeaderboard

// NOVA FUNÇÃO: Ver stats do jogador

// FIREBASE (INTEGRADO) - COLOQUE OS SCRIPTS DO SDK NO HTML (compat v8)
