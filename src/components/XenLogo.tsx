export function XenLogo({ size = 40, label = true }: { size?: number; label?: boolean }) {
  return (
    <div className="xen-brand" aria-label="Xen-01">
      <svg className="xen-symbol" width={size} height={size} viewBox="0 0 100 100" role="img" aria-hidden="true">
        <path d="M9 15h20l25 25-14 14L9 23Z M71 15h20v67L60 51l14-14-3-3Z M9 85h20l25-25-14-14L9 77Z M71 85h20L60 54l14-14-3-3Z" fill="currentColor" />
        <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="8" />
        <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="7" />
        <path d="M50 24v9M50 67v9M24 50h9M67 50h9" stroke="currentColor" strokeWidth="8" />
      </svg>
      {label && (
        <span className="xen-wordmark">
          <b>Xen-01</b>
          <small>PROJECT MENTORSHIP</small>
        </span>
      )}
    </div>
  )
}
