import { Card } from "./Card"

const CardList = ({ robot }) => {
  return (
    <div>
      {
        robot.map(bot => <Card key={bot.id} bot={bot} />)
      }
    </div>
  )
}

export default CardList