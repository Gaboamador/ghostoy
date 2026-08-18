// Datos normalizados desde la lista provista por el usuario.
export const slugify = (value) => value.toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

export const charms = [
  {
    "id": "charm-of-howling-terror",
    "name": "Charm of Howling Terror",
    "slot": "Major",
    "type": "Onryo",
    "effect": "Reduce the kill streak requirement of Onryo's Howl by 1.",
    "howToGet": "Obtained from the Onryo Gift Altar after completing The Kitsune quest"
  },
  {
    "id": "charm-of-takemikazuchi",
    "name": "Charm of Takemikazuchi",
    "slot": "Major",
    "type": "Melee",
    "effect": "Heavenly Slash has a moderate chance to unleash a lightning strike against a nearby enemy. There is a 30 second cooldown between successful strikes.",
    "howToGet": "Found in the Budding Grace Shrine"
  },
  {
    "id": "charm-of-masakado",
    "name": "Charm of Masakado",
    "slot": "Major",
    "type": "Onryo",
    "effect": "Onryo's Will revives you at full health.",
    "howToGet": "Found in the Amber Respite Shrine"
  },
  {
    "id": "charm-of-yamatotakeru",
    "name": "Charm of Yamatotakeru",
    "slot": "Major",
    "type": "Melee",
    "effect": "Earn a moderate amount of Spirit after Disarming or killing an enemy with a thrown Melee weapon.",
    "howToGet": "Found in the Patient Frost Shrine"
  },
  {
    "id": "charm-of-amenowakahiko",
    "name": "Charm of Amenowakahiko",
    "slot": "Major",
    "type": "Ranged",
    "effect": "Headshots have a moderate chance to earn Spirit.",
    "howToGet": "Found in the Blooming Ridge Shrine"
  },
  {
    "id": "charm-of-kibitsuhiko",
    "name": "Charm of Kibitsuhiko",
    "slot": "Major",
    "type": "Ranged",
    "effect": "Land headshots while using Concentration to extend its duration by a minor amount.",
    "howToGet": "Found in the Risen Fog Shrine"
  },
  {
    "id": "charm-of-amaterasu",
    "name": "Charm of Amaterasu",
    "slot": "Major",
    "type": "Defense",
    "effect": "Defeating enemies regains a moderate amount of Health.",
    "howToGet": "Obtained by purchasing the Deluxe Edition"
  },
  {
    "id": "charm-of-izanagi",
    "name": "Charm of Izanagi",
    "slot": "Major",
    "type": "Stealth",
    "effect": "All types of Assassinations regain a minor amount of Health.",
    "howToGet": "Found in the Sun's Peak Shrine"
  },
  {
    "id": "charm-of-masaka",
    "name": "Charm of Masaka",
    "slot": "Major",
    "type": "Stealth",
    "effect": "Using a Smoke Bomb regains a minor amount of Health.",
    "howToGet": "Found in the Enduring Hold Shrine"
  },
  {
    "id": "charm-of-sukunahikona",
    "name": "Charm of Sukunahikona",
    "slot": "Major",
    "type": "Defense",
    "effect": "Earn Health at a minor rate while not in combat.",
    "howToGet": "Found in the Chilled Peak Shrine"
  },
  {
    "id": "charm-of-eager-revenge",
    "name": "Charm of Eager Revenge",
    "slot": "Major",
    "type": "Onryo",
    "effect": "Reduce the kill streak requirement of Ghost Stance by 1.",
    "howToGet": "Bought from Taro the Scavenger"
  },
  {
    "id": "charm-of-raining-arrows",
    "name": "Charm of Raining Arrows",
    "slot": "Major",
    "type": "Ranged",
    "effect": "The Hakyu rapidly fires arrows with automatic aim. Arrow damage is increased by moderate amount, but disables headshots.",
    "howToGet": "Complete Secrets of the Heart side quest at Teshio Ridge"
  },
  {
    "id": "charm-of-futsunushi",
    "name": "Charm of Futsunushi",
    "slot": "Major",
    "type": "Defense",
    "effect": "Parries, Perfect Parries, and Perfect Dodges are easier to perform.",
    "howToGet": "Found in the Faithful Leap Shrine"
  },
  {
    "id": "charm-of-onryo-s-protection",
    "name": "Charm of Onryo's Protection",
    "slot": "Major",
    "type": "Onryo",
    "effect": "Taking damage reduces kill streak count by 2 instead of resetting it. Kill streaks power Onryo's Howl and other deadly techniques.",
    "howToGet": "Bought from Taro the Scavenger"
  },
  {
    "id": "charm-of-taming",
    "name": "Charm of Taming",
    "slot": "Major",
    "type": "Defense",
    "effect": "Playing the shamisen turns nearby hostile animals into allies.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-onryo-s-wrath",
    "name": "Charm of Onryo's Wrath",
    "slot": "Major",
    "type": "Onryo",
    "effect": "After using Onryo's Will, you have a minor chance to trigger Onryo's Howl.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-mauling",
    "name": "Charm of Mauling",
    "slot": "Major",
    "type": "Onryo",
    "effect": "Wolf attacks make enemies Vulnerable for a moderate duration. All weapons inflict maximum damage regardless of enemy weapon type.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-iron-grip",
    "name": "Charm of Iron Grip",
    "slot": "Major",
    "type": "Melee",
    "effect": "You cannot be disarmed.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-confusion",
    "name": "Charm of Confusion",
    "slot": "Major",
    "type": "Stealth",
    "effect": "Assassinations on enemy Leaders will Confuse them, turning them into an ally for a short duration. The Leader dies when the effect ends.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-terrors",
    "name": "Charm of Terrors",
    "slot": "Major",
    "type": "Onryo",
    "effect": "Increases all chances to Terrify by a minor amount.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-wolf-stalking",
    "name": "Charm of Wolf Stalking",
    "slot": "Major",
    "type": "Onryo",
    "effect": "Assassinations in areas where the wolf can be summoned have a minor chance to summon the wolf instantly. The wolf performs a stealth assassination if able.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-drunken-mastery",
    "name": "Charm of Drunken Mastery",
    "slot": "Major",
    "type": "Melee",
    "effect": "While drunk, enemies are Vulnerable. All weapons inflict maximum damage regardless of weapon type.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-the-drunkard",
    "name": "Charm of the Drunkard",
    "slot": "Major",
    "type": "Melee",
    "effect": "While drunk, your attacks are unblockable, but you will be unable to block enemy attacks. Your drunken state will last longer for a minor duration.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-true-aim",
    "name": "Charm of True Aim",
    "slot": "Major",
    "type": "Ranged",
    "effect": "The Yumi locks-on to an enemy and fires 1 arrow, inflicting massive damage.",
    "howToGet": "Obtained after completing the The Legend of Opusnupuri myth quest"
  },
  {
    "id": "charm-of-hachiman",
    "name": "Charm of Hachiman",
    "slot": "Major",
    "type": "Melee",
    "effect": "Maximum Standoff Streak increased by 1. After a successful Standoff, an additional enemy will rush in and open themselves to a killing blow.",
    "howToGet": "Obtained as you progress throught The Oni quest line."
  },
  {
    "id": "charm-of-homusubi",
    "name": "Charm of Homusubi",
    "slot": "Major",
    "type": "Utility",
    "effect": "Inflict increased Fire damage to enemies.",
    "howToGet": "Found in the Winding Tears Shrine at the end of a path"
  },
  {
    "id": "mother-s-charm",
    "name": "Mother's Charm",
    "slot": "Major",
    "type": "Ranged",
    "effect": "A gift from your mother. Her presence on the wind quickens your Arrows, increasing their damage by a minor amount.",
    "howToGet": "Found in the Mount Yotei Shrine at the end of a path"
  },
  {
    "id": "charm-of-kanayago",
    "name": "Charm of Kanayago",
    "slot": "Major",
    "type": "Utility",
    "effect": "Increase the amount of common and rare metals, and black powder collected when scavenging.",
    "howToGet": "Found in the Fall's Rest Shrine at the end of a path"
  },
  {
    "id": "father-s-charm",
    "name": "Father's Charm",
    "slot": "Major",
    "type": "Defense",
    "effect": "A gift from your father, so your sword flows like a brush stroke. Perfect Parries regain a minor amount of Health.",
    "howToGet": "Found in the Mount Yotei Shrine at the end of a path"
  },
  {
    "id": "charm-of-thoughtful-restoration",
    "name": "Charm of Thoughtful Restoration",
    "slot": "Major",
    "type": "Defense",
    "effect": "A reflection ripples in the water and the mind. Gain a minor increase to maximum Health",
    "howToGet": "Dip in the Yotei's Shadow Hot Spring"
  },
  {
    "id": "charm-of-inner-fire",
    "name": "Charm of Inner Fire",
    "slot": "Minor",
    "type": "Defense",
    "effect": "Blizzard damage is reduced by half.",
    "howToGet": "Bought from Taro the Scavenger"
  },
  {
    "id": "charm-of-fortitude",
    "name": "Charm of Fortitude",
    "slot": "Minor",
    "type": "Defense",
    "effect": "Moderate chance to survive lethal damage and gain Spirit.",
    "howToGet": "Complete No Brother Left Behind side quest at Teshio Ridge"
  },
  {
    "id": "charm-of-fiery-rage",
    "name": "Charm of Fiery Rage",
    "slot": "Minor",
    "type": "Melee",
    "effect": "Increased duration of Oni's Flame by a moderate amount.",
    "howToGet": "Win two games of Zeni Hajiki with the NPC found at Benten Inn"
  },
  {
    "id": "charm-of-the-prepared",
    "name": "Charm of the Prepared",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "The Tanegashima reloads while stowed.",
    "howToGet": "Obtained after praying to the shrine found in the Blushing Forest Fox Den"
  },
  {
    "id": "charm-of-fearful-strike",
    "name": "Charm of Fearful Strike",
    "slot": "Minor",
    "type": "Onryo",
    "effect": "Headshot kills have a minor chance to Terrify nearby enemies.",
    "howToGet": "Obtained from the Onryo Gift Altar after completing The Oni quest"
  },
  {
    "id": "charm-of-fatal-silence",
    "name": "Charm of Fatal Silence",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "Arrows are silent on impact",
    "howToGet": "Win two games of Zeni Hajiki with the NPC found at Red Crane Inn"
  },
  {
    "id": "charm-of-venomous-cloud",
    "name": "Charm of Venomous Cloud",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "Metsubushi now inflict Poison which deal minor Stagger damage over time.",
    "howToGet": "Complete The Blind Stranger sensei tale quest at Teshio Ridge"
  },
  {
    "id": "charm-of-drunken-adversary",
    "name": "Charm of Drunken Adversary",
    "slot": "Minor",
    "type": "Melee",
    "effect": "Enemies killed in a Standoff have a minor chance of carrying lootable Sake.",
    "howToGet": "Solve the sixth Puzzle Box at the Kitsune Shrine in Teshio Ridge"
  },
  {
    "id": "charm-of-quick-retrieval",
    "name": "Charm of Quick Retrieval",
    "slot": "Minor",
    "type": "Melee",
    "effect": "When you Disarm an enemy, immediately pick up their dropped weapon.",
    "howToGet": "Win two games of Zeni Hajiki with the NPC found at Bifuka Sake House"
  },
  {
    "id": "charm-of-the-wary-opponent",
    "name": "Charm of the Wary Opponent",
    "slot": "Minor",
    "type": "Stealth",
    "effect": "Press L2 to focus on an enemy who has begun to detect you.",
    "howToGet": "Solve the first Puzzle Box at the Kitsune Shrine in Teshio Ridge"
  },
  {
    "id": "charm-of-hidden-blades",
    "name": "Charm of Hidden Blades",
    "slot": "Minor",
    "type": "Melee",
    "effect": "Throw 1 additional Kunai.",
    "howToGet": "Clear the first Hana's Farm during The Winter Farms side quest at Teshio Ridge"
  },
  {
    "id": "charm-of-assassin-s-resolve",
    "name": "Charm of Assassin's Resolve",
    "slot": "Minor",
    "type": "Stealth",
    "effect": "All types of Assassinations grant a minor amount of additional Spirit.",
    "howToGet": "Obtained after praying to the shrine found in the Flowing Water Fox Den"
  },
  {
    "id": "charm-of-opportunity",
    "name": "Charm of Opportunity",
    "slot": "Minor",
    "type": "Stealth",
    "effect": "Automatically loot assassinated enemies.",
    "howToGet": "Obtained after praying to the shrine found in the Winding River Fox Den"
  },
  {
    "id": "charm-of-brutal-volley",
    "name": "Charm of Brutal Volley",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "Increase damage of thrown Melee weapons by a moderate amount.",
    "howToGet": "Obtained after praying to the shrine found in the Grassy Hill Fox Den"
  },
  {
    "id": "charm-of-defensive-blade",
    "name": "Charm of Defensive Blade",
    "slot": "Minor",
    "type": "Melee",
    "effect": "Recover 1 Kunai after performing a Perfect Dodge.",
    "howToGet": "Bought from Taro the Scavenger"
  },
  {
    "id": "charm-of-fearful-end",
    "name": "Charm of Fearful End",
    "slot": "Minor",
    "type": "Onryo",
    "effect": "All types of Assassinations have a minor chance to Terrify nearby enemies.",
    "howToGet": "Obtained from the Onryo Gift Altar after completing The Way of Dual Katana quest"
  },
  {
    "id": "charm-of-tanzutsu-guard",
    "name": "Charm of Tanzutsu Guard",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "Interrupting an attack with the Tanzutsu has a minor chance to regain 1 bullet.",
    "howToGet": "Bought from Taro the Scavenger"
  },
  {
    "id": "charm-of-soaring-focus",
    "name": "Charm of Soaring Focus",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "Earn infinite Concentration when aiming a bow or rifle while jumping.",
    "howToGet": "Liberate the Yotei's Shadow Inn a second time after defeating your first Yotei Six member"
  },
  {
    "id": "charm-of-fire-mastery",
    "name": "Charm of Fire Mastery",
    "slot": "Minor",
    "type": "Melee",
    "effect": "Oni's Flame inflicts additional damage. Heavy attacks with ignited weapons spread to nearby enemies.",
    "howToGet": "Win two games of Zeni Hajiki with the NPC found at Ishikari Market Gambling Den"
  },
  {
    "id": "charm-of-last-chance",
    "name": "Charm of Last Chance",
    "slot": "Minor",
    "type": "Defense",
    "effect": "Heal technique triggers automatically when suffering lethal damage from combat.",
    "howToGet": "Buy from Taro the Scavenger for 150 Coins"
  },
  {
    "id": "charm-of-bountiful-harvest",
    "name": "Charm of Bountiful Harvest",
    "slot": "Minor",
    "type": "Utility",
    "effect": "Increase the amount of wood, flowers, and plants gained when collecting them.",
    "howToGet": "Found on the Tree Stump beside the lake near the Old Stables"
  },
  {
    "id": "charm-of-resourceful-protection",
    "name": "Charm of Resourceful Protection",
    "slot": "Minor",
    "type": "Defense",
    "effect": "Blocking an Arrow has a moderate chance to add it to your inventory.",
    "howToGet": "Win two games of Zeni Hajiki with the NPC found at Second Floor of Hiranui's Rest Inn"
  },
  {
    "id": "charm-of-misfortune",
    "name": "Charm of Misfortune",
    "slot": "Minor",
    "type": "Cursed",
    "effect": "Curse: No longer gain resources or ammo from fallen enemies. While cursed, Ghost Flowers have a minor chance to drop from enemies.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-cursed-spirit",
    "name": "Charm of Cursed Spirit",
    "slot": "Minor",
    "type": "Cursed",
    "effect": "Curse: Actions that cost Spirit cost twice as much. While cursed, Ghost Flowers have a minor chance to drop from enemies.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-frailty",
    "name": "Charm of Frailty",
    "slot": "Minor",
    "type": "Cursed",
    "effect": "Curse: All successful enemy attacks are fatal. Onryo's Will is disabled. While cursed, Ghost Flowers have a minor chance to drop from enemies. Life saving effects from Techniques, Charms, and weapons are disabled.",
    "howToGet": "Bought from Masujiro the Melodious"
  },
  {
    "id": "charm-of-thunderous-assault",
    "name": "Charm of Thunderous Assault",
    "slot": "Minor",
    "type": "Melee",
    "effect": "Staggering an enemy with the Odachi grants a minor chance to knock down that enemy.",
    "howToGet": "Obtained after completing the Marshland Homestead tale quest"
  },
  {
    "id": "charm-of-mount-yotei",
    "name": "Charm of Mount Yotei",
    "slot": "Minor",
    "type": "Defense",
    "effect": "Reduce all damage taken by a minor amount",
    "howToGet": "Finish the puzzle of the Reliquary of Courage by turning all 4 nearby statues towards Mount Yotei itself."
  },
  {
    "id": "charm-of-stolen-flame",
    "name": "Charm of Stolen Flame",
    "slot": "Minor",
    "type": "Defense",
    "effect": "Automatically ignite your weapon by Parrying a fire attack or Blocking a Fire Arrow. While ignited, your weapon is unblockable.",
    "howToGet": "Win two games of Zeni Hajiki with the NPC found at Oni's Breath Inn"
  },
  {
    "id": "takezo-s-charm-of-bold-deflection",
    "name": "Takezo's Charm of Bold Deflection",
    "slot": "Minor",
    "type": "Defense",
    "effect": "Parrying inflicts a minor amount of additional Stagger damage.",
    "howToGet": "Defeat the third disciple at the Dueling Tree"
  },
  {
    "id": "charm-of-confident-strikes",
    "name": "Charm of Confident Strikes",
    "slot": "Minor",
    "type": "Melee",
    "effect": "A minor chance to gain 1 Spirit when Staggering an enemy with the Katana.",
    "howToGet": "Buy from Taro the Scavenger for 300 Coins"
  },
  {
    "id": "charm-of-fortune-s-grip",
    "name": "Charm of Fortune's Grip",
    "slot": "Minor",
    "type": "Melee",
    "effect": "If Disarmed, your weapon lands closer and you earn a Sake jar.",
    "howToGet": "Buy from Taro the Scavenger for 200 Coins"
  },
  {
    "id": "takezo-s-charm-of-the-unrelenting-warrior",
    "name": "Takezo's Charm of the Unrelenting Warrior",
    "slot": "Minor",
    "type": "Utility",
    "effect": "Deal bonus damage while at low Health.",
    "howToGet": "Defeat the Disciple of Takezo"
  },
  {
    "id": "charm-of-cannon-steps",
    "name": "Charm of Cannon Steps",
    "slot": "Minor",
    "type": "Melee",
    "effect": "The Yari's Typhoon Kick has a minor chance to instantly Stagger an enemy.",
    "howToGet": "Clear the Bold Kaji Forge"
  },
  {
    "id": "charm-of-healing",
    "name": "Charm of Healing",
    "slot": "Minor",
    "type": "Defense",
    "effect": "While at half Health or less, potency of the Heal Technique increases by a minor amount.",
    "howToGet": "Buy from Taro the Scavenger for 300 Coins"
  },
  {
    "id": "charm-of-furious-attacks",
    "name": "Charm of Furious Attacks",
    "slot": "Minor",
    "type": "Melee",
    "effect": "The Dual Katana's Tempest Strike deals a minor amount of additional damage.",
    "howToGet": "Buy from Taro the Scavenger for 300 Coins"
  },
  {
    "id": "charm-of-swift-reward",
    "name": "Charm of Swift Reward",
    "slot": "Minor",
    "type": "Melee",
    "effect": "Enemies defeated during a Standoff have a minor chance to drop throwable weapons.",
    "howToGet": "Obtained after praying to the shrine found in the Whispering Woods Fox Den"
  },
  {
    "id": "charm-of-resolute-victory",
    "name": "Charm of Resolute Victory",
    "slot": "Minor",
    "type": "Melee",
    "effect": "Standoff victories earn additional Spirit per enemy killed.",
    "howToGet": "Obtained after praying to the shrine found in the Fire Fox Den"
  },
  {
    "id": "charm-of-firewalking",
    "name": "Charm of Firewalking",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "Fire Arrows set the ground on fire in a minor radius.",
    "howToGet": "Obtained after completing the Every Man For Himself tale quest"
  },
  {
    "id": "charm-of-archer-s-fortune",
    "name": "Charm of Archer's Fortune",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "A moderately increased chance to recover arrows that kill or miss their target.",
    "howToGet": "Obtained after praying to the shrine found in the Warm Plains Fox Den"
  },
  {
    "id": "charm-of-iron-focus",
    "name": "Charm of Iron Focus",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "Increases total Concentration time by a minor amount.",
    "howToGet": "Complete the Ainu Hunting Grounds at Ishikari Plains"
  },
  {
    "id": "takezo-s-charm-of-renewed-determination",
    "name": "Takezo's Charm of Renewed Determination",
    "slot": "Minor",
    "type": "Defense",
    "effect": "Earn a minor amount of Spirit when taking damage from an enemy.",
    "howToGet": "Defeat the second disciple at the Dueling Tree"
  },
  {
    "id": "takezo-s-charm-of-the-stout-heart",
    "name": "Takezo's Charm of the Stout Heart",
    "slot": "Minor",
    "type": "Defense",
    "effect": "Increase potency of the Heal Technique by a minor amount.",
    "howToGet": "Defeat the fifth disciple at the Dueling Tree"
  },
  {
    "id": "charm-of-lingering-shadows",
    "name": "Charm of Lingering Shadows",
    "slot": "Minor",
    "type": "Stealth",
    "effect": "Reduce enemy detection speed by a minor amount.",
    "howToGet": "Obtained after praying to the shrine found in the High Wall Fox Den"
  },
  {
    "id": "takezo-s-charm-of-bracing-victory",
    "name": "Takezo's Charm of Bracing Victory",
    "slot": "Minor",
    "type": "Defense",
    "effect": "Killing Staggered enemies earns a minor amount of Health.",
    "howToGet": "Defeat the fourth disciple at the Dueling Tree"
  },
  {
    "id": "charm-of-generous-opponents",
    "name": "Charm of Generous Opponents",
    "slot": "Minor",
    "type": "Utility",
    "effect": "Chance to recover Quickfire ammo when looting the dead.",
    "howToGet": "Obtained after praying to the shrine found in the Clear Water Fox Den"
  },
  {
    "id": "charm-of-risk-and-reward",
    "name": "Charm of Risk and Reward",
    "slot": "Minor",
    "type": "Utility",
    "effect": "Kills regain a minor amount of Health, but you take increased damage.",
    "howToGet": "Complete The Face of a Demon tale quest at Nayoro Wilds"
  },
  {
    "id": "charm-of-unhealthy-resolve",
    "name": "Charm of Unhealthy Resolve",
    "slot": "Minor",
    "type": "Utility",
    "effect": "Kills earn a minor amount of Spirit, but your maximum Health is reduced.",
    "howToGet": "Complete The Face of a Master tale quest at Nayoro Wilds"
  },
  {
    "id": "charm-of-lingering-affliction",
    "name": "Charm of Lingering Affliction",
    "slot": "Minor",
    "type": "Utility",
    "effect": "All harmful status effects on enemies last moderately longer and deal a moderate amount of additional damage.",
    "howToGet": "Complete A Flower For Your Thoughts tale quest at Tokachi Range"
  },
  {
    "id": "charm-of-uncanny-aim",
    "name": "Charm of Uncanny Aim",
    "slot": "Minor",
    "type": "Utility",
    "effect": "Quickfire weapon damage increased by a moderate amount.",
    "howToGet": "Obtained after praying to the shrine found in the Lake View Fox Den"
  },
  {
    "id": "charm-of-abundant-drink",
    "name": "Charm of Abundant Drink",
    "slot": "Minor",
    "type": "Utility",
    "effect": "Increases the amount of Sake you can carry by 1.",
    "howToGet": "Win two games of Zeni Hajiki with the NPC found at Kuttara Gambling Den"
  },
  {
    "id": "charm-of-fearful-mastery",
    "name": "Charm of Fearful Mastery",
    "slot": "Minor",
    "type": "Onryo",
    "effect": "Disarming enemies has a minor chance to Terrify nearby enemies.",
    "howToGet": "Obtained from the Onryo Gift Altar in The Saito Brothers"
  },
  {
    "id": "toku-s-charm-of-blessings",
    "name": "Toku's Charm of Blessings",
    "slot": "Minor",
    "type": "Utility",
    "effect": "Increase Spirit earned by a minor amount.",
    "howToGet": "Bought from Taro the Scavenger after The Loss we Carry"
  },
  {
    "id": "charm-of-the-blind-drunk",
    "name": "Charm of the Blind Drunk",
    "slot": "Minor",
    "type": "Stealth",
    "effect": "Throwing Sake jars at enemies will briefly Blind them.",
    "howToGet": "Clear the Broken Horn Garrison and free the Prisoner"
  },
  {
    "id": "charm-of-shattering-strike",
    "name": "Charm of Shattering Strike",
    "slot": "Minor",
    "type": "Melee",
    "effect": "Shields destroyed with the Kusarigama unleash an explosion of shrapnel inflicting minor Stagger damage to nearby enemies.",
    "howToGet": "Free the Soya Port from Nine Tails control"
  },
  {
    "id": "charm-of-burning-blades",
    "name": "Charm of Burning Blades",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "Kunai now inflict Fire damage and ignite flammable objects",
    "howToGet": "Free all of Hana's Farms in The Winter Farms side quest"
  },
  {
    "id": "charm-of-fearful-defense",
    "name": "Charm of Fearful Defense",
    "slot": "Minor",
    "type": "Onryo",
    "effect": "When killing an enemy after a Perfect Parry or Perfect Dodge, the chance to Terrify nearby enemies is increased by a minor amount.",
    "howToGet": "Obtained from the Onryo Gift Altar after completing The Saito Brothers quest"
  },
  {
    "id": "charm-of-enduring-resolve",
    "name": "Charm of Enduring Resolve",
    "slot": "Minor",
    "type": "Utility",
    "effect": "Abilities that use Spirit have a minor chance to regain 1 Spirit.",
    "howToGet": "Obtained after praying to the shrine found in the Twin Path Fox Den"
  },
  {
    "id": "charm-of-hokkyokusei",
    "name": "Charm of Hokkyokusei",
    "slot": "Minor",
    "type": "Ranged",
    "effect": "Grants a minor chance to not consume Ranged weapon ammo.",
    "howToGet": "Redeem a code from the Sapporo beer promotion."
  },
  {
    "id": "charm-of-vanity",
    "name": "Charm of Vanity",
    "slot": "Minor",
    "type": "Utility",
    "effect": "Increase the duration of cooking perks. Enable cooking even when not hungry (Lv. II and up).",
    "howToGet": "Buy from Taro the Scavenger for 300 Coin."
  },
  {
    "id": "charm-of-surprise-gift",
    "name": "Charm of Surprise Gift",
    "slot": "Minor",
    "type": "Stealth",
    "effect": "Assassinated enemies have a minor chance to drop their weapon.",
    "howToGet": "Win two rounds of Zeni Hajiki at the Nakajima Sake House."
  }
];

export const charmById = Object.fromEntries(charms.map((item) => [item.id, item]));
