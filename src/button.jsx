export const Button = ({
  children,
  forwardRef = null,
  active = false,
  disabled = false,
  press = () => {}
}) => {
  return (
    <button
      ref={forwardRef}
      disabled={disabled}
      data-active={active}
      onClick={press}
    >
      {children}
    </button>
  )
}
