export const Scroll = ({children}) => {
  return (
    <div style={
      {overflowY: 'scroll',  height: '900px', margin: '10px'}
    }>
      {children}
    </div>
  )
}
