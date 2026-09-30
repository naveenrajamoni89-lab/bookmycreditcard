export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="pb-loader" role="status" aria-live="polite">
      <div className="pb-loader-spinner" />
      <span className="pb-loader-label">{label}</span>
    </div>
  );
}
