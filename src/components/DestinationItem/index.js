// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {imgUrl, name} = userDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
