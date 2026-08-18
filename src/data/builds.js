import { armorById } from './armors';
import { charmById } from './charms';

const definitions = [
  {
    id: 'undying-melee',
    name: 'Armor of the Undying — Melee / Duel / Survival',
    armorId: 'armor-of-the-undying',
    category: 'Melee / Duel / Survival',
    charmIds: ['charm-of-mount-yotei', 'father-s-charm', 'charm-of-futsunushi', 'takezo-s-charm-of-the-stout-heart', 'charm-of-unhealthy-resolve', 'charm-of-enduring-resolve'],
    alternativeCharmIds: ['charm-of-stolen-flame'],
    guide: {
      rating: 5,
      overview: 'A forgiving traditional melee setup built for regular combat and demanding duels. It strengthens parries and dodges without disabling normal parries, while maintaining enough healing and Spirit support for prolonged encounters.',
      playstyle: 'Best for players who prefer direct katana combat, reactive defense, and steady survival rather than specialized crowd-control loops.',
      synergies: ['Charm of Futsunushi combines with the armor to widen defensive timing windows.', 'Charm of Mount Yotei, Father’s Charm, and Takezo’s Charm of the Stout Heart provide layered sustain.', 'Unhealthy Resolve and Enduring Resolve help keep Spirit techniques available.'],
      strengths: ['Excellent defensive consistency', 'Strong sustain in long duels', 'Keeps normal parries available'],
      weaknesses: ['Relies on weapon alignment for the armor perks', 'Offers less crowd control than Terror or Quickfire builds'],
    },
  },
  {
    id: 'nine-tails-fire',
    name: 'Nine Tails Armor — Fire Kunai / Quickfire',
    armorId: 'nine-tails-armor',
    category: 'Fire Kunai / Quickfire',
    charmIds: ['charm-of-homusubi', 'charm-of-fearful-end', 'charm-of-hidden-blades', 'charm-of-burning-blades', 'charm-of-lingering-affliction', 'charm-of-generous-opponents'],
    alternativeCharmIds: [],
    guide: {
      rating: 5,
      overview: 'An aggressive camp-clearing build that turns Kunai into a repeating source of fire, status damage, and Terror. Its resource loop is designed to keep Quickfire pressure active across large groups.',
      playstyle: 'Open with burning Kunai, exploit extended status effects, then use Smoke Bomb assassinations and looting to recover Quickfire ammunition and restart the loop.',
      synergies: ['Hidden Blades increases the number of Kunai thrown.', 'Burning Blades and Homusubi add and amplify Fire damage.', 'Lingering Affliction extends harmful effects, while Generous Opponents supports ammunition recovery.', 'Fearful End adds crowd disruption through Terror.'],
      strengths: ['Exceptional group clearing', 'Strong status-effect scaling', 'Sustainable Quickfire resource loop'],
      weaknesses: ['Resource-dependent', 'Less focused on traditional melee and dueling'],
    },
  },
  {
    id: 'dragonfly-true-aim',
    name: 'Dragonfly Armor — True Aim / General Ranged',
    armorId: 'dragonfly-armor',
    category: 'True Aim / General Ranged',
    charmIds: ['charm-of-true-aim', 'mother-s-charm', 'charm-of-fearful-strike', 'charm-of-archer-s-fortune', 'charm-of-generous-opponents', 'charm-of-fatal-silence'],
    alternativeCharmIds: [],
    guide: {
      rating: 5,
      overview: 'The general-purpose Dragonfly setup, combining empowered arrows with True Aim for reliable ranged kills and strong camp-opening potential.',
      playstyle: 'Engage from range, use fully drawn empowered shots to remove priority targets, and maintain a quiet, ammunition-efficient firing rhythm.',
      synergies: ['True Aim and Mother’s Charm form the core damage package.', 'Archer’s Fortune improves arrow recovery.', 'Fatal Silence preserves stealth, while Fearful Strike can disrupt nearby enemies after headshot kills.', 'Generous Opponents adds Quickfire recovery utility.'],
      strengths: ['High ranged damage', 'Strong opening attacks', 'Good ammunition and stealth support'],
      weaknesses: ['Less durable under sustained melee pressure', 'Depends on accurate ranged execution'],
    },
  },
  {
    id: 'dragonfly-defensive',
    name: 'Dragonfly Armor — Defensive Ranged',
    armorId: 'dragonfly-armor',
    category: 'Defensive Ranged',
    charmIds: ['mother-s-charm', 'charm-of-true-aim', 'charm-of-iron-focus', 'charm-of-uncanny-aim', 'charm-of-thoughtful-restoration', 'charm-of-mount-yotei'],
    alternativeCharmIds: [],
    guide: {
      rating: 5,
      overview: 'A safer Dragonfly variant that keeps the True Aim damage core while trading offensive utility for Concentration, maximum Health, and damage reduction.',
      playstyle: 'Maintain distance and use extended Concentration to place empowered shots, with enough defensive support to survive mistakes or forced close-range exchanges.',
      synergies: ['True Aim and Mother’s Charm provide ranged damage.', 'Iron Focus extends Concentration time.', 'Thoughtful Restoration and Mount Yotei add Health and damage mitigation.', 'Uncanny Aim improves Quickfire damage when the bow is not ideal.'],
      strengths: ['Balanced damage and survivability', 'Longer Concentration window', 'More forgiving than the general ranged variant'],
      weaknesses: ['Lower crowd-control utility', 'Fewer ammunition-recovery tools'],
    },
  },
  {
    id: 'dragonfly-takezo',
    name: 'Dragonfly Armor — Takezo / Boss Ranged',
    armorId: 'dragonfly-armor',
    category: 'Takezo / Boss Ranged',
    charmIds: ['mother-s-charm', 'charm-of-amenowakahiko', 'charm-of-raining-arrows', 'charm-of-true-aim', 'charm-of-iron-focus', 'charm-of-last-chance'],
    alternativeCharmIds: [],
    guide: {
      rating: 5,
      overview: 'A boss-oriented ranged variant designed to concentrate bow damage into controlled openings while retaining an emergency survival effect.',
      playstyle: 'Use Concentration and True Aim to capitalize on safe firing windows, with Raining Arrows providing an alternate high-pressure ranged option.',
      synergies: ['True Aim and Mother’s Charm anchor the damage output.', 'Amenowakahiko can return Spirit on headshots.', 'Iron Focus increases available Concentration time.', 'Last Chance provides protection against lethal mistakes.'],
      strengths: ['Powerful single-target ranged pressure', 'Spirit generation from headshots', 'Emergency survivability'],
      weaknesses: ['Highly dependent on ranged openings', 'Less efficient for stealth and ammunition recovery'],
    },
  },
  {
    id: 'spider-lily-stagger',
    name: 'Spider Lily Armor — Stagger / Oni’s Flame',
    armorId: 'spider-lily-armor',
    category: 'Stagger / Oni’s Flame',
    charmIds: ['charm-of-futsunushi', 'charm-of-fiery-rage', 'charm-of-homusubi', 'charm-of-lingering-affliction', 'charm-of-fire-mastery', 'charm-of-brutal-volley'],
    alternativeCharmIds: [],
    guide: {
      rating: 4.5,
      overview: 'An aggressive melee build that amplifies Spider Lily’s native Stagger effects with Oni’s Flame and powerful thrown weapons.',
      playstyle: 'Break enemy posture in close combat, spread Fire through heavy attacks, and throw the weapons dropped by enemies back into the group.',
      synergies: ['Fiery Rage, Homusubi, Lingering Affliction, and Fire Mastery reinforce Oni’s Flame damage and duration.', 'Brutal Volley turns dropped melee weapons into strong projectiles.', 'Futsunushi improves defensive timing while fighting at close range.'],
      strengths: ['Exceptional Stagger pressure', 'Strong melee area damage', 'Makes effective use of dropped weapons'],
      weaknesses: ['Requires close-range momentum', 'Provides less stealth and ranged control'],
    },
  },
  {
    id: 'onryo-terror',
    name: 'Onryō Armor — Terror / Ghost Stance',
    armorId: 'onryo-armor',
    category: 'Terror / Ghost Stance',
    charmIds: ['charm-of-onryo-s-protection', 'charm-of-howling-terror', 'charm-of-eager-revenge', 'charm-of-hachiman', 'charm-of-burning-blades', 'charm-of-confident-strikes'],
    alternativeCharmIds: [],
    guide: {
      rating: 4.5,
      overview: 'A crowd-focused Terror build designed to trigger Onryō’s Howl and Ghost Stance as often as possible, allowing large groups to collapse through fear and momentum.',
      playstyle: 'Build kill streaks, protect them from being fully reset, and chain Terror effects to reduce the number of enemies actively fighting back.',
      synergies: ['Onryo’s Protection preserves more kill-streak progress after taking damage.', 'Howling Terror and Eager Revenge reduce the requirements for key Onryō abilities.', 'Burning Blades, Hachiman, and Confident Strikes add offensive routes for sustaining momentum.'],
      strengths: ['Excellent against large groups', 'Frequent Terror and Ghost Stance access', 'Strong thematic crowd control'],
      weaknesses: ['Less effective in one-on-one encounters', 'Needs kill-streak momentum to reach full power'],
    },
  },
  {
    id: 'crimson-stealth',
    name: 'Crimson Kimono — Stealth / Assassination',
    armorId: 'crimson-kimono',
    category: 'Stealth / Assassination',
    charmIds: ['charm-of-fearful-end', 'charm-of-hachiman', 'charm-of-brutal-volley', 'charm-of-hidden-blades', 'charm-of-lingering-shadows', 'charm-of-confusion'],
    alternativeCharmIds: [],
    guide: {
      rating: 4.5,
      overview: 'A dedicated assassination build that uses the Crimson Kimono’s ranged Kusarigama and Kunai tools to dismantle camps before open combat begins.',
      playstyle: 'Remain undetected, chain ranged assassinations, and use Kunai or Confusion to control enemies that cannot be removed cleanly.',
      synergies: ['Lingering Shadows reinforces the armor’s reduced detection.', 'Hidden Blades and Brutal Volley improve Kunai and thrown-weapon pressure.', 'Fearful End adds Terror to assassinations, while Confusion can temporarily turn Leaders into allies.'],
      strengths: ['Fast camp clearing', 'Powerful assassination reach', 'Multiple stealth crowd-control tools'],
      weaknesses: ['Less effective after stealth is broken', 'Not specialized for direct boss fights'],
    },
  },
  {
    id: 'crimson-hybrid',
    name: 'Crimson Kimono — Hybrid Stealth / Ranged',
    armorId: 'crimson-kimono',
    category: 'Hybrid Stealth / Ranged',
    charmIds: ['charm-of-uncanny-aim', 'father-s-charm', 'charm-of-fearful-end', 'charm-of-thoughtful-restoration', 'charm-of-true-aim', 'charm-of-mount-yotei'],
    alternativeCharmIds: [],
    guide: {
      rating: 4.5,
      overview: 'A flexible Crimson Kimono variant that preserves ranged assassination pressure while adding bow damage and a substantial defensive safety net.',
      playstyle: 'Begin encounters through stealth or ranged attacks, then rely on Health, damage reduction, and Perfect Parry healing if the fight becomes direct.',
      synergies: ['True Aim expands the ranged options beyond assassinations.', 'Fearful End retains Terror potential from stealth kills.', 'Father’s Charm, Thoughtful Restoration, and Mount Yotei provide layered defense.', 'Uncanny Aim improves Quickfire damage.'],
      strengths: ['Flexible stealth-to-combat transition', 'Strong survivability', 'Useful bow and Quickfire options'],
      weaknesses: ['Less specialized than the pure assassination build', 'Gives up several Kunai and detection synergies'],
    },
  },
  {
    id: 'bounty-parry',
    name: 'Bounty Master Armor — Perfect Parry / Bosses',
    armorId: 'bounty-master-armor',
    category: 'Perfect Parry / Bosses',
    charmIds: ['takezo-s-charm-of-bold-deflection', 'charm-of-futsunushi', 'father-s-charm', 'charm-of-mount-yotei', 'charm-of-last-chance', 'charm-of-healing'],
    alternativeCharmIds: [],
    guide: {
      rating: 4.5,
      overview: 'A specialized boss build for players committed to Perfect Parries and Perfect Dodges. It converts precise defense into extra counters, Stagger damage, healing, and Spirit.',
      playstyle: 'Stay in close range, read enemy timing, and repeatedly punish attacks with Perfect Parries rather than relying on regular defensive exchanges.',
      synergies: ['Futsunushi expands the Perfect Parry and Perfect Dodge windows.', 'Bold Deflection adds Stagger damage to parries.', 'Father’s Charm, Mount Yotei, Healing, and Last Chance create a strong survival package.'],
      strengths: ['Excellent boss performance', 'High reward for precise defense', 'Strong healing and emergency protection'],
      weaknesses: ['Regular Parries are disabled', 'High execution requirement', 'Less suitable for players who prefer flexible defense'],
    },
  },
];

const guideTranslationsEs = {
  'undying-melee': {
    overview: 'Una configuración tradicional de Melee permisiva, pensada para el combate normal y los duelos exigentes. Refuerza los parries y dodges sin deshabilitar los parries normales, y mantiene suficiente curación y soporte de Spirit para encuentros prolongados.',
    playstyle: 'Ideal para quienes prefieren el combate directo con katana, una defensa reactiva y supervivencia constante en lugar de ciclos especializados de control de grupos.',
    synergies: [
      'Charm of Futsunushi se combina con la armadura para ampliar las ventanas defensivas.',
      'Charm of Mount Yotei, Father’s Charm y Takezo’s Charm of the Stout Heart proporcionan varias capas de recuperación.',
      'Unhealthy Resolve y Enduring Resolve ayudan a mantener disponibles las técnicas que consumen Spirit.',
    ],
    strengths: ['Excelente consistencia defensiva', 'Gran supervivencia en duelos largos', 'Mantiene disponibles los parries normales'],
    weaknesses: ['Depende de la alineación del arma para activar las perks de la armadura', 'Ofrece menos control de grupos que los builds de Terror o Quickfire'],
  },
  'nine-tails-fire': {
    overview: 'Un build agresivo para limpiar campamentos que convierte los Kunai en una fuente constante de Fire, daño de estado y Terror. Su ciclo de recursos está diseñado para mantener activa la presión de Quickfire contra grupos numerosos.',
    playstyle: 'Empezá con Kunai incendiarios, aprovechá la duración extendida de los efectos de estado y después usá Smoke Bomb, assassinations y saqueo para recuperar munición de Quickfire y reiniciar el ciclo.',
    synergies: [
      'Hidden Blades aumenta la cantidad de Kunai arrojados.',
      'Burning Blades y Homusubi agregan y potencian el daño de Fire.',
      'Lingering Affliction prolonga los efectos dañinos, mientras que Generous Opponents ayuda a recuperar munición.',
      'Fearful End agrega control de grupos mediante Terror.',
    ],
    strengths: ['Limpieza excepcional de grupos', 'Gran escalado de efectos de estado', 'Ciclo sostenible de recursos de Quickfire'],
    weaknesses: ['Depende de sus recursos', 'Está menos enfocado en Melee tradicional y duelos'],
  },
  'dragonfly-true-aim': {
    overview: 'La configuración generalista de Dragonfly, que combina flechas potenciadas con True Aim para conseguir bajas a distancia de forma confiable y comenzar campamentos con mucha ventaja.',
    playstyle: 'Atacá desde lejos, usá disparos potenciados con carga completa para eliminar objetivos prioritarios y mantené un ritmo silencioso y eficiente de disparos.',
    synergies: [
      'True Aim y Mother’s Charm forman el núcleo de daño.',
      'Archer’s Fortune mejora la recuperación de flechas.',
      'Fatal Silence conserva el stealth, mientras que Fearful Strike puede alterar a enemigos cercanos después de bajas con headshot.',
      'Generous Opponents agrega recuperación de Quickfire.',
    ],
    strengths: ['Daño a distancia elevado', 'Ataques iniciales muy fuertes', 'Buen soporte de munición y stealth'],
    weaknesses: ['Menor resistencia bajo presión sostenida de Melee', 'Depende de una ejecución precisa a distancia'],
  },
  'dragonfly-defensive': {
    overview: 'Una variante más segura de Dragonfly que conserva el núcleo de daño de True Aim y cambia parte de la utilidad ofensiva por Concentration, Health máxima y reducción de daño.',
    playstyle: 'Mantené la distancia y usá Concentration extendida para colocar disparos potenciados, con suficiente soporte defensivo para sobrevivir errores o intercambios forzados a corta distancia.',
    synergies: [
      'True Aim y Mother’s Charm aportan el daño a distancia.',
      'Iron Focus extiende la duración de Concentration.',
      'Thoughtful Restoration y Mount Yotei agregan Health y mitigación de daño.',
      'Uncanny Aim mejora el daño de Quickfire cuando el arco no es la mejor opción.',
    ],
    strengths: ['Buen equilibrio entre daño y supervivencia', 'Ventana de Concentration más larga', 'Más permisivo que la variante ranged general'],
    weaknesses: ['Menor utilidad para controlar grupos', 'Menos herramientas de recuperación de munición'],
  },
  'dragonfly-takezo': {
    overview: 'Una variante ranged orientada a bosses, diseñada para concentrar el daño del arco en ventanas controladas y conservar un efecto de supervivencia de emergencia.',
    playstyle: 'Usá Concentration y True Aim para aprovechar ventanas seguras de disparo, con Raining Arrows como alternativa ranged de alta presión.',
    synergies: [
      'True Aim y Mother’s Charm sostienen el daño principal.',
      'Amenowakahiko puede devolver Spirit con headshots.',
      'Iron Focus aumenta el tiempo disponible de Concentration.',
      'Last Chance protege contra errores letales.',
    ],
    strengths: ['Gran presión ranged contra un solo objetivo', 'Generación de Spirit mediante headshots', 'Supervivencia de emergencia'],
    weaknesses: ['Depende mucho de encontrar ventanas para atacar a distancia', 'Es menos eficiente para stealth y recuperación de munición'],
  },
  'spider-lily-stagger': {
    overview: 'Un build de Melee agresivo que potencia los efectos naturales de Stagger de Spider Lily mediante Oni’s Flame y armas arrojadizas poderosas.',
    playstyle: 'Rompé la postura enemiga a corta distancia, propagá Fire con Heavy Attacks y devolvé al grupo las armas que dejan caer los enemigos.',
    synergies: [
      'Fiery Rage, Homusubi, Lingering Affliction y Fire Mastery refuerzan el daño y la duración de Oni’s Flame.',
      'Brutal Volley convierte las armas de Melee caídas en proyectiles muy fuertes.',
      'Futsunushi mejora las ventanas defensivas durante el combate cercano.',
    ],
    strengths: ['Presión de Stagger excepcional', 'Gran daño de área en Melee', 'Aprovecha muy bien las armas caídas'],
    weaknesses: ['Necesita mantener el impulso a corta distancia', 'Ofrece menos stealth y control ranged'],
  },
  'onryo-terror': {
    overview: 'Un build de Terror orientado al control de grupos, diseñado para activar Onryō’s Howl y Ghost Stance con la mayor frecuencia posible, haciendo que grupos numerosos colapsen mediante miedo y momentum.',
    playstyle: 'Acumulá kill streaks, evitá que se reinicien por completo y encadená efectos de Terror para reducir la cantidad de enemigos que pueden seguir atacando.',
    synergies: [
      'Onryo’s Protection conserva más progreso del kill streak después de recibir daño.',
      'Howling Terror y Eager Revenge reducen los requisitos de habilidades clave de Onryō.',
      'Burning Blades, Hachiman y Confident Strikes agregan opciones ofensivas para mantener el momentum.',
    ],
    strengths: ['Excelente contra grupos numerosos', 'Acceso frecuente a Terror y Ghost Stance', 'Control de grupos muy temático'],
    weaknesses: ['Menos efectivo en encuentros uno contra uno', 'Necesita momentum de kill streak para alcanzar su máximo potencial'],
  },
  'crimson-stealth': {
    overview: 'Un build dedicado a assassinations que usa el Kusarigama ranged y las herramientas de Kunai de Crimson Kimono para desarmar campamentos antes de que empiece el combate abierto.',
    playstyle: 'Permanecé sin detectar, encadená assassinations a distancia y usá Kunai o Confusion para controlar enemigos que no puedan eliminarse limpiamente.',
    synergies: [
      'Lingering Shadows refuerza la reducción de detección de la armadura.',
      'Hidden Blades y Brutal Volley mejoran la presión de Kunai y armas arrojadizas.',
      'Fearful End agrega Terror a las assassinations, mientras que Confusion puede convertir temporalmente a Leaders en aliados.',
    ],
    strengths: ['Limpieza rápida de campamentos', 'Gran alcance de assassination', 'Varias herramientas de control mediante stealth'],
    weaknesses: ['Menos efectivo después de perder el stealth', 'No está especializado en peleas directas contra bosses'],
  },
  'crimson-hybrid': {
    overview: 'Una variante flexible de Crimson Kimono que conserva la presión de assassination a distancia y agrega daño con arco junto con una importante red de seguridad defensiva.',
    playstyle: 'Iniciá los encuentros mediante stealth o ataques ranged y después apoyate en Health, reducción de daño y curación con Perfect Parry si el combate se vuelve directo.',
    synergies: [
      'True Aim amplía las opciones ranged más allá de las assassinations.',
      'Fearful End conserva el potencial de Terror de las bajas desde stealth.',
      'Father’s Charm, Thoughtful Restoration y Mount Yotei aportan varias capas defensivas.',
      'Uncanny Aim mejora el daño de Quickfire.',
    ],
    strengths: ['Transición flexible entre stealth y combate', 'Gran supervivencia', 'Buenas opciones de arco y Quickfire'],
    weaknesses: ['Está menos especializado que el build puro de assassination', 'Renuncia a varias sinergias de Kunai y detección'],
  },
  'bounty-parry': {
    overview: 'Un build especializado en bosses para quienes se comprometen con Perfect Parries y Perfect Dodges. Convierte una defensa precisa en counters adicionales, Stagger, curación y Spirit.',
    playstyle: 'Mantenete a corta distancia, leé el timing enemigo y castigá repetidamente los ataques con Perfect Parries en lugar de depender de intercambios defensivos normales.',
    synergies: [
      'Futsunushi amplía las ventanas de Perfect Parry y Perfect Dodge.',
      'Bold Deflection agrega Stagger a los parries.',
      'Father’s Charm, Mount Yotei, Healing y Last Chance forman un paquete de supervivencia muy sólido.',
    ],
    strengths: ['Excelente rendimiento contra bosses', 'Gran recompensa por una defensa precisa', 'Curación fuerte y protección de emergencia'],
    weaknesses: ['Los parries normales están deshabilitados', 'Requiere mucha precisión', 'Menos adecuado para quienes prefieren una defensa flexible'],
  },
};

const requireArmor = (id) => {
  const armor = armorById[id];
  if (!armor) throw new Error(`Armor inexistente: ${id}`);
  return armor;
};

const requireCharm = (id) => {
  const charm = charmById[id];
  if (!charm) throw new Error(`Charm inexistente: ${id}`);
  return charm;
};

export const builds = definitions.map((build) => {
  const { rating, overview, playstyle, synergies, strengths, weaknesses } = build.guide;

  return {
    ...build,
    guide: {
      rating,
      translations: {
        en: { overview, playstyle, synergies, strengths, weaknesses },
        es: guideTranslationsEs[build.id],
      },
    },
    armor: requireArmor(build.armorId),
    charms: build.charmIds.map(requireCharm),
    alternativeCharms: build.alternativeCharmIds.map(requireCharm),
  };
});

export const buildById = Object.fromEntries(builds.map((build) => [build.id, build]));
