import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAll } from '../../../API'
import { endpoints } from '../../../API/base';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Countries from '../Countries/Countries';


const CountryDetail = () => {
  const [country, setCountry] = useState({}); 
  useEffect(() => {
    setCountry(data.find((x) => x.id == id));
  }, []) 
  return (
  <>
  <Card key={e.id} style={{ margin: "20px", objectFit:"cover",  }} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={data.flagImg}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.name}/
                        {data.capital}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link to={`/countrydetail/${data.id}`}>Detail</Link>
                    </Button>
                  </CardActions>
                </Card>
  </>
  )
}

export default CountryDetail