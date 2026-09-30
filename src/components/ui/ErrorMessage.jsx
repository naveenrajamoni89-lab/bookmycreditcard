export default function ErrorMessage({ message = 'Something went wrong. Please try again.', onRetry }) {
  return (
    <div className="pb-error-box" role="alert">
      <p>{message}</p>
      {onRetry && (
        <button className="pb-error-retry" onClick={onRetry}>Retry</button>
      )}
    </div>
  );
}
