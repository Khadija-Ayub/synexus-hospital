export default function FormField({ label, htmlFor, required, error, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-text mb-1.5">
        {label} {required && <span className="text-emergency">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs text-emergency" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}