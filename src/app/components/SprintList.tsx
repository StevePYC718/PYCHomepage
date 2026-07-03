type Sprint = {
  /** e.g. "Sprint 1 · Break Free From Blocks" */
  title: string
  /** the one-line outcome, e.g. "Break through fear." */
  move: string
  /** the tool name, e.g. "Fear Interrupt" */
  tool: string
  /** the receipt / proof line */
  receipt: string
}

/**
 * Directive-free presentational list — rendered in BOTH the server tree
 * (always-open Phase 1) and inside the client ArcPhase panel.
 */
export function SprintList({ sprints }: { sprints: Sprint[] }) {
  return (
    <ul className="sprint-list">
      {sprints.map((s) => (
        <li className="sprint-item" key={s.title}>
          <p className="sprint-line">
            <span className="sprint-name">{s.title}</span>
            <span className="sprint-move"> — {s.move}</span>
            <span className="sprint-tool"> → {s.tool}</span>
          </p>
          <p className="sprint-receipt">Receipt: {s.receipt}</p>
        </li>
      ))}
    </ul>
  )
}

export type { Sprint }
