// src/data/skills.js
//
// Ghost of Yotei skill/technique catalog.
//
// Conventions:
// - Base weapon unlock nodes (Katana, Dual Katana, Odachi, Yari, Kusarigama)
//   are NOT counted as skills, but may appear in `prerequisites` so the exact
//   visual tree can be reconstructed.
// - `prerequisites: []` means the skill has no skill prerequisite / Game8
//   explicitly lists its prerequisite as N/A.
// - `prerequisites: null` is reserved for truly unaudited/unknown data.
//   After this audit there are no null prerequisite values.
// - `prerequisiteMode: "all"` means every listed prerequisite is required.
// - `prerequisiteMode: "any"` means any one listed prerequisite is sufficient.
//   Wolf's Might is the current audited OR-branch case.
// - `techniquePointCost: null` means "not applicable or not verified".
// - `wolfSkillPointCost` is kept separate from normal Technique Points.
// - `spiritCost` is an activation/use cost, not an unlock cost.
// - `hidden: true` marks techniques that appear as hidden/question-mark nodes
//   until their special condition is met.
//
// Primary structural/effect source: Game8, "All Skill Trees and Techniques",
// cross-checked against the dedicated individual skill pages, weapon trees,
// Revenge/Wolf trees, and Hidden Techniques pages.
//
// This dataset intentionally prefers null over inferred/unverified values.

export const SKILL_CLASSES = Object.freeze([
  "onryo",
  "core",
  "melee",
  "revenge",
  "wolf",
]);

export const SKILL_UNLOCK_TYPES = Object.freeze([
  "default",
  "altar",
  "story",
  "quest",
  "weapon",
  "wolf-den",
  "special",
]);

const SKILLS = [
  {
    "id": "perfect-parry",
    "name": "Perfect Parry",
    "class": "onryo",
    "tree": "attacks",
    "effect": "Parry an attack at the last second to slow time and perform a counterattack. Earns a moderate amount of Spirit.",
    "prerequisites": [],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "disarm-counter",
    "name": "Disarm Counter",
    "class": "onryo",
    "tree": "attacks",
    "effect": "Focus Attacks will Disarm enemies performing a yellow glint attack. Earns Spirit on successful disarm.",
    "prerequisites": [
      "perfect-parry"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "onryos-strike",
    "name": "Onryo's Strike",
    "class": "onryo",
    "tree": "attacks",
    "effect": "Instantly strike and Disarm an enemy. Has a chance to Terrify enemies and make them flee.",
    "prerequisites": [
      "disarm-counter"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": 3,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "jump-kick",
    "name": "Jump Kick",
    "class": "onryo",
    "tree": "attacks",
    "effect": "Perform a jumping kick to Interrupt enemies and inflict Stagger damage. Ineffective against Brutes.",
    "prerequisites": [
      "disarm-counter"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "dance-of-wrath",
    "name": "Dance of Wrath",
    "class": "onryo",
    "tree": "attacks",
    "effect": "Onryo's Strike grows stronger, attacking and Disarming up to 3 enemies.",
    "prerequisites": [
      "onryos-strike"
    ],
    "unlock": {
      "type": "story",
      "source": "The Storm Blade",
      "description": "Progress through The Storm Blade tale."
    },
    "hidden": true,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "shifting-strike",
    "name": "Shifting Strike",
    "class": "onryo",
    "tree": "attacks",
    "effect": "Unleash a rapid Heavy Attack when changing weapons.",
    "prerequisites": [
      "jump-kick"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Visit an Altar of Reflection after investing a skill point into Jump Kick."
    },
    "hidden": true,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "killers-instinct",
    "name": "Killer's Instinct",
    "class": "onryo",
    "tree": "assassination",
    "effect": "Enemies show a flashing aura if their death will alert nearby enemies.",
    "prerequisites": [],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "brute-assassination",
    "name": "Brute Assassination",
    "class": "onryo",
    "tree": "assassination",
    "effect": "Assassinate large Brute enemies.",
    "prerequisites": [
      "killers-instinct"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "slaughter-leader",
    "name": "Slaughter Leader",
    "class": "onryo",
    "tree": "assassination",
    "effect": "Assassinate enemy Leaders. Doing so instantly fills your kill streak and Terrifies nearby enemies.",
    "prerequisites": [
      "brute-assassination"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "swift-assassination",
    "name": "Swift Assassination",
    "class": "onryo",
    "tree": "assassination",
    "effect": "Assassinations are moderately faster and quieter.",
    "prerequisites": [
      "killers-instinct"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "chain-assassination",
    "name": "Chain Assassination",
    "class": "onryo",
    "tree": "assassination",
    "effect": "Assassinate two nearby enemies in quick succession.",
    "prerequisites": [
      "killers-instinct"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "chain-assassination-master",
    "name": "Chain Assassination Master",
    "class": "onryo",
    "tree": "assassination",
    "effect": "Assassinate up to three nearby enemies in quick succession.",
    "prerequisites": [
      "chain-assassination"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "roll",
    "name": "Roll",
    "class": "onryo",
    "tree": "survival",
    "effect": "Roll away from attackers, evade slow red glint attacks, and extinguish Fire.",
    "prerequisites": [],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "safe-fall",
    "name": "Safe Fall",
    "class": "onryo",
    "tree": "survival",
    "effect": "Roll just before landing to avoid damage. Does not work when falling from lethal heights.",
    "prerequisites": [
      "roll"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "block-projectiles",
    "name": "Block Projectiles",
    "class": "onryo",
    "tree": "survival",
    "effect": "Block incoming Arrows and Kunai.",
    "prerequisites": [
      "safe-fall"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "perfect-dodge",
    "name": "Perfect Dodge",
    "class": "onryo",
    "tree": "survival",
    "effect": "Time your Dodge at the last second before an enemy's attack lands to slow time and perform a deadly counterattack.",
    "prerequisites": [
      "roll"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "shoulder-charge",
    "name": "Shoulder Charge",
    "class": "onryo",
    "tree": "survival",
    "effect": "Charge into enemies while sprinting to throw them backwards. Brutes are Interrupted but not thrown.",
    "prerequisites": [
      "perfect-dodge"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "onryos-will",
    "name": "Onryo's Will",
    "class": "onryo",
    "tree": "survival",
    "effect": "Draw on your inner rage to revive yourself when downed.",
    "prerequisites": [
      "roll"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": 2,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "improved-onryos-will",
    "name": "Improved Onryo's Will",
    "class": "onryo",
    "tree": "survival",
    "effect": "Onryo's Will now only costs 2 Spirit to revive when downed.",
    "prerequisites": [
      "onryos-will"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": 2,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "concentration",
    "name": "Concentration",
    "class": "onryo",
    "tree": "ranged",
    "effect": "Slow time when aiming with a Ranged weapon.",
    "prerequisites": [],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "deep-concentration",
    "name": "Deep Concentration",
    "class": "onryo",
    "tree": "ranged",
    "effect": "Increase Concentration slowdown time by a minor amount.",
    "prerequisites": [
      "concentration"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "improved-deep-concentration",
    "name": "Improved Deep Concentration",
    "class": "onryo",
    "tree": "ranged",
    "effect": "Increase Concentration slowdown time by a major amount.",
    "prerequisites": [
      "deep-concentration"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "mental-fortitude",
    "name": "Mental Fortitude",
    "class": "onryo",
    "tree": "ranged",
    "effect": "Reduce Concentration cooldown by a minor amount.",
    "prerequisites": [
      "concentration"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "improved-mental-fortitude",
    "name": "Improved Mental Fortitude",
    "class": "onryo",
    "tree": "ranged",
    "effect": "Reduce Concentration cooldown by a major amount.",
    "prerequisites": [
      "mental-fortitude"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "light-attack",
    "name": "Light Attack",
    "class": "core",
    "tree": "attacks",
    "effect": "Perform quick, light attacks.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": 2,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "heavy-attack",
    "name": "Heavy Attack",
    "class": "core",
    "tree": "attacks",
    "effect": "Perform slower, forceful attacks that inflict Stagger damage. Inflict enough Stagger damage to break an enemy's guard and interrupt them.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": 2,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "focus-attack",
    "name": "Focus Attack",
    "class": "core",
    "tree": "attacks",
    "effect": "Unleash a damaging strike that inflicts Stagger damage. Focus Attacks counter yellow glint Disarm attacks.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": 2,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "jump-attack",
    "name": "Jump Attack",
    "class": "core",
    "tree": "attacks",
    "effect": "Attack while jumping.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": 2,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "block",
    "name": "Block",
    "class": "core",
    "tree": "survival",
    "effect": "Block standard attacks and avoid damage.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "parry-deflect",
    "name": "Parry Deflect",
    "class": "core",
    "tree": "survival",
    "effect": "Block right before an enemy strikes to Deflect attacks and avoid damage. Successive Parry Deflects against powerful enemies lead to a Parry Interrupt. Inflicts a small amount of Stagger damage and earns a small amount of Spirit.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "parry-interrupt",
    "name": "Parry Interrupt",
    "class": "core",
    "tree": "survival",
    "effect": "Parry Interrupts cancel enemy attacks, exposing them to counterattacks. Parry Deflect consecutive attacks from powerful enemies in quick succession to perform a Parry Interrupt. Single parries against standard enemies will immediately Parry Interrupt. Inflicts a small amount of Stagger damage and earns a small amount of Spirit.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "dash",
    "name": "Dash",
    "class": "core",
    "tree": "survival",
    "effect": "Quickly evade unblockable red glint attacks.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "heal",
    "name": "Heal",
    "class": "core",
    "tree": "survival",
    "effect": "Restore Health. Costs 1 Spirit.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": 1,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "sake",
    "name": "Sake",
    "class": "core",
    "tree": "survival",
    "effect": "Drink Sake and Earn Spirit. Aim empty Sake jars to use as a distraction.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "parriable-attacks",
    "name": "Parriable Attacks",
    "class": "core",
    "tree": "survival",
    "effect": "Blue glint attacks cannot be Blocked. You must Parry, Dash, or Roll to avoid them. Blue glints are shaped like a horizontal streak.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "unblockable-attacks",
    "name": "Unblockable Attacks",
    "class": "core",
    "tree": "survival",
    "effect": "Red glint attacks cannot be Blocked or Parried. You must Dash or Roll to avoid them. Red glints are shaped like a cross.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "disarm-attacks",
    "name": "Disarm Attacks",
    "class": "core",
    "tree": "survival",
    "effect": "Yellow glint attacks will Disarm you if they land. Dash or Roll to avoid them - or counter with a Focus Attack. Yellow glints are shaped like a vertical streak.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "grapple-pull",
    "name": "Grapple Pull",
    "class": "core",
    "tree": "navigation",
    "effect": "Hold R2 near grapple points to hook the obstacle. Then hold L2 and pull down on the left stick to pull it free. Many grapple points are wrapped in red and white cloth.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "grapple-swing",
    "name": "Grapple Swing",
    "class": "core",
    "tree": "navigation",
    "effect": "Jump near grapple points and hook them. Swing with the left stick. Many grapple points are wrapped in red and white cloth.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "grapple-ascend",
    "name": "Grapple Ascend",
    "class": "core",
    "tree": "navigation",
    "effect": "Jump near grapple points and hook them. Ascend with the left stick. Many grapple points are wrapped in red and white cloth.",
    "prerequisites": [],
    "unlock": {
      "type": "default",
      "source": "Base moveset / story progression",
      "description": "Part of Atsu's core moveset and introduced through normal progression."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "iaido",
    "name": "Iaido",
    "class": "melee",
    "tree": "katana",
    "effect": "Stow the Katana then quickly draw it in a devastating attack.",
    "prerequisites": [
      "katana"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": "The prerequisite 'katana' refers to the base weapon unlock, which is not counted as a skill.",
    "prerequisiteMode": "all"
  },
  {
    "id": "heavenly-slash",
    "name": "Heavenly Slash",
    "class": "melee",
    "tree": "katana",
    "effect": "A fast unblockable attack that Interrupts enemies and inflicts extra damage against Staggered enemies.",
    "prerequisites": [
      "katana"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": 1,
    "notes": "The prerequisite 'katana' refers to the base weapon unlock, which is not counted as a skill.",
    "prerequisiteMode": "all"
  },
  {
    "id": "iai-lightning-strikes",
    "name": "Iai Lightning Strikes",
    "class": "melee",
    "tree": "katana",
    "effect": "Unleash 2 lightning-fast attacks from Iaido that Interrupt enemies.",
    "prerequisites": [
      "iaido"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "strength-of-lightning",
    "name": "Strength of Lightning",
    "class": "melee",
    "tree": "katana",
    "effect": "Increase Stagger damage against Swords such as Katana and Odachi.",
    "prerequisites": [
      "iai-lightning-strikes"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "iai-storm",
    "name": "Iai Storm",
    "class": "melee",
    "tree": "katana",
    "effect": "Extends Iaido with rapid follow-up attacks.",
    "prerequisites": [
      "iai-lightning-strikes"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "resolve-of-lightning",
    "name": "Resolve of Lightning",
    "class": "melee",
    "tree": "katana",
    "effect": "Increases Stagger damage inflicted by each Parry with a Katana.",
    "prerequisites": [
      "iai-lightning-strikes"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "iai-lightning-storm",
    "name": "Iai Lightning Storm",
    "class": "melee",
    "tree": "katana",
    "effect": "Perfectly-timed Iai Storm strikes inflict greater damage and Interrupt enemies.",
    "prerequisites": [
      "iai-storm"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "tempest-strike",
    "name": "Tempest Strike",
    "class": "melee",
    "tree": "dual-katana",
    "effect": "A series of Dual Katana attacks that end with an unblockable strike that inflicts major damage.",
    "prerequisites": [
      "dual-katana"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "takezos-dual-slash",
    "name": "Takezo's Dual Slash",
    "class": "melee",
    "tree": "dual-katana",
    "effect": "A double slash attack with Dual Katana that Interrupts enemies. Capable of striking two different enemies.",
    "prerequisites": [
      "dual-katana"
    ],
    "unlock": {
      "type": "special",
      "source": "Takezo the Unrivaled",
      "description": "Learned during the duel against Takezo the Unrivaled."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": 1,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "relentless-flurry",
    "name": "Relentless Flurry",
    "class": "melee",
    "tree": "dual-katana",
    "effect": "Continue a Dual Katana Focus Attack combo after Dashing. Requires fewer attacks to perform Tempest Strike after a successful Parry or Dash.",
    "prerequisites": [
      "tempest-strike"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "strength-of-winds",
    "name": "Strength of Winds",
    "class": "melee",
    "tree": "dual-katana",
    "effect": "Increase Stagger damage against Polearm enemies.",
    "prerequisites": [
      "relentless-flurry"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "deflecting-strikes",
    "name": "Deflecting Strikes",
    "class": "melee",
    "tree": "dual-katana",
    "effect": "Dual Katana Heavy Attacks automatically Parry Polearm attacks.",
    "prerequisites": [
      "relentless-flurry"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "improved-tempest-strike",
    "name": "Improved Tempest Strike",
    "class": "melee",
    "tree": "dual-katana",
    "effect": "Tempest Strikes inflict massive damage.",
    "prerequisites": [
      "relentless-flurry"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "dual-tempest-strikes",
    "name": "Dual Tempest Strikes",
    "class": "melee",
    "tree": "dual-katana",
    "effect": "Grants two unblockable Tempest Strike attacks at the end of a Focus Attack combo with Dual Katana.",
    "prerequisites": [
      "deflecting-strikes"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "unstoppable-strikes",
    "name": "Unstoppable Strikes",
    "class": "melee",
    "tree": "odachi",
    "effect": "While attacking with the Odachi, take less damage and become Unstoppable. Unstoppable attacks cannot be interrupted.",
    "prerequisites": [
      "odachi"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "bulwark-stance",
    "name": "Bulwark Stance",
    "class": "melee",
    "tree": "odachi",
    "effect": "A defensive stance for the Odachi that blocks all standard attacks.",
    "prerequisites": [
      "odachi"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "mountain-breaker",
    "name": "Mountain Breaker",
    "class": "melee",
    "tree": "odachi",
    "effect": "Devastating attack that inflicts massive Stagger damage and knocks down enemies Staggered by the attack.",
    "prerequisites": [
      "odachi"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": 1,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "improved-bulwark-stance",
    "name": "Improved Bulwark Stance",
    "class": "melee",
    "tree": "odachi",
    "effect": "Releasing Triangle during Bulwark Stance unleashes a slam which is then followed by a high damage double slash and piercing thrust Focus Attacks.",
    "prerequisites": [
      "bulwark-stance"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "strength-of-the-mountain",
    "name": "Strength of the Mountain",
    "class": "melee",
    "tree": "odachi",
    "effect": "Increase Stagger damage against all enemies.",
    "prerequisites": [
      "improved-bulwark-stance"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "indomitable-counter",
    "name": "Indomitable Counter",
    "class": "melee",
    "tree": "odachi",
    "effect": "Precisely timing Bulwark Stance will Perfect Counter all attacks, including red glint attacks.",
    "prerequisites": [
      "improved-bulwark-stance"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "resolve-of-the-mountain",
    "name": "Resolve of the Mountain",
    "class": "melee",
    "tree": "odachi",
    "effect": "Take less damage when attacking with the Odachi.",
    "prerequisites": [
      "improved-bulwark-stance"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "unstoppable-force",
    "name": "Unstoppable Force",
    "class": "melee",
    "tree": "odachi",
    "effect": "Damage taken while Unstoppable can be recovered. Recoverable Health appears grey and can be restored by attacking enemies.",
    "prerequisites": [
      "indomitable-counter"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "typhoon-kick",
    "name": "Typhoon Kick",
    "class": "melee",
    "tree": "yari",
    "effect": "Use the Yari to drive a powerful kick that interrupts and launches enemies with great force.",
    "prerequisites": [
      "yari"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "thundering-wave",
    "name": "Thundering Wave",
    "class": "melee",
    "tree": "yari",
    "effect": "A high-damage charge attack that impales and launches a single enemy while Interrupting nearby enemies.",
    "prerequisites": [
      "yari"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": 1,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "typhoon-sweep",
    "name": "Typhoon Sweep",
    "class": "melee",
    "tree": "yari",
    "effect": "Sweep the Yari in a wide arc to Interrupt and knock down enemies.",
    "prerequisites": [
      "typhoon-kick"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "torrential-slash",
    "name": "Torrential Slash",
    "class": "melee",
    "tree": "yari",
    "effect": "A powerful follow-up Focus Attack after Typhoon Kick.",
    "prerequisites": [
      "typhoon-sweep"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "strength-of-waters",
    "name": "Strength of Waters",
    "class": "melee",
    "tree": "yari",
    "effect": "Increase Stagger damage against Sickle enemies.",
    "prerequisites": [
      "typhoon-sweep"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "quelling-waves",
    "name": "Quelling Waves",
    "class": "melee",
    "tree": "yari",
    "effect": "When using the Yari against Sickles, massively increase Stagger damage inflicted by Parry.",
    "prerequisites": [
      "typhoon-sweep"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "quickening-tides",
    "name": "Quickening Tides",
    "class": "melee",
    "tree": "yari",
    "effect": "Reduces the time to fully charge Typhoon Kick by a major amount.",
    "prerequisites": [
      "torrential-slash"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "strength-of-typhoons",
    "name": "Strength of Typhoons",
    "class": "melee",
    "tree": "yari",
    "effect": "Typhoon Kick inflicts increased Stagger damage and launches enemies farther.",
    "prerequisites": [
      "torrential-slash"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "ferocious-whirlwind",
    "name": "Ferocious Whirlwind",
    "class": "melee",
    "tree": "kusarigama",
    "effect": "Kusarigama Focus Attack swing that strikes all nearby enemies.",
    "prerequisites": [
      "kusarigama"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "claw-and-talon",
    "name": "Claw and Talon",
    "class": "melee",
    "tree": "kusarigama",
    "effect": "A devastating long range attack that Interrupts enemies and destroys Shields.",
    "prerequisites": [
      "kusarigama"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": 1,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "lethal-talons",
    "name": "Lethal Talons",
    "class": "melee",
    "tree": "kusarigama",
    "effect": "Use the Kusarigama to execute Assassinations from a distance.",
    "prerequisites": [
      "ferocious-whirlwind"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": 1,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "strength-of-the-bear",
    "name": "Strength of the Bear",
    "class": "melee",
    "tree": "kusarigama",
    "effect": "Increase Stagger damage against Shield enemies.",
    "prerequisites": [
      "lethal-talons"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "evasive-maul",
    "name": "Evasive Maul",
    "class": "melee",
    "tree": "kusarigama",
    "effect": "A strong sweeping Kusarigama Focus Attack performed after a Roll that can counter yellow glint attacks.",
    "prerequisites": [
      "lethal-talons"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "mighty-talons",
    "name": "Mighty Talons",
    "class": "melee",
    "tree": "kusarigama",
    "effect": "Assassinate large Brute enemies with the Kusarigama.",
    "prerequisites": [
      "lethal-talons"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "iron-talon",
    "name": "Iron Talon",
    "class": "melee",
    "tree": "kusarigama",
    "effect": "Kusarigama Assassinations no longer cost Spirit to perform.",
    "prerequisites": [
      "evasive-maul"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "ferocious-cyclone",
    "name": "Ferocious Cyclone",
    "class": "melee",
    "tree": "kusarigama",
    "effect": "Extends Ferocious Whirlwind to 3 Focus Attacks that hit all nearby enemies.",
    "prerequisites": [
      "evasive-maul"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Spend a Technique Point at an Altar of Reflection."
    },
    "hidden": false,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "standoff",
    "name": "Standoff",
    "class": "revenge",
    "tree": "attacks",
    "effect": "Challenge an enemy who has not yet engaged in combat to a 1-on-1 showdown. Nearby enemies have a chance to be Terrified.",
    "prerequisites": [],
    "unlock": {
      "type": null,
      "source": null,
      "description": "Exact unlock route not audited in this dataset."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "onryos-howl",
    "name": "Onryo's Howl",
    "class": "revenge",
    "tree": "attacks",
    "effect": "Unleashing Onryo's Howl Terrifies all nearby enemies, forcing 1 to flee. Earns Spirit. Get a kill streak of 5 enemies to fully charge Onryo's Howl. Taking damage resets kill streak to 0.",
    "prerequisites": [],
    "unlock": {
      "type": null,
      "source": null,
      "description": "Exact unlock route not audited in this dataset."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "throw-weapons",
    "name": "Throw Weapons",
    "class": "revenge",
    "tree": "attacks",
    "effect": "Sake jars and some Melee Weapons can be picked up and thrown at enemies.",
    "prerequisites": [],
    "unlock": {
      "type": null,
      "source": null,
      "description": "Exact unlock route not audited in this dataset."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "standoff-streak",
    "name": "Standoff Streak",
    "class": "revenge",
    "tree": "attacks",
    "effect": "After a successful Standoff, 1 enemy will rush in and open themselves to a killing blow. Wait until the enemy attacks, then deal a devastating strike. Grants extra Spirit on success.",
    "prerequisites": [
      "standoff"
    ],
    "unlock": {
      "type": null,
      "source": null,
      "description": "Exact unlock route not audited in this dataset."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "improved-weapon-throw",
    "name": "Improved Weapon Throw",
    "class": "revenge",
    "tree": "attacks",
    "effect": "Thrown Melee weapons inflict increased regular damage and Stagger damage.",
    "prerequisites": [
      "throw-weapons"
    ],
    "unlock": {
      "type": null,
      "source": null,
      "description": "Exact unlock route not audited in this dataset."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "ghost-stance",
    "name": "Ghost Stance",
    "class": "revenge",
    "tree": "attacks",
    "effect": "Ghost stance allows you to kill enemies with deadly strikes. Get a kill streak of 7 enemies to fully charge your Ghost Stance. Taking damage resets your kill streak to 0.",
    "prerequisites": [],
    "unlock": {
      "type": "story",
      "source": "The Saito Brothers",
      "description": "Progress through The Saito Brothers revenge tale."
    },
    "hidden": true,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "improved-ghost-stance",
    "name": "Improved Ghost Stance",
    "class": "revenge",
    "tree": "attacks",
    "effect": "Reduce the kill requirement for Ghost Stance by 1.",
    "prerequisites": [
      "ghost-stance"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Visit an Altar of Reflection after unlocking Ghost Stance."
    },
    "hidden": true,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "standoff-unlock-pistol",
    "name": "Standoff Unlock: Pistol",
    "class": "revenge",
    "tree": "attacks",
    "effect": "At the end of a Standoff, press R1 when prompted to kill an additional enemy with the Tanzutsu pistol.",
    "prerequisites": [
      "standoff-streak"
    ],
    "unlock": {
      "type": "quest",
      "source": "Guns and Consequences",
      "description": "Complete the Guns and Consequences quest."
    },
    "hidden": true,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "horse-boost",
    "name": "Horse Boost",
    "class": "revenge",
    "tree": "horse",
    "effect": "Gallop through white flowers or jump over obstacles on horseback to gain a speed boost.",
    "prerequisites": [],
    "unlock": {
      "type": null,
      "source": null,
      "description": "Exact unlock route not audited in this dataset."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "improved-horse-boost",
    "name": "Improved Horse Boost",
    "class": "revenge",
    "tree": "horse",
    "effect": "Increase the amount of speed gained when galloping through white flowers or jumping over obstacles on horseback.",
    "prerequisites": [
      "horse-boost"
    ],
    "unlock": {
      "type": null,
      "source": null,
      "description": "Exact unlock route not audited in this dataset."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "mounted-tackle",
    "name": "Mounted Tackle",
    "class": "revenge",
    "tree": "horse",
    "effect": "Leap from your horse to tackle a nearby enemy, inflicting Stagger damage.",
    "prerequisites": [
      "improved-horse-boost"
    ],
    "unlock": {
      "type": null,
      "source": null,
      "description": "Exact unlock route not audited in this dataset."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "horse-charge",
    "name": "Horse Charge",
    "class": "revenge",
    "tree": "horse",
    "effect": "An all-out horse charge that can throw and damage large groups of enemies. Drains Spirit while in use.",
    "prerequisites": [],
    "unlock": {
      "type": "story",
      "source": "The Oni",
      "description": "Progress through The Oni revenge tale."
    },
    "hidden": true,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "horse-charge-efficiency",
    "name": "Horse Charge Efficiency",
    "class": "revenge",
    "tree": "horse",
    "effect": "Reduce the Spirit burn rate of Horse Charge by a moderate amount.",
    "prerequisites": [
      "horse-charge"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Visit an Altar of Reflection after Horse Charge is unlocked."
    },
    "hidden": true,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "horse-charge-recovery",
    "name": "Horse Charge Recovery",
    "class": "revenge",
    "tree": "horse",
    "effect": "Horse Charge impacts have a minor chance to recover 3 Spirit.",
    "prerequisites": [
      "horse-charge-efficiency"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Visit an Altar of Reflection after Horse Charge is unlocked."
    },
    "hidden": true,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "hunters-ear",
    "name": "Hunter's Ear",
    "class": "revenge",
    "tree": "survival",
    "effect": "Detect nearby enemies by listening.",
    "prerequisites": [],
    "unlock": {
      "type": "story",
      "source": "The Kitsune",
      "description": "Progress through The Kitsune revenge tale."
    },
    "hidden": true,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "persistent-echoes",
    "name": "Persistent Echoes",
    "class": "revenge",
    "tree": "survival",
    "effect": "Outlines of nearby enemies linger after using Hunter's Ear.",
    "prerequisites": [
      "hunters-ear"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Visit an Altar of Reflection after unlocking Hunter's Ear."
    },
    "hidden": true,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "hostile-intuition",
    "name": "Hostile Intuition",
    "class": "revenge",
    "tree": "survival",
    "effect": "Nearby enemies are outlined in red while using Hunter's Ear.",
    "prerequisites": [
      "persistent-echoes"
    ],
    "unlock": {
      "type": "altar",
      "source": "Altar of Reflection",
      "description": "Visit an Altar of Reflection after unlocking Hunter's Ear."
    },
    "hidden": true,
    "techniquePointCost": 1,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "wolf-strike",
    "name": "Wolf Strike",
    "class": "wolf",
    "tree": "combat",
    "effect": "When the wolf is nearby, she will perform a follow-up attack on enemies struck by thrown weapons or Sake jars.",
    "prerequisites": [],
    "unlock": {
      "type": "wolf-den",
      "source": "Wolf Dens",
      "description": "Clear Wolf Dens and spend a Wolf Skill Point."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": 1,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "wolfs-vengeance",
    "name": "Wolf's Vengeance",
    "class": "wolf",
    "tree": "combat",
    "effect": "After appearing, the wolf will stay and fight your opponents.",
    "prerequisites": [
      "wolf-strike"
    ],
    "unlock": {
      "type": "wolf-den",
      "source": "Wolf Dens",
      "description": "Clear Wolf Dens and spend a Wolf Skill Point."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": 1,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "wolf-assassination",
    "name": "Wolf Assassination",
    "class": "wolf",
    "tree": "combat",
    "effect": "If you Assassinate or Critical Strike an enemy when the wolf is nearby, she will Assassinate 1 additional foe.",
    "prerequisites": [
      "wolfs-vengeance"
    ],
    "unlock": {
      "type": "wolf-den",
      "source": "Wolf Dens",
      "description": "Clear Wolf Dens and spend a Wolf Skill Point."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": 1,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "wolfs-ferocity",
    "name": "Wolf's Ferocity",
    "class": "wolf",
    "tree": "combat",
    "effect": "The wolf inflicts massively increased Stagger damage.",
    "prerequisites": [
      "wolfs-vengeance"
    ],
    "unlock": {
      "type": "wolf-den",
      "source": "Wolf Dens",
      "description": "Clear Wolf Dens and spend a Wolf Skill Point."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": 1,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "wolfs-might",
    "name": "Wolf's Might",
    "class": "wolf",
    "tree": "combat",
    "effect": "Wolf abilities immediately kill Brutes and Leaders.",
    "prerequisites": [
      "wolf-assassination",
      "wolfs-ferocity"
    ],
    "unlock": {
      "type": "wolf-den",
      "source": "Wolf Dens",
      "description": "Clear Wolf Dens and spend a Wolf Skill Point."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": 1,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "any"
  },
  {
    "id": "wolfs-wrath",
    "name": "Wolf's Wrath",
    "class": "wolf",
    "tree": "combat",
    "effect": "Wolf kills earn Spirit and have a chance to Terrify enemies.",
    "prerequisites": [
      "wolfs-might"
    ],
    "unlock": {
      "type": "wolf-den",
      "source": "Wolf Dens",
      "description": "Clear Wolf Dens and spend a Wolf Skill Point."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": 1,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "wolf-rescue",
    "name": "Wolf Rescue",
    "class": "wolf",
    "tree": "summon",
    "effect": "When you are downed in combat, the wolf will occasionally appear and attempt to rescue you from death.",
    "prerequisites": [],
    "unlock": {
      "type": "wolf-den",
      "source": "Wolf Dens",
      "description": "Clear Wolf Dens and spend a Wolf Skill Point."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": 1,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "wolf-howl",
    "name": "Wolf Howl",
    "class": "wolf",
    "tree": "summon",
    "effect": "When using Onryo's Howl, the wolf may join you and attack another enemy.",
    "prerequisites": [
      "wolf-rescue"
    ],
    "unlock": {
      "type": "wolf-den",
      "source": "Wolf Dens",
      "description": "Clear Wolf Dens and spend a Wolf Skill Point."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": 1,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "wolf-standoff",
    "name": "Wolf Standoff",
    "class": "wolf",
    "tree": "summon",
    "effect": "When you engage in a Standoff, the wolf may join you and face off against another enemy.",
    "prerequisites": [
      "wolf-strike"
    ],
    "unlock": {
      "type": "wolf-den",
      "source": "Wolf Dens",
      "description": "Clear Wolf Dens and spend a Wolf Skill Point."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": 1,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "wolf-strike-summon",
    "name": "Wolf Strike Summon",
    "class": "wolf",
    "tree": "summon",
    "effect": "Striking enemies with a thrown weapon or Sake jar has a chance of summoning the wolf for a follow-up attack.",
    "prerequisites": [
      "wolf-howl"
    ],
    "unlock": {
      "type": "wolf-den",
      "source": "Wolf Dens",
      "description": "Clear Wolf Dens and spend a Wolf Skill Point."
    },
    "hidden": false,
    "techniquePointCost": null,
    "wolfSkillPointCost": 1,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "wolfs-call",
    "name": "Wolf's Call",
    "class": "wolf",
    "tree": "summon",
    "effect": "Playing the Song of the Wolf near Yotei Six Camps calls the wolf to your side.",
    "prerequisites": [],
    "unlock": {
      "type": "wolf-den",
      "source": "4 Wolf Dens",
      "description": "Finish 4 Wolf Dens to unlock."
    },
    "hidden": true,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  },
  {
    "id": "primal-bond",
    "name": "Primal Bond",
    "class": "wolf",
    "tree": "summon",
    "effect": "The wolf will respond to Song of the Wolf more often and be available in more locations.",
    "prerequisites": [],
    "unlock": {
      "type": "wolf-den",
      "source": "10 Wolf Dens",
      "description": "Finish 10 Wolf Dens to unlock."
    },
    "hidden": true,
    "techniquePointCost": null,
    "wolfSkillPointCost": null,
    "spiritCost": null,
    "notes": null,
    "prerequisiteMode": "all"
  }
];


export const skills = Object.freeze(SKILLS);

export const skillsById = Object.freeze(
  Object.fromEntries(SKILLS.map((skill) => [skill.id, skill]))
);

export const getSkillById = (id) => skillsById[id] ?? null;

export const getSkillsByClass = (skillClass) =>
  SKILLS.filter((skill) => skill.class === skillClass);

export const getSkillsByTree = (skillClass, tree) =>
  SKILLS.filter(
    (skill) => skill.class === skillClass && skill.tree === tree
  );

export const getHiddenSkills = () =>
  SKILLS.filter((skill) => skill.hidden);

export default skills;
