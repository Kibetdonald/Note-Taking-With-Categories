import React from 'react'
import {Col, Row, Button, Stack, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function NoteList() {
  return (
    <>
        <Row>
            <Col><h2>Notes</h2></Col>
            <Col xs="auto">
                <Stack gap={2} direction="horizontal">
                    <Link to="new">
                             <Button variant="primary">Create</Button>
                    </Link>
                    <Link to="new">
                        <Button variant="outline-primary">Edit tags</Button>
                     </Link>
                </Stack>
            </Col>
        </Row>
<Form>
    <Row className="mb-4">
        <Col>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
        </Col>
        
    </Row>
</Form>
    </>
  )
}
