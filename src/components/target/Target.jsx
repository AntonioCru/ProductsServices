/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import './target.css'

import ejemImg from '../../images/ejemServicio.avif'
import { Description } from '@mui/icons-material'

// eslint-disable-next-line react/prop-types
export default function Target({ service, onClick }) {
  // console.log(service)

  const targetService = {
    id: service.id,
    image: service.image,
    name: service.name,
    description: service.description,
    price: service.price,
    subname: service.subname,
  }
  // console.log(targetService)
  return (
    <div className="container-target">
      <Card className="cardDescription" sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={targetService.image}
          title="imgTarget"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {targetService.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {targetService.subname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`$${targetService.price}`}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small" onClick={onClick}>
            Más información
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
