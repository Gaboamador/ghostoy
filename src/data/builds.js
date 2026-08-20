import { armorById, charmById } from './ghostOfYoteiSelectors';

const definitions = [
  {
    id: 'undying-melee',
    name: 'Armor of the Undying — Melee / Duel / Survival',
    armorId: 'armor-of-the-undying',
    category: 'Melee / Duel / Survival',
    charmIds: [
      'charm-of-mount-yotei',
      'father-s-charm',
      'charm-of-futsunushi',
      'takezo-s-charm-of-the-stout-heart',
      'charm-of-unhealthy-resolve',
      'charm-of-enduring-resolve'],
    alternativeCharmIds: [
      'charm-of-stolen-flame'
    ],
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
    charmIds: [
      'charm-of-homusubi',
      'charm-of-hidden-blades',
      'charm-of-burning-blades',
      'charm-of-lingering-affliction',
      'charm-of-uncanny-aim',
      'charm-of-generous-opponents',
    ],
    alternativeCharmIds: [
      'charm-of-fearful-end',
    ],
    guide: {
      rating: 5,
      overview:
        'An aggressive Quickfire build that turns Kunai into a repeating source of direct damage, Fire, and prolonged status effects while sustaining ammunition through looting.',
      playstyle:
        'Use enhanced Kunai as the primary offensive tool, spreading Fire and extended status effects across groups. Loot defeated enemies whenever practical to recover Quickfire ammunition and keep the pressure going.',
      synergies: [
        'Hidden Blades increases the number of Kunai thrown.',
        'Burning Blades adds Fire damage to Kunai.',
        'Uncanny Aim increases Quickfire weapon damage and stacks naturally with the Nine Tails Armor’s Quickfire-focused bonuses.',
        'Homusubi increases Fire damage.',
        'Lingering Affliction extends harmful status effects and increases their damage.',
        'Generous Opponents helps recover Quickfire ammunition when looting defeated enemies, sustaining the offensive loop.',
        'Fearful End can replace one of the offensive charms when additional Terrify from assassinations is preferred over maximum Quickfire damage.',
      ],
      strengths: [
        'Exceptional Kunai and Quickfire damage',
        'Strong Fire and status-effect scaling',
        'Excellent group-clearing potential',
        'Sustainable Quickfire ammunition loop',
        'Highly focused synergy between armor perks and charms',
      ],
      weaknesses: [
        'Dependent on Quickfire ammunition',
        'Less specialized for traditional melee or duels',
        'Fire and status effects are less valuable against targets that can be eliminated immediately',
      ],
    },
  },
  {
    id: 'dragonfly-sniper',
    name: 'Dragonfly Armor — Sniper',
    armorId: 'dragonfly-armor',
    category: 'Sniper / Camp Clearing',
    charmIds: [
      'mother-s-charm',
      'charm-of-true-aim',
      'charm-of-archer-s-fortune',
      'charm-of-fatal-silence',
      'charm-of-iron-focus',
      'charm-of-fearful-strike',
    ],
    alternativeCharmIds: [
      'charm-of-raining-arrows',
      'charm-of-kibitsuhiko',
    ],
    guide: {
      rating: 5,
      overview:
        'A dedicated sniper-style Dragonfly setup built around silent, accurate headshots, extended Concentration, and sustainable arrow usage while clearing enemies from long range.',
      playstyle:
        'Stay at range and use Concentration to line up empowered headshots. Recover arrows where possible, remain undetected through silent impacts, and use Fearful Strike to potentially disrupt nearby enemies after kills.',
      synergies: [
        'True Aim and Mother’s Charm form the core ranged damage package.',
        'Archer’s Fortune improves arrow recovery during sustained ranged engagements.',
        'Fatal Silence keeps arrow impacts quiet and supports clearing camps without revealing your position.',
        'Iron Focus extends Concentration time, making precise long-range shots easier to place.',
        'Fearful Strike gives headshot kills a chance to Terrify nearby enemies.',
        'Raining Arrows can replace Fearful Strike when rapid-fire automatic aiming is more useful than Terrify.',
      ],
      strengths: [
        'Excellent long-range camp clearing',
        'Strong ammunition efficiency',
        'Silent ranged kills',
        'Extended Concentration for precise shots',
        'Every primary charm supports the sniper playstyle',
      ],
      weaknesses: [
        'Limited defensive support if enemies close the distance',
        'Fearful Strike depends on Terrify triggering',
        'Less suited to sustained close-range combat',
      ],
    },
  },
  {
    id: 'spider-lily-stagger',
    name: 'Spider Lily Armor — Stagger / Oni’s Flame',
    armorId: 'spider-lily-armor',
    category: 'Stagger / Oni’s Flame',
    charmIds: [
      'charm-of-fiery-rage',
      'charm-of-homusubi',
      'charm-of-lingering-affliction',
      'charm-of-fire-mastery',
      'charm-of-brutal-volley',
      'takezo-s-charm-of-bracing-victory',
    ],
    alternativeCharmIds: [
      'charm-of-shattering-strike',
      'charm-of-futsunushi',
      'takezo-s-charm-of-bold-deflection',
      'charm-of-thunderous-assault',
      'charm-of-cannon-steps',
    ],
    guide: {
      rating: 5,
      overview:
        'An aggressive Spider Lily setup built around sustained Stagger pressure, Oni’s Flame, area disruption, and powerful thrown weapons dropped during combat.',
      playstyle:
        'Stay aggressive in close range, break enemy defenses and posture, spread Stagger across groups, and use Oni’s Flame to maintain pressure. Pick up weapons dropped by enemies and throw them back for heavy damage whenever opportunities appear.',
      synergies: [
        'Fiery Rage extends the duration of Oni’s Flame.',
        'Homusubi increases Fire damage.',
        'Lingering Affliction extends harmful status effects and increases their damage.',
        'Fire Mastery increases Oni’s Flame damage and helps spread Fire through Heavy attacks.',
        'Shattering Strike reinforces the armor’s group-control identity by dealing Stagger damage to nearby enemies when breaking shields with the Kusarigama.',
        'Brutal Volley substantially increases the damage of thrown melee weapons, directly exploiting the Spider Lily Armor’s ability to make enemies drop throwable weapons.',
        'Futsunushi can replace Shattering Strike when wider defensive timing windows are preferred.',
        'Takezo’s Charm of Bold Deflection is an alternative for turning Parries into additional Stagger pressure.',
        'Thunderous Assault and Cannon Steps are weapon-specific alternatives for players who want to specialize further in Odachi or Yari Stagger mechanics.',
      ],
      strengths: [
        'Exceptional sustained Stagger pressure',
        'Strong Fire and status-effect scaling',
        'Excellent crowd disruption',
        'Very powerful thrown-weapon damage',
        'Strong synergy with the Spider Lily Armor’s native perks',
      ],
      weaknesses: [
        'Requires aggressive close-range play',
        'Several effects depend on maintaining combat momentum',
        'Shattering Strike is most valuable when using the Kusarigama against shielded enemies',
      ],
    },
  },
  {
    id: 'onryo-terror',
    name: 'Onryō Armor — Terror / Ghost Stance',
    armorId: 'onryo-armor',
    category: 'Terror / Ghost Stance',
    charmIds: [
      'charm-of-onryo-s-protection',
      'charm-of-howling-terror',
      'charm-of-eager-revenge',
      'charm-of-fearful-mastery',
      'charm-of-fearful-defense',
      'charm-of-yamatotakeru',
    ],
    alternativeCharmIds: [
      'charm-of-confident-strikes',
      'charm-of-fearful-strike',
      'charm-of-fearful-end',
      'charm-of-futsunushi',
    ],
    guide: {
      rating: 5,
      overview:
        'A dedicated Terror and Ghost Stance build designed to trigger fear effects through kill streaks, disarms, precise defense, Spirit Attacks, and thrown-weapon kills while continuously feeding the Onryō Armor’s crowd-control loop.',
      playstyle:
        'Build and protect kill streaks to reach Onryō’s Howl and Ghost Stance quickly. Use disarms, Perfect Parries or Perfect Dodges, Spirit Attacks, and thrown melee weapons to create additional Terrify opportunities and keep groups destabilized throughout combat.',
      synergies: [
        'Onryō’s Protection prevents taking damage from completely resetting kill-streak progress.',
        'Howling Terror reduces the kill-streak requirement for Onryō’s Howl.',
        'Eager Revenge reduces the kill-streak requirement for Ghost Stance.',
        'Fearful Mastery gives disarms a strong chance to Terrify nearby enemies, directly feeding the armor’s Terror bonuses.',
        'Fearful Defense creates another Terrify route through kills following Perfect Parries or Perfect Dodges.',
        'Yamatotakeru generates Spirit from disarms and thrown melee weapon kills, supporting Spirit Attacks that can trigger additional Terror through the Onryō Armor.',
        'Confident Strikes can replace Yamatotakeru when more general Katana-based Spirit generation is preferred.',
        'Fearful Strike and Fearful End are alternatives for adding Terror through headshots or assassinations.',
        'Futsunushi can be used to make the Perfect Parry and Perfect Dodge route through Fearful Defense easier to execute.',
      ],
      strengths: [
        'Multiple independent ways to trigger Terrify',
        'Fast access to Onryō’s Howl and Ghost Stance',
        'Strong crowd control against large groups',
        'Good Spirit generation through disarms and thrown weapons',
        'Excellent synergy with the Onryō Armor’s native Terror mechanics',
      ],
      weaknesses: [
        'Much less effective against isolated enemies that cannot be Terrified',
        'Requires maintaining combat momentum and kill streaks',
        'Fearful Defense depends on precise Perfect Parries or Perfect Dodges',
      ],
    },
  },
  {
    id: 'crimson-infiltration',
    name: 'Crimson Kimono — Infiltration',
    armorId: 'crimson-kimono',
    category: 'Infiltration / Assassination',
    charmIds: [
      'charm-of-fearful-end',
      'charm-of-hidden-blades',
      'charm-of-brutal-volley',
      'charm-of-lingering-shadows',
      'charm-of-uncanny-aim',
      'charm-of-generous-opponents',
    ],
    alternativeCharmIds: [
      'charm-of-assassin-s-resolve',
    ],
    guide: {
      rating: 5,
      overview:
        'A dedicated Crimson Kimono infiltration setup focused on remaining undetected, chaining assassinations, and sustaining lethal Kunai usage throughout camp clearing.',
      playstyle:
        'Stay in stealth and use Kusarigama assassinations, Kunai, and other Quickfire tools to remove enemies efficiently. Loot fallen enemies whenever practical to recover Quickfire ammunition and keep the infiltration going without transitioning into open combat.',
      synergies: [
        'Lingering Shadows reinforces the Crimson Kimono’s reduced detection and makes it easier to move through camps unnoticed.',
        'Hidden Blades increases the number of Kunai thrown, improving their ability to eliminate multiple targets.',
        'Brutal Volley substantially increases thrown-weapon damage.',
        'Uncanny Aim further increases Quickfire weapon damage, reinforcing Kunai as a primary infiltration tool.',
        'Fearful End gives assassinations a chance to Terrify nearby enemies and disrupt groups without entering direct combat.',
        'Generous Opponents can recover Quickfire ammunition when looting defeated enemies, helping sustain Kunai usage throughout an infiltration.',
        'Assassin’s Resolve can replace Generous Opponents when additional Spirit generation from assassinations is more valuable than Quickfire ammunition recovery.',
      ],
      strengths: [
        'Excellent sustained camp infiltration',
        'Very strong Kunai damage and multi-target pressure',
        'Reduced enemy detection',
        'Quickfire ammunition recovery supports prolonged stealth clearing',
        'Every primary charm contributes while stealth remains intact',
      ],
      weaknesses: [
        'Little value once the encounter becomes sustained open combat',
        'Quickfire ammunition recovery requires looting defeated enemies',
        'Fearful End depends on Terrify triggering',
      ],
    },
  },
  {
    id: 'sitturaynu-exploration',
    name: 'Robes for Sitturaynu — Exploration / Scavenging',
    armorId: 'robes-for-sitturaynu',
    category: 'Exploration / Scavenging',
    charmIds: [
      'charm-of-kanayago',
      'charm-of-bountiful-harvest',
      'charm-of-sukunahikona',
      'charm-of-mount-yotei',
      'charm-of-archer-s-fortune',
      'charm-of-inner-fire',
    ],
    alternativeCharmIds: [],
    guide: {
      rating: 5,
      overview:
        'A dedicated open-world exploration setup built around resource gathering, passive recovery, environmental protection, and sustainable ranged utility while traveling across Yotei.',
      playstyle:
        'Use the Robes for Sitturaynu while freely exploring the open world, following Golden Birds and Fireflies, collecting resources, and clearing incidental threats from range without needing to constantly change loadouts.',
      synergies: [
        'Kanayago increases the amount of metals and black powder gained while scavenging.',
        'Bountiful Harvest increases the amount of wood, flowers, and plants collected.',
        'Sukunahikona gradually restores Health while out of combat, reducing downtime between encounters.',
        'Mount Yotei reduces incoming damage and provides general protection while traveling.',
        'Archer’s Fortune improves arrow recovery, helping sustain occasional ranged combat during exploration.',
        'Inner Fire reduces Blizzard damage, allowing the same exploration loadout to remain useful in harsh regions without requiring charm swaps.',
      ],
      strengths: [
        'Maximizes common exploration and gathering efficiency',
        'Passive Health recovery between encounters',
        'Good general protection while traveling',
        'Improved arrow sustainability',
        'Works as a fixed exploration loadout across different regions',
      ],
      weaknesses: [
        'Limited offensive specialization',
        'Several charms provide little benefit during demanding combat',
        'Inner Fire only provides value in areas affected by Blizzard',
      ],
    },
  },
  {
    id: 'bounty-parry',
    name: 'Bounty Master Armor — Perfect Parry',
    armorId: 'bounty-master-armor',
    category: 'Perfect Parry',
    charmIds: [
      'takezo-s-charm-of-bold-deflection',
      'charm-of-futsunushi',
      'father-s-charm',
      'charm-of-mount-yotei',
      'charm-of-enduring-resolve',
      'charm-of-confident-strikes',
    ],
    alternativeCharmIds: [
      'charm-of-stolen-flame',
      'charm-of-thoughtful-restoration',
      'takezo-s-charm-of-bracing-victory',
    ],
    guide: {
      rating: 5,
      overview:
        'A dedicated Perfect Parry build that turns precise defense into Stagger pressure, healing, Spirit generation, and repeated counterattacks.',
      playstyle:
        'Stay engaged at close range and look for Perfect Parry opportunities. Use the armor’s expanded defensive windows to convert enemy attacks into healing, Stagger, Spirit, and powerful counterattack sequences.',
      synergies: [
        'Futsunushi further improves the timing windows for Perfect Parries and Perfect Dodges, reinforcing the Bounty Master Armor’s core defensive mechanic.',
        'Takezo’s Charm of Bold Deflection adds Stagger damage to Parries and helps turn successful defense into offensive pressure.',
        'Father’s Charm restores Health through Perfect Parries.',
        'Mount Yotei reduces incoming damage and provides additional sustain through Perfect Parries when upgraded.',
        'Enduring Resolve improves Spirit efficiency when using techniques, taking advantage of the Bounty Master Armor’s increased Spirit gains.',
        'Confident Strikes can generate additional Spirit when staggering enemies with the Katana, synergizing with the extra Stagger pressure from Bold Deflection.',
        'Stolen Flame is a situational alternative against enemies using Fire attacks.',
        'Thoughtful Restoration can be used when additional maximum Health is preferred.',
        'Bracing Victory is an alternative for further rewarding kills against staggered enemies.',
      ],
      strengths: [
        'Excellent Perfect Parry consistency',
        'Strong Stagger pressure',
        'Very high sustain through successful defensive play',
        'Excellent Spirit generation and efficiency',
        'Turns defense directly into offensive momentum',
      ],
      weaknesses: [
        'Regular Parries are disabled by the armor',
        'Requires consistent Perfect Parry execution',
        'Several benefits depend on staying engaged in close-range combat',
      ],
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
    overview:
      'Una configuración agresiva de Quickfire que convierte los Kunai en una fuente constante de daño directo, Fire y status prolongados, mientras mantiene la munición mediante el looteo de enemigos.',
    playstyle:
      'Usá los Kunai potenciados como herramienta ofensiva principal para aplicar Fire y status prolongados sobre grupos de enemigos. Looteá a los enemigos derrotados siempre que sea posible para recuperar munición Quickfire y mantener la presión.',
    synergies: [
      'Hidden Blades aumenta la cantidad de Kunai lanzados.',
      'Burning Blades agrega Fire damage a los Kunai.',
      'Uncanny Aim aumenta el daño de las Quickfire weapons y combina directamente con los bonuses de Quickfire del Nine Tails Armor.',
      'Homusubi aumenta el Fire damage.',
      'Lingering Affliction prolonga los status perjudiciales y aumenta su daño.',
      'Generous Opponents ayuda a recuperar munición Quickfire al lootear enemigos derrotados y mantiene activo el ciclo ofensivo.',
      'Fearful End puede reemplazar uno de los charms ofensivos cuando se prefiera agregar Terrify mediante assassinations en lugar de maximizar el daño Quickfire.',
    ],
    strengths: [
      'Daño de Kunai y Quickfire excepcional',
      'Muy buen escalado de Fire y status effects',
      'Excelente capacidad para limpiar grupos',
      'Ciclo sostenible de munición Quickfire',
      'Sinergia muy directa entre los perks del armor y los charms',
    ],
    weaknesses: [
      'Depende de la disponibilidad de munición Quickfire',
      'Menos especializado para Melee tradicional o duelos',
      'Fire y status aportan menos contra enemigos que pueden eliminarse inmediatamente',
    ],
  },
  'dragonfly-sniper': {
    overview: 'Una configuración de Dragonfly pensada específicamente como build de sniper, centrada en headshots silenciosos, Concentration extendida y recuperación de flechas para limpiar campamentos desde larga distancia.',
    playstyle: 'Mantenete lejos y usá Concentration para colocar headshots potenciados con precisión. Recuperá flechas siempre que sea posible, evitá revelar tu posición gracias a Fatal Silence y aprovechá Fearful Strike para intentar alterar a enemigos cercanos después de cada baja.',
    synergies: [
      'True Aim y Mother’s Charm forman el núcleo de daño a distancia.',
      'Archer’s Fortune mejora la recuperación de flechas durante enfrentamientos prolongados.',
      'Fatal Silence mantiene silenciosos los impactos y ayuda a limpiar campamentos sin revelar tu posición.',
      'Iron Focus extiende el tiempo de Concentration y facilita los disparos precisos a larga distancia.',
      'Fearful Strike les da a las bajas con headshot una probabilidad de aplicar Terrify a enemigos cercanos.',
      'Raining Arrows puede reemplazar a Fearful Strike cuando resulte más útil contar con apuntado automático y fuego rápido que con Terrify.',
    ],
    strengths: [
      'Excelente para limpiar campamentos desde larga distancia',
      'Muy buena eficiencia de munición',
      'Bajas a distancia silenciosas',
      'Concentration extendida para apuntar con precisión',
      'Todos los charms principales refuerzan directamente el estilo sniper',
    ],
    weaknesses: [
      'Muy poco soporte defensivo si los enemigos logran acercarse',
      'Fearful Strike depende de que se active Terrify',
      'Menos adecuado para combate sostenido a corta distancia',
    ],
  },
  'spider-lily-stagger': {
    overview:
      'Una configuración agresiva de Spider Lily centrada en mantener una presión constante de Stagger, potenciar Oni’s Flame, alterar grupos de enemigos y aprovechar las armas que caen durante el combate.',
    playstyle:
      'Jugá de forma agresiva a corta distancia, rompé defensas y postura, propagá Stagger entre grupos y usá Oni’s Flame para mantener la presión. Levantá las armas que dejan caer los enemigos y devolvéselas como proyectiles de alto daño siempre que tengas oportunidad.',
    synergies: [
      'Fiery Rage prolonga la duración de Oni’s Flame.',
      'Homusubi aumenta el Fire damage.',
      'Lingering Affliction prolonga los status perjudiciales y aumenta su daño.',
      'Fire Mastery aumenta el daño de Oni’s Flame y ayuda a propagar Fire mediante Heavy attacks.',
      'Shattering Strike refuerza el control de grupos del armor al causar Stagger a enemigos cercanos cuando rompés shields con la Kusarigama.',
      'Brutal Volley aumenta considerablemente el daño de las melee weapons arrojadas y aprovecha directamente la capacidad del Spider Lily Armor de hacer que los enemigos dejen caer armas utilizables como proyectiles.',
      'Futsunushi puede reemplazar a Shattering Strike cuando se prefieran ventanas defensivas más amplias.',
      'Takezo’s Charm of Bold Deflection es una alternativa para convertir los Parries en presión adicional de Stagger.',
      'Thunderous Assault y Cannon Steps son alternativas específicas para especializar todavía más el Stagger con Odachi o Yari.',
    ],
    strengths: [
      'Presión de Stagger sostenida excepcional',
      'Muy buen escalado de Fire y status effects',
      'Excelente control y alteración de grupos',
      'Daño muy elevado con armas arrojadas',
      'Gran sinergia con los perks propios del Spider Lily Armor',
    ],
    weaknesses: [
      'Requiere jugar de forma agresiva a corta distancia',
      'Varios efectos dependen de mantener el momentum del combate',
      'Shattering Strike aporta más cuando se usa Kusarigama contra enemigos con shield',
    ],
  },
  'onryo-terror': {
    overview:
      'Una configuración dedicada a Terror y Ghost Stance, diseñada para provocar efectos de miedo mediante kill streaks, disarms, defensa precisa, Spirit Attacks y bajas con armas arrojadas, alimentando constantemente el loop de control de grupos del Onryō Armor.',
    playstyle:
      'Construí y protegé los kill streaks para llegar rápidamente a Onryō’s Howl y Ghost Stance. Usá disarms, Perfect Parries o Perfect Dodges, Spirit Attacks y armas melee arrojadas para generar oportunidades adicionales de Terrify y mantener desestabilizados a los grupos durante todo el combate.',
    synergies: [
      'Onryō’s Protection evita que recibir daño reinicie completamente el progreso del kill streak.',
      'Howling Terror reduce el requisito de kill streak para activar Onryō’s Howl.',
      'Eager Revenge reduce el requisito de kill streak para acceder a Ghost Stance.',
      'Fearful Mastery les da a los disarms una alta probabilidad de aplicar Terrify a enemigos cercanos y alimenta directamente los bonuses de Terror del armor.',
      'Fearful Defense agrega otra vía para provocar Terrify mediante bajas realizadas después de Perfect Parries o Perfect Dodges.',
      'Yamatotakeru genera Spirit mediante disarms y bajas con melee weapons arrojadas, alimentando Spirit Attacks que pueden activar todavía más Terror gracias al Onryō Armor.',
      'Confident Strikes puede reemplazar a Yamatotakeru cuando se prefiera una generación de Spirit más general mediante Katana.',
      'Fearful Strike y Fearful End son alternativas para incorporar Terror mediante headshots o assassinations.',
      'Futsunushi puede usarse para facilitar la ejecución de Perfect Parries y Perfect Dodges y aprovechar mejor Fearful Defense.',
    ],
    strengths: [
      'Múltiples formas independientes de provocar Terrify',
      'Acceso rápido a Onryō’s Howl y Ghost Stance',
      'Excelente control de grupos numerosos',
      'Buena generación de Spirit mediante disarms y armas arrojadas',
      'Gran sinergia con las mecánicas nativas de Terror del Onryō Armor',
    ],
    weaknesses: [
      'Mucho menos efectivo contra enemigos aislados que no pueden ser afectados por Terrify',
      'Depende de mantener el momentum del combate y los kill streaks',
      'Fearful Defense requiere ejecutar Perfect Parries o Perfect Dodges con precisión',
    ],
  },
  'crimson-infiltration': {
    overview:
      'Una configuración de Crimson Kimono dedicada a la infiltración, centrada en permanecer sin detectar, encadenar assassinations y mantener el uso letal de Kunai durante toda la limpieza de un campamento.',
    playstyle:
      'Mantenete en stealth y usá assassinations con Kusarigama, Kunai y otras herramientas Quickfire para eliminar enemigos de forma eficiente. Lootear a los enemigos caídos siempre que sea posible permite recuperar munición Quickfire y mantener la infiltración sin pasar a combate abierto.',
    synergies: [
      'Lingering Shadows refuerza la reducción de detección del Crimson Kimono y facilita moverse por los campamentos sin ser descubierto.',
      'Hidden Blades aumenta la cantidad de Kunai lanzados y mejora su capacidad para eliminar múltiples objetivos.',
      'Brutal Volley aumenta considerablemente el daño de las armas arrojadizas.',
      'Uncanny Aim aumenta todavía más el daño de las Quickfire weapons y refuerza a los Kunai como una de las herramientas principales de infiltración.',
      'Fearful End les da a las assassinations una probabilidad de aplicar Terrify a enemigos cercanos y desorganizar grupos sin entrar en combate directo.',
      'Generous Opponents puede recuperar munición Quickfire al lootear enemigos derrotados, ayudando a mantener el uso de Kunai durante toda la infiltración.',
      'Assassin’s Resolve puede reemplazar a Generous Opponents cuando generar Spirit adicional mediante assassinations resulte más útil que recuperar munición Quickfire.',
    ],
    strengths: [
      'Excelente para infiltraciones prolongadas en campamentos',
      'Daño de Kunai muy elevado y buena presión contra múltiples objetivos',
      'Menor detección enemiga',
      'La recuperación de munición Quickfire permite sostener el stealth durante más tiempo',
      'Todos los charms principales aportan mientras la infiltración siga funcionando',
    ],
    weaknesses: [
      'Aporta poco una vez que el enfrentamiento pasa a combate abierto sostenido',
      'La recuperación de munición Quickfire requiere lootear enemigos derrotados',
      'Fearful End depende de que se active Terrify',
    ],
  },
  'sitturaynu-exploration': {
    overview:
      'Una configuración dedicada a la exploración del mundo abierto, centrada en mejorar la recolección de recursos, la recuperación pasiva, la protección ambiental y la autosuficiencia a distancia mientras recorrés Yotei.',
    playstyle:
      'Usá Robes for Sitturaynu para recorrer libremente el mundo abierto, seguir Golden Birds y Fireflies, recolectar recursos y eliminar amenazas ocasionales desde lejos sin tener que cambiar constantemente de build.',
    synergies: [
      'Kanayago aumenta la cantidad de metales y black powder obtenidos al hacer scavenging.',
      'Bountiful Harvest aumenta la cantidad de wood, flowers y plants obtenidos al recolectar.',
      'Sukunahikona recupera Health gradualmente fuera de combate y reduce el tiempo perdido entre encuentros.',
      'Mount Yotei reduce el daño recibido y aporta protección general mientras explorás.',
      'Archer’s Fortune mejora la recuperación de flechas y ayuda a mantener el arco disponible para enfrentamientos ocasionales.',
      'Inner Fire reduce el daño de Blizzard y permite mantener el mismo build de exploración incluso en regiones con condiciones climáticas adversas.',
    ],
    strengths: [
      'Maximiza la eficiencia general de exploración y recolección',
      'Recuperación pasiva de Health entre encuentros',
      'Buena protección general mientras recorrés el mapa',
      'Mejor sostenimiento de munición de arco',
      'Funciona como build fijo de exploración en distintas regiones',
    ],
    weaknesses: [
      'Poca especialización ofensiva',
      'Varios charms aportan poco durante combates exigentes',
      'Inner Fire sólo aporta valor en zonas afectadas por Blizzard',
    ],
  },
  'bounty-parry': {
    overview:
      'Una configuración dedicada al Perfect Parry que convierte la defensa precisa en presión de Stagger, recuperación de Health, generación de Spirit y secuencias constantes de contraataques.',
    playstyle:
      'Mantenete a corta distancia y buscá oportunidades de Perfect Parry. Aprovechá las ventanas defensivas ampliadas del armor para transformar los ataques enemigos en Health, Stagger, Spirit y contraataques potentes.',
    synergies: [
      'Futsunushi mejora todavía más las ventanas de ejecución de Perfect Parries y Perfect Dodges y refuerza la mecánica defensiva principal del Bounty Master Armor.',
      'Takezo’s Charm of Bold Deflection agrega Stagger damage a los Parries y permite convertir la defensa exitosa en presión ofensiva.',
      'Father’s Charm recupera Health mediante Perfect Parries.',
      'Mount Yotei reduce el daño recibido y, al mejorarlo, aporta sustain adicional mediante Perfect Parries.',
      'Enduring Resolve mejora la eficiencia del Spirit al usar técnicas y aprovecha el aumento de generación de Spirit propio del Bounty Master Armor.',
      'Confident Strikes puede generar Spirit adicional al provocar Stagger con la Katana y combina con la presión de Stagger adicional de Bold Deflection.',
      'Stolen Flame es una alternativa situacional contra enemigos que utilizan ataques de Fire.',
      'Thoughtful Restoration puede usarse cuando se prefiera aumentar la Health máxima.',
      'Bracing Victory es una alternativa para recompensar todavía más las bajas contra enemigos staggered.',
    ],
    strengths: [
      'Excelente consistencia con Perfect Parries',
      'Muy buena presión de Stagger',
      'Gran sustain mediante defensa precisa',
      'Excelente generación y eficiencia de Spirit',
      'Convierte directamente la defensa en momentum ofensivo',
    ],
    weaknesses: [
      'El armor deshabilita los Parries normales',
      'Requiere ejecutar Perfect Parries de forma consistente',
      'Varios beneficios dependen de mantenerse en combate a corta distancia',
    ],
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
