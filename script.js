// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import init, { Engine } from './regorus/bindings/wasm/pkg/regorusjs';
import { levels } from './levels.js';

// --- State ---
let currentLevelIndex = 0;
let currentTravelerIndex = 0;
let score = 0;
let totalProcessed = 0;
let policy = levels[0].starterPolicy;
let regorusReady = false;

// --- DOM ---
const policyWindow   = document.getElementById("rego-policy");
const inputWindow    = document.getElementById("json-input");
const outputWindow   = document.getElementById("evaluation-output");
const evaluateButton = document.getElementById("evaluate-button");
const nextButton     = document.getElementById("next-button");
const levelDay       = document.getElementById("level-day");
const levelTitle     = document.getElementById("level-title");
const briefingText   = document.getElementById("briefing-text");
const travelerName   = document.getElementById("traveler-name");
const travelerProg   = document.getElementById("traveler-progress");
const stampOverlay   = document.getElementById("stamp-overlay");
const scoreDisplay   = document.getElementById("score-display");

// --- Tab key in policy editor ---
policyWindow.onkeydown = function(e) {
    if (e.keyCode === 9) {
        e.preventDefault();
        const start = this.selectionStart;
        const end   = this.selectionEnd;
        this.value  = this.value.substring(0, start) + '\t' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 1;
    }
};

policyWindow.addEventListener('input', (e) => { policy = e.target.value; });

// --- Helpers ---
function currentLevel()    { return levels[currentLevelIndex]; }
function currentTraveler() { return currentLevel().travelers[currentTravelerIndex]; }

function loadLevel() {
    const level = currentLevel();
    levelDay.textContent    = level.day;
    levelTitle.textContent  = level.name.toUpperCase();
    briefingText.textContent = level.briefing;
    policy = level.starterPolicy;
    policyWindow.value = policy;
    currentTravelerIndex = 0;
    loadTraveler();
}

function loadTraveler() {
    const level    = currentLevel();
    const traveler = currentTraveler();
    travelerName.textContent = traveler.name;
    travelerProg.textContent = `Traveler ${currentTravelerIndex + 1} / ${level.travelers.length}`;
    inputWindow.value = JSON.stringify(traveler.input, null, 2);
    outputWindow.textContent = "";
    stampOverlay.style.display = "none";
    evaluateButton.disabled = false;
    nextButton.style.display = "none";
}

// --- Evaluate ---
evaluateButton.addEventListener("click", function() {
    if (!regorusReady) return;

    const traveler = currentTraveler();
    let result = false;

    const engine = new Engine();
    try {
        engine.addPolicy("tsa_policy.rego", policy);
        engine.setInputJson(JSON.stringify(traveler.input));
        const result_json = engine.evalRule("data.tsa.allow");
        result = JSON.parse(result_json);
    } catch(e) {
        outputWindow.textContent = "Policy error:\n" + e.toString();
        return;
    }

    const correct = (result === traveler.shouldPass);
    totalProcessed++;
    if (correct) score++;

    stampOverlay.textContent  = result ? "APPROVED" : "DENIED";
    stampOverlay.className    = "stamp " + (result ? "stamp-approved" : "stamp-denied");
    stampOverlay.style.display = "flex";

    outputWindow.textContent  = result ? "✓ APPROVED" : "✗ DENIED";
    outputWindow.className    = result ? "result-approved" : "result-denied";
    scoreDisplay.textContent  = `Score: ${score} / ${totalProcessed}`;

    evaluateButton.disabled   = true;
    nextButton.style.display  = "block";

    const isLastTraveler = currentTravelerIndex === currentLevel().travelers.length - 1;
    const isLastLevel    = currentLevelIndex === levels.length - 1;
    nextButton.textContent = (isLastTraveler && isLastLevel) ? "Finish" : "Next →";
});

// --- Advance ---
nextButton.addEventListener("click", function() {
    const level = currentLevel();
    if (currentTravelerIndex < level.travelers.length - 1) {
        currentTravelerIndex++;
        loadTraveler();
    } else if (currentLevelIndex < levels.length - 1) {
        currentLevelIndex++;
        loadLevel();
    } else {
        outputWindow.textContent = `All 8 levels complete!\nFinal score: ${score} / ${totalProcessed}`;
        outputWindow.className   = "";
        nextButton.style.display = "none";
    }
});

// --- Init ---
async function start() {
    await init();
    regorusReady = true;
    loadLevel();
}

start().catch(e => console.error(e));
