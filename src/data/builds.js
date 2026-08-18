import { armorById } from './armors';
import { charmById } from './charms';

const definitions = [
  {id:'undying-melee',name:'Armor of the Undying — Melee / Duel / Survival',armorId:'armor-of-the-undying',category:'Melee / Duel / Survival',charmIds:['charm-of-mount-yotei','father-s-charm','charm-of-futsunushi','takezo-s-charm-of-the-stout-heart','charm-of-unhealthy-resolve','charm-of-enduring-resolve'],alternativeCharmIds:['charm-of-stolen-flame']},
  {id:'nine-tails-fire',name:'Nine Tails Armor — Fire Kunai / Quickfire',armorId:'nine-tails-armor',category:'Fire Kunai / Quickfire',charmIds:['charm-of-homusubi','charm-of-fearful-end','charm-of-hidden-blades','charm-of-burning-blades','charm-of-lingering-affliction','charm-of-generous-opponents'],alternativeCharmIds:[]},
  {id:'dragonfly-true-aim',name:'Dragonfly Armor — True Aim / General Ranged',armorId:'dragonfly-armor',category:'True Aim / General Ranged',charmIds:['charm-of-true-aim','mother-s-charm','charm-of-fearful-strike','charm-of-archer-s-fortune','charm-of-generous-opponents','charm-of-fatal-silence'],alternativeCharmIds:[]},
  {id:'dragonfly-defensive',name:'Dragonfly Armor — Defensive Ranged',armorId:'dragonfly-armor',category:'Defensive Ranged',charmIds:['mother-s-charm','charm-of-true-aim','charm-of-iron-focus','charm-of-uncanny-aim','charm-of-thoughtful-restoration','charm-of-mount-yotei'],alternativeCharmIds:[]},
  {id:'dragonfly-takezo',name:'Dragonfly Armor — Takezo / Boss Ranged',armorId:'dragonfly-armor',category:'Takezo / Boss Ranged',charmIds:['mother-s-charm','charm-of-amenowakahiko','charm-of-raining-arrows','charm-of-true-aim','charm-of-iron-focus','charm-of-last-chance'],alternativeCharmIds:[]},
  {id:'spider-lily-stagger',name:'Spider Lily Armor — Stagger / Oni’s Flame',armorId:'spider-lily-armor',category:'Stagger / Oni’s Flame',charmIds:['charm-of-futsunushi','charm-of-fiery-rage','charm-of-homusubi','charm-of-lingering-affliction','charm-of-fire-mastery','charm-of-brutal-volley'],alternativeCharmIds:[]},
  {id:'onryo-terror',name:'Onryō Armor — Terror / Ghost Stance',armorId:'onryo-armor',category:'Terror / Ghost Stance',charmIds:['charm-of-onryo-s-protection','charm-of-howling-terror','charm-of-eager-revenge','charm-of-hachiman','charm-of-burning-blades','charm-of-confident-strikes'],alternativeCharmIds:[]},
  {id:'crimson-stealth',name:'Crimson Kimono — Stealth / Assassination',armorId:'crimson-kimono',category:'Stealth / Assassination',charmIds:['charm-of-fearful-end','charm-of-hachiman','charm-of-brutal-volley','charm-of-hidden-blades','charm-of-lingering-shadows','charm-of-confusion'],alternativeCharmIds:[]},
  {id:'crimson-hybrid',name:'Crimson Kimono — Hybrid Stealth / Ranged',armorId:'crimson-kimono',category:'Hybrid Stealth / Ranged',charmIds:['charm-of-uncanny-aim','father-s-charm','charm-of-fearful-end','charm-of-thoughtful-restoration','charm-of-true-aim','charm-of-mount-yotei'],alternativeCharmIds:[]},
  {id:'bounty-parry',name:'Bounty Master Armor — Perfect Parry / Bosses',armorId:'bounty-master-armor',category:'Perfect Parry / Bosses',charmIds:['takezo-s-charm-of-bold-deflection','charm-of-futsunushi','father-s-charm','charm-of-mount-yotei','charm-of-last-chance','charm-of-healing'],alternativeCharmIds:[]},
];

const requireArmor = (id) => { const armor = armorById[id]; if (!armor) throw new Error(`Armor inexistente: ${id}`); return armor; };
const requireCharm = (id) => { const charm = charmById[id]; if (!charm) throw new Error(`Charm inexistente: ${id}`); return charm; };

export const builds = definitions.map((build) => ({
  ...build,
  armor: requireArmor(build.armorId),
  charms: build.charmIds.map(requireCharm),
  alternativeCharms: build.alternativeCharmIds.map(requireCharm),
}));

export const buildById = Object.fromEntries(builds.map((build) => [build.id, build]));
