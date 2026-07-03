'use client'

import { useState } from 'react'
import { SprintList, type Sprint } from './SprintList'

type ArcPhaseProps = {
  /** '02' / '03' — drives display + derived aria ids. */
  index: string
  name: string
  days: string
  /** Italic descriptor of what the phase clears (always visible). */
  theme: string
  /** Short affordance label, e.g. "Sprints 4–6". */
  affordance: string
  /** Gated detail line revealed on expand. */
  detail: string
  /** Optional sprint rows (none yet for Phases 2 & 3). */
  sprints?: Sprint[]
  defaultOpen?: boolean
}

/** The only 'use client' leaf — an independent disclosure for Phases 2 & 3. */
export function ArcPhase({ index, name, days, theme, affordance, detail, sprints, defaultOpen = false }: ArcPhaseProps) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = `arc-panel-${index}`
  const btnId = `arc-btn-${index}`
  return (
    <div className={open ? 'arc-phase is-open' : 'arc-phase'}>
      <button
        id={btnId}
        type="button"
        className="arc-phase-head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="phase-idx" aria-hidden="true">{index}</span>
        <span className="arc-phase-meta">
          <span className="arc-phase-title">
            <span className="phase-name">{name}</span>
            <span className="phase-days">{days}</span>
          </span>
          <span className="arc-phase-theme">{theme}</span>
        </span>
        <span className="arc-affordance" aria-hidden="true">{affordance}</span>
        <span className="arc-chevron" aria-hidden="true" />
      </button>
      <div id={panelId} role="region" aria-labelledby={btnId} className="arc-phase-body" hidden={!open}>
        <p className="arc-detail">{detail}</p>
        {sprints && sprints.length > 0 && <SprintList sprints={sprints} />}
      </div>
    </div>
  )
}

export type { ArcPhaseProps }
