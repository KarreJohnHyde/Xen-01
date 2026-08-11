export function XenLogo({ size = 40, label = true }: { size?: number; label?: boolean }) {
  return (
    <div className="xen-brand" aria-label="Xen-01">
      <img src="/logo.png" alt="Xen-01 Logo" width={size} height={size} className="xen-symbol" style={{ borderRadius: '22%' }} />
      {label && (
        <span className="xen-wordmark">
          <b>Xen-01</b>
          <small>PROJECT MENTORSHIP</small>
        </span>
      )}
    </div>
  )
}
