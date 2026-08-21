import { useMemo, useState } from 'react';
import {
  HiCheck,
  HiChevronDown,
  HiOutlineEyeOff,
  HiOutlineLightningBolt,
  HiOutlineSearch,
  HiOutlineShare,
  HiViewGrid,
  HiViewList,
  HiX,
} from 'react-icons/hi';

import { useProgress } from '../../context/ProgressContext';
import {
  SKILL_CLASSES,
  skills,
  skillsById,
} from '../../data/skills';
import styles from './SkillsPage.module.scss';

const CLASS_LABELS = {
  onryo: 'Onryō',
  core: 'Core',
  melee: 'Melee',
  revenge: 'Revenge',
  wolf: 'Wolf',
};

const UNLOCK_LABELS = {
  altar: 'Altar of Reflection',
  default: 'Default',
  quest: 'Quest',
  special: 'Special',
  story: 'Story',
  weapon: 'Weapon',
  'wolf-den': 'Wolf Den',
  unaudited: 'Not audited',
};

const formatLabel = (value = '') => value
  .split('-')
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(' ');

const normalize = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase();

const getPrerequisiteName = (id) => skillsById[id]?.name ?? formatLabel(id);

const getSearchableText = (skill) => [
  skill.name,
  skill.effect,
  skill.class,
  skill.tree,
  skill.unlock.type,
  skill.unlock.source,
  skill.unlock.description,
  skill.notes,
  ...skill.prerequisites.map(getPrerequisiteName),
].filter(Boolean).join(' ');

const WEAPON_ROOTS = new Set(['katana', 'dual-katana', 'odachi', 'yari', 'kusarigama']);

const getVisualTree = (treeSkills, treeName) => {
  const ids = new Set(treeSkills.map((skill) => skill.id));
  const hasWeaponRoot = treeSkills.some((skill) => (
    skill.prerequisites.includes(treeName) && WEAPON_ROOTS.has(treeName)
  ));
  const levelCache = new Map();

  const getLevel = (skill) => {
    if (levelCache.has(skill.id)) return levelCache.get(skill.id);

    const parents = skill.prerequisites
      .filter((id) => ids.has(id))
      .map((id) => treeSkills.find((item) => item.id === id));
    const level = parents.length > 0
      ? Math.max(...parents.map(getLevel)) + 1
      : hasWeaponRoot ? 1 : 0;

    levelCache.set(skill.id, level);
    return level;
  };

  const nodes = treeSkills.map((skill) => ({ skill, level: getLevel(skill) }));
  const maxLevel = Math.max(0, ...nodes.map((node) => node.level));
  const positionedNodes = nodes.map((node) => {
    const siblings = nodes.filter((item) => item.level === node.level);
    const index = siblings.findIndex((item) => item.skill.id === node.skill.id);

    return {
      ...node,
      x: ((index + 1) / (siblings.length + 1)) * 100,
      y: 62 + node.level * 104,
    };
  });
  const positions = Object.fromEntries(
    positionedNodes.map((node) => [node.skill.id, node]),
  );
  const edges = positionedNodes.flatMap((node) => {
    const parents = node.skill.prerequisites.filter((id) => ids.has(id));
    if (parents.length > 0) {
      return parents.map((id) => ({ from: positions[id], to: node }));
    }

    return hasWeaponRoot ? [{ from: { x: 50, y: 28 }, to: node }] : [];
  });

  return {
    edges,
    hasWeaponRoot,
    height: 118 + maxLevel * 104,
    nodes: positionedNodes,
  };
};

function CostBadges({ skill }) {
  const costs = [
    skill.techniquePointCost !== null
      && `${skill.techniquePointCost} Technique Point${skill.techniquePointCost === 1 ? '' : 's'}`,
    skill.wolfSkillPointCost !== null
      && `${skill.wolfSkillPointCost} Wolf Skill Point${skill.wolfSkillPointCost === 1 ? '' : 's'}`,
    skill.spiritCost !== null && `${skill.spiritCost} Spirit to use`,
  ].filter(Boolean);

  if (costs.length === 0) {
    return <span className={styles.noCost}>No verified point or Spirit cost</span>;
  }

  return (
    <div className={styles.costs}>
      {costs.map((cost) => <span key={cost}>{cost}</span>)}
    </div>
  );
}

function SkillMetadata({ skill }) {
  const prerequisites = skill.prerequisites.map(getPrerequisiteName);
  const unlockType = skill.unlock.type ?? 'unaudited';

  return (
    <div className={styles.detailContent}>
      <dl>
        <div>
          <dt>Unlock type</dt>
          <dd>{UNLOCK_LABELS[unlockType] ?? formatLabel(unlockType)}</dd>
        </div>
        <div>
          <dt>Source</dt>
          <dd>{skill.unlock.source ?? 'Exact unlock source not audited.'}</dd>
        </div>
        <div>
          <dt>How to unlock</dt>
          <dd>{skill.unlock.description}</dd>
        </div>
        <div>
          <dt>Prerequisites</dt>
          <dd>
            {prerequisites.length > 0
              ? `${prerequisites.join(', ')}${skill.prerequisiteMode === 'any' ? ' (any one)' : ''}`
              : 'None'}
          </dd>
        </div>
      </dl>

      {skill.notes && (
        <p className={styles.notes}><strong>Notes:</strong> {skill.notes}</p>
      )}
    </div>
  );
}

function SkillCard({ skill, obtained, onToggle }) {
  return (
    <article
      className={`${styles.skillCard} ${obtained ? styles.obtainedCard : ''}`}
      id={`skill-${skill.id}`}
    >
      <header>
        <div>
          <h3>{skill.name}</h3>
          <div className={styles.badges}>
            <span>{formatLabel(skill.tree)}</span>
            {skill.hidden && (
              <span className={styles.hiddenBadge}><HiOutlineEyeOff /> Hidden</span>
            )}
          </div>
        </div>
        <button
          className={styles.skillCheck}
          onClick={onToggle}
          aria-label={obtained ? `Mark ${skill.name} as not obtained` : `Mark ${skill.name} as obtained`}
          aria-pressed={obtained}
        >
          {obtained ? <HiCheck /> : <HiOutlineLightningBolt />}
        </button>
      </header>

      <p className={styles.effect}>{skill.effect}</p>
      <CostBadges skill={skill} />

      <details className={styles.details}>
        <summary>
          Unlock & requirements
          <HiChevronDown />
        </summary>

        <SkillMetadata skill={skill} />
      </details>
    </article>
  );
}

function CompactSkillRow({ skill, obtained, onToggle, expanded, onExpand }) {
  return (
    <article className={`${styles.compactItem} ${obtained ? styles.obtainedRow : ''}`}>
      <div className={styles.compactRow}>
        <button
          className={styles.compactCheck}
          onClick={onToggle}
          aria-label={obtained ? `Mark ${skill.name} as not obtained` : `Mark ${skill.name} as obtained`}
          aria-pressed={obtained}
        >
          {obtained && <HiCheck />}
        </button>

        <button
          className={styles.compactSummary}
          onClick={onExpand}
          aria-expanded={expanded}
          aria-controls={`compact-details-${skill.id}`}
        >
          <div className={styles.compactIdentity}>
            <strong>{skill.name}</strong>
            <span>{skill.effect}</span>
            <small>{CLASS_LABELS[skill.class]} · {formatLabel(skill.tree)}</small>
          </div>

          <span className={styles.compactUnlock}>
            {UNLOCK_LABELS[skill.unlock.type ?? 'unaudited']}
          </span>

          <span className={styles.compactHiddenSlot}>
            {skill.hidden && <HiOutlineEyeOff aria-label="Hidden skill" />}
          </span>
          <HiChevronDown className={`${styles.compactChevron} ${expanded ? styles.expandedChevron : ''}`} />
        </button>
      </div>

      {expanded && (
        <div className={styles.compactExpanded} id={`compact-details-${skill.id}`}>
          <CostBadges skill={skill} />
          <SkillMetadata skill={skill} />
        </div>
      )}
    </article>
  );
}

function SkillTree({ tree, treeSkills, selectedSkillId, onSelect, isSkillObtained }) {
  const visualTree = useMemo(() => getVisualTree(treeSkills, tree), [tree, treeSkills]);

  return (
    <section className={styles.visualTree}>
      <header>
        <h3>{formatLabel(tree)}</h3>
        <span>{treeSkills.length}</span>
      </header>
      <div className={styles.treeCanvas} style={{ height: visualTree.height }}>
        <svg viewBox={`0 0 100 ${visualTree.height}`} preserveAspectRatio="none" aria-hidden="true">
          {visualTree.edges.map((edge, index) => {
            const middleY = edge.from.y + ((edge.to.y - edge.from.y) / 2);

            return (
              <polyline
                key={`${edge.from.x}-${edge.from.y}-${edge.to.skill?.id ?? index}`}
                points={`${edge.from.x},${edge.from.y} ${edge.from.x},${middleY} ${edge.to.x},${middleY} ${edge.to.x},${edge.to.y}`}
              />
            );
          })}
        </svg>

        {visualTree.hasWeaponRoot && (
          <div className={styles.weaponRoot} style={{ left: '50%', top: 28 }}>
            {formatLabel(tree)}
          </div>
        )}

        {visualTree.nodes.map(({ skill, x, y }) => {
          const obtained = isSkillObtained(skill.id);
          return (
            <button
              key={skill.id}
              className={`${styles.treeNode} ${obtained ? styles.obtainedNode : ''} ${selectedSkillId === skill.id ? styles.selectedNode : ''}`}
              style={{ left: `${x}%`, top: y }}
              onClick={() => onSelect(skill)}
              aria-label={`View ${skill.name}`}
              title={skill.name}
            >
              {obtained ? <HiCheck /> : skill.hidden ? <HiOutlineEyeOff /> : <span />}
              <small>{skill.name}</small>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function TreeSkillDetails({ skill, obtained, onToggle, onClose }) {
  if (!skill) {
    return <p className={styles.treeHint}>Select a skill node to see its complete details.</p>;
  }

  return (
    <aside className={styles.treeDetails}>
      <header>
        <div>
          <span className="eyebrow">{CLASS_LABELS[skill.class]} · {formatLabel(skill.tree)}</span>
          <h3>{skill.name}</h3>
        </div>
        <button className={styles.treeToggle} onClick={onToggle} aria-pressed={obtained}>
          {obtained ? <HiCheck /> : <HiOutlineLightningBolt />}
          {obtained ? 'Obtained' : 'Mark obtained'}
        </button>
        <button
          className={styles.closeTreeDetails}
          onClick={onClose}
          aria-label="Close skill details"
        >
          <HiX />
        </button>
      </header>
      <p className={styles.effect}>{skill.effect}</p>
      <CostBadges skill={skill} />
      <SkillMetadata skill={skill} />
    </aside>
  );
}

export default function SkillsPage() {
  const { progress, isSkillObtained, toggleSkill } = useProgress();
  const [query, setQuery] = useState('');
  const [skillClass, setSkillClass] = useState('all');
  const [tree, setTree] = useState('all');
  const [unlockType, setUnlockType] = useState('all');
  const [visibility, setVisibility] = useState('all');
  const [status, setStatus] = useState('all');
  const [viewMode, setViewMode] = useState('cards');
  const [expandedSkillId, setExpandedSkillId] = useState(null);
  const [selectedTreeSkill, setSelectedTreeSkill] = useState(null);

  const classCounts = useMemo(() => Object.fromEntries(
    SKILL_CLASSES.map((itemClass) => [
      itemClass,
      skills.filter((skill) => skill.class === itemClass).length,
    ]),
  ), []);

  const availableTrees = useMemo(() => [...new Set(
    skills
      .filter((skill) => skillClass === 'all' || skill.class === skillClass)
      .map((skill) => skill.tree),
  )], [skillClass]);

  const filteredSkills = useMemo(() => skills.filter((skill) => {
    const matchesQuery = normalize(getSearchableText(skill)).includes(normalize(query));
    const matchesClass = skillClass === 'all' || skill.class === skillClass;
    const matchesTree = tree === 'all' || skill.tree === tree;
    const currentUnlockType = skill.unlock.type ?? 'unaudited';
    const matchesUnlock = unlockType === 'all' || currentUnlockType === unlockType;
    const matchesVisibility = visibility === 'all'
      || (visibility === 'hidden' && skill.hidden)
      || (visibility === 'visible' && !skill.hidden);
    const obtained = isSkillObtained(skill.id);
    const matchesStatus = status === 'all'
      || (status === 'obtained' && obtained)
      || (status === 'missing' && !obtained);

    return matchesQuery
      && matchesClass
      && matchesTree
      && matchesUnlock
      && matchesVisibility
      && matchesStatus;
  }), [progress.completedEntries, query, skillClass, status, tree, unlockType, visibility]);

  const groupedSkills = useMemo(() => SKILL_CLASSES.map((itemClass) => ({
    skillClass: itemClass,
    trees: [...new Set(
      filteredSkills
        .filter((skill) => skill.class === itemClass)
        .map((skill) => skill.tree),
    )].map((itemTree) => ({
      tree: itemTree,
      skills: filteredSkills.filter((skill) => (
        skill.class === itemClass && skill.tree === itemTree
      )),
    })),
  })).filter((group) => group.trees.length > 0), [filteredSkills]);

  const selectClass = (nextClass) => {
    setSkillClass(nextClass);
    setTree('all');
  };

  const clearFilters = () => {
    setQuery('');
    setSkillClass('all');
    setTree('all');
    setUnlockType('all');
    setVisibility('all');
    setStatus('all');
  };

  return (
    <section className="page">
      <header className="pageHeader">
        <span className="eyebrow">Technique catalog</span>
        <h1>Skills</h1>
        <p className="muted">
          Browse all {skills.length} skills, their effects, unlock routes and prerequisites.
        </p>
      </header>

      <section className={styles.classSelector} aria-label="Skill class">
        <button
          className={skillClass === 'all' ? styles.activeClass : ''}
          onClick={() => selectClass('all')}
        >
          <span>All</span>
          <strong>{skills.length}</strong>
        </button>
        {SKILL_CLASSES.map((itemClass) => (
          <button
            key={itemClass}
            className={skillClass === itemClass ? styles.activeClass : ''}
            onClick={() => selectClass(itemClass)}
          >
            <span>{CLASS_LABELS[itemClass]}</span>
            <strong>{classCounts[itemClass]}</strong>
          </button>
        ))}
      </section>

      <section className={styles.catalog}>
        <div className={styles.filters}>
          <label className={styles.searchField}>
            <span><HiOutlineSearch /> Search</span>
            <input
              className="input"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name, effect, source or prerequisite…"
            />
          </label>

          <label>
            <span>Tree</span>
            <select className="input" value={tree} onChange={(event) => setTree(event.target.value)}>
              <option value="all">All trees</option>
              {availableTrees.map((itemTree) => (
                <option key={itemTree} value={itemTree}>{formatLabel(itemTree)}</option>
              ))}
            </select>
          </label>

          <label>
            <span>Unlock</span>
            <select
              className="input"
              value={unlockType}
              onChange={(event) => setUnlockType(event.target.value)}
            >
              <option value="all">All unlock types</option>
              {Object.entries(UNLOCK_LABELS).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <label>
            <span>Visibility</span>
            <select
              className="input"
              value={visibility}
              onChange={(event) => setVisibility(event.target.value)}
            >
              <option value="all">All skills</option>
              <option value="visible">Visible</option>
              <option value="hidden">Hidden</option>
            </select>
          </label>

          <label>
            <span>Status</span>
            <select
              className="input"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="all">All skills</option>
              <option value="obtained">Obtained</option>
              <option value="missing">Missing</option>
            </select>
          </label>
        </div>

        <div className={styles.resultSummary}>
          <span>
            <strong>{filteredSkills.length}</strong> visible ·{' '}
            {skills.filter((skill) => isSkillObtained(skill.id)).length}/{skills.length} obtained
          </span>
          <button onClick={clearFilters}>Clear filters</button>
        </div>

        <div className={styles.viewControls} aria-label="View mode">
          <span>View</span>
          <div>
            <button
              className={viewMode === 'cards' ? styles.activeView : ''}
              onClick={() => setViewMode('cards')}
              aria-pressed={viewMode === 'cards'}
            >
              <HiViewGrid /> Cards
            </button>
            <button
              className={viewMode === 'compact' ? styles.activeView : ''}
              onClick={() => setViewMode('compact')}
              aria-pressed={viewMode === 'compact'}
            >
              <HiViewList /> Compact
            </button>
            <button
              className={viewMode === 'tree' ? styles.activeView : ''}
              onClick={() => setViewMode('tree')}
              aria-pressed={viewMode === 'tree'}
            >
              <HiOutlineShare /> Tree
            </button>
          </div>
        </div>

        {filteredSkills.length === 0 ? (
          <p className="empty">No skills match these filters.</p>
        ) : viewMode === 'compact' ? (
          <div className={styles.compactList}>
            {filteredSkills.map((skill) => (
              <CompactSkillRow
                key={skill.id}
                skill={skill}
                obtained={isSkillObtained(skill.id)}
                onToggle={() => toggleSkill(skill.id)}
                expanded={expandedSkillId === skill.id}
                onExpand={() => setExpandedSkillId((current) => (
                  current === skill.id ? null : skill.id
                ))}
              />
            ))}
          </div>
        ) : viewMode === 'tree' ? (
          <div className={styles.treeView}>
            {groupedSkills.map((classGroup) => (
              <section key={classGroup.skillClass} className={styles.treeClassGroup}>
                <header className={styles.classHeader}>
                  <span className="eyebrow">Skill class</span>
                  <h2>{CLASS_LABELS[classGroup.skillClass]}</h2>
                </header>
                <div className={styles.treeColumns}>
                  {classGroup.trees.map((treeGroup) => (
                    <SkillTree
                      key={treeGroup.tree}
                      tree={treeGroup.tree}
                      treeSkills={treeGroup.skills}
                      selectedSkillId={selectedTreeSkill?.id}
                      onSelect={(skill) => setSelectedTreeSkill((current) => (
                        current?.id === skill.id ? null : skill
                      ))}
                      isSkillObtained={isSkillObtained}
                    />
                  ))}
                </div>
              </section>
            ))}
            <TreeSkillDetails
              skill={selectedTreeSkill}
              obtained={selectedTreeSkill ? isSkillObtained(selectedTreeSkill.id) : false}
              onToggle={() => selectedTreeSkill && toggleSkill(selectedTreeSkill.id)}
              onClose={() => setSelectedTreeSkill(null)}
            />
          </div>
        ) : (
          <div className={styles.groups}>
            {groupedSkills.map((classGroup) => (
              <section key={classGroup.skillClass} className={styles.classGroup}>
                <header className={styles.classHeader}>
                  <span className="eyebrow">Skill class</span>
                  <h2>{CLASS_LABELS[classGroup.skillClass]}</h2>
                </header>

                {classGroup.trees.map((treeGroup) => (
                  <section key={treeGroup.tree} className={styles.treeGroup}>
                    <header className={styles.treeHeader}>
                      <h3>{formatLabel(treeGroup.tree)}</h3>
                      <span>{treeGroup.skills.length}</span>
                    </header>
                    <div className={styles.skillGrid}>
                      {treeGroup.skills.map((skill) => (
                        <SkillCard
                          key={skill.id}
                          skill={skill}
                          obtained={isSkillObtained(skill.id)}
                          onToggle={() => toggleSkill(skill.id)}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </section>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
