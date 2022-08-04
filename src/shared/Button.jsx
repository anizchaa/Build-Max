const Button = ({ type, btnName, pad, fntSize }) => {
  return (
    <button
      className='btn'
      type={type}
      style={{ padding: pad, fontSize: fntSize }}
    >
      {btnName}
    </button>
  )
}

export default Button
