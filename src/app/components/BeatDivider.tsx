/** Non-heading structural label between feature-tour beats (Arrive / Aim / …). */
export function BeatDivider({ label }: { label: string }) {
  return (
    <div className="beat-divider" role="presentation">
      <span className="beat-line" aria-hidden="true" />
      <span className="beat-label">{label}</span>
      <span className="beat-line" aria-hidden="true" />
    </div>
  )
}
