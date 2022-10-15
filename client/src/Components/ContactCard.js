import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../JS/Actions/contact'

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src='https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg'
        />
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>{contact.phone}</Card.Text>
          <Card.Text>{contact.email}</Card.Text>
          <Button
            variant='primary'
            onClick={() => dispatch(deleteContact(contact._id))}
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ContactCard
