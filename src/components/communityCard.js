import React from "react"
import { Card } from "react-bootstrap"

const CommunityCard = ({ name, role, link, linkRef, children }) => (
  <Card className="m-4">
    <Card.Body>
      <Card.Title>
        <Card.Subtitle className="mt-1 text-muted">{role}</Card.Subtitle>
        <h2 className="mb-2">{name}</h2>
        <Card.Link href={linkRef}>
          <h4 style={{textDecoration: "underline"}} >{link}</h4>
        </Card.Link>
      </Card.Title>
      <Card.Text>{children}</Card.Text>
    </Card.Body>
  </Card>
)

export default CommunityCard
