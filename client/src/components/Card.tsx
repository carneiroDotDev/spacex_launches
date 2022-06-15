import { Badge, Card } from "react-bootstrap"

export interface CardProps {
  id: string
  date_utc: string
  details?: string
  success: boolean
  name: string
}

const CardComponent: React.FC<CardProps> = ({
  id,
  date_utc,
  name,
  details,
  success,
}) => {
  const shortDetail = details
    ? details.split(".")[0]
    : "No detail about this launch provided."
  const d = new Date(date_utc)
  const datestring =
    ("0" + d.getDate()).slice(-2) +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    d.getFullYear() +
    " " +
    ("0" + d.getHours()).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2)

  return (
    <Card
      className="m-2"
      text="dark"
      border={success ? "success" : "danger"}
      style={{ padding: 0, width: "20rem", borderWidth: "0.2rem" }}
      key={id}
    >
      <Card.Header>{datestring}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Badge pill bg={success ? "success" : "danger"} className="my-2">
          {success ? "Success" : "Fail"}
        </Badge>
        <Card.Text>{shortDetail}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
