import {useRef} from "react"
import {Col, Form, Row, Stack, Button} from 'react-bootstrap';
import CreatableReactSelect from "react-select/creatable"
import {Link} from 'react-router-dom'

export default function NoteForm() {
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)
    const handleSubmit=(e: FormEvent)=>{
        e.preventDefault()

    }
  return (
    <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={titleRef} required/>

                </Form.Group>
                
                </Col>
                <Col>
                <Form.Group controlId="tags" ref={markdownRef}>
                    <Form.Label>Tags</Form.Label>
                  <CreatableReactSelect isMulti/>

                </Form.Group>
                
                </Col>
            </Row>
            <Form.Group controlId="markdown">
                    <Form.Label>Body</Form.Label>
                    <Form.Control required as="textarea" rows={6}/>
                </Form.Group>
                <Stack direction="horizontal" className="justify-content-end" gap={2}>
                    <Button stype="submit" variant="primary">Save</Button>
                    <Link to="..">
                    <Button type="button" variant="outline-secondary">Cancel</Button>
                    </Link>
                   

                </Stack>
        </Stack>
    </Form>
  )
}
