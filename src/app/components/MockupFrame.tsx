import Image from 'next/image'

type MockupFrameProps = {
  /** Top-bar breadcrumb text */
  crumbs: string
  /** Placeholder caption (also the media alt when no explicit alt is given) */
  caption: string
  /** Dimension label, e.g. "1440 × 900" (decorative) */
  dimension: string
  /** Image or video URL. When omitted, the hatch placeholder renders. */
  src?: string
  /** Defaults to inferring from the src extension. */
  mediaType?: 'image' | 'video'
  /** Alt text — falls back to caption. */
  alt?: string
  /** Video poster frame. */
  poster?: string
  /** Use the 21/7 wide aspect variant. */
  short?: boolean
}

const MARK = (
  <svg width="14" height="14" viewBox="0 0 32 32" fill="none" stroke="var(--ember)" strokeWidth="1.6">
    <circle cx="16" cy="16" r="14" />
    <path d="M16 4 L20 16 L16 28 L12 16 Z" fill="var(--ember)" stroke="none" />
  </svg>
)

export function MockupFrame({ crumbs, caption, dimension, src, mediaType, alt, poster, short }: MockupFrameProps) {
  const type = mediaType ?? (src ? (/\.(mp4|webm|mov)$/i.test(src) ? 'video' : 'image') : undefined)
  return (
    <div className="shot">
      <div className="shot-bar">
        <span className="shot-mark">
          {MARK}
          Pioneer
        </span>
        <span className="shot-crumbs">{crumbs}</span>
      </div>
      <div className={short ? 'shot-body short' : 'shot-body'}>
        {src && type === 'image' && (
          <Image className="shot-media" src={src} alt={alt ?? caption} fill sizes="(max-width:860px) 100vw, 50vw" />
        )}
        {src && type === 'video' && (
          <video className="shot-media" src={src} poster={poster} muted loop playsInline aria-label={alt ?? caption} />
        )}
        {!src && (
          <>
            <span className="shot-label">{caption}</span>
            <span className="shot-dim mono" aria-hidden="true">{dimension}</span>
          </>
        )}
      </div>
    </div>
  )
}

export type { MockupFrameProps }
