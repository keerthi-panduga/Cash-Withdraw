import './index.css'
const DenominationItem = props => {
  const {buttonList, deleAmount} = props
  const {id, value} = buttonList

  const onDecVal = () => {
    deleAmount(value)
  }
  return (
    <li className="list-container">
      <button className="button" onClick={onDecVal}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
