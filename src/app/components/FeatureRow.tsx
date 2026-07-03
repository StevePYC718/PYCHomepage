import type { ReactNode } from 'react'
import { MockupFrame, type MockupFrameProps } from './MockupFrame'

type FeatureRowProps = {
  title: string
  /** Ember-italic one-line promise. */
  subtitle: string
  body: ReactNode
  /** Optional pill label (e.g. "Free"). The literal word is always present. */
  tag?: string
  /** Visual side of the copy column. DOM order is ALWAYS copy → mockup. */
  side: 'left' | 'right'
  mockup: MockupFrameProps
}

export function FeatureRow({ title, subtitle, body, tag, side, mockup }: FeatureRowProps) {
  return (
    <div className={side === 'right' ? 'feature-row feature-row--flip' : 'feature-row'}>
      <article className="feature-copy">
        <h3 className="feature-title">
          {title}
          {tag && <span className="feature-tag">{tag}</span>}
        </h3>
        <p className="feature-sub">{subtitle}</p>
        <p className="feature-body">{body}</p>
      </article>
      <div className="feature-mock">
        <MockupFrame {...mockup} />
      </div>
    </div>
  )
}

export type { FeatureRowProps }
