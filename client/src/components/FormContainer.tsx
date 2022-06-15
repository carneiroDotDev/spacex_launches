import Button from "react-bootstrap/Button"
import { Container, Form } from "react-bootstrap"
import { useRef } from "react"

interface FormProps {
  setYear: React.Dispatch<React.SetStateAction<string | undefined>>
  setLimit: React.Dispatch<React.SetStateAction<string>>
}

const Forms: React.FunctionComponent<FormProps> = ({ setYear, setLimit }) => {
  const yearRef = useRef<HTMLInputElement | null>(null)
  const limitRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const year = (yearRef.current as HTMLInputElement).value
    const limit = (limitRef.current as HTMLInputElement).value

    setYear(year)
    setLimit(limit)
  }

  return (
    <Container className="mx-2">
      <h2>Launches</h2>
      <Form className="mt-3 mb-3" onSubmit={e => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Set a year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter year of launch"
            ref={yearRef}
          />
          <br />
          <Form.Label>How many launches shall be displayed?</Form.Label>
          <Form.Control type="text" placeholder="set a number" ref={limitRef} />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Forms
