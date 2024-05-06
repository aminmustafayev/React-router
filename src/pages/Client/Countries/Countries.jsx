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

const Countries = () => {
  const [data, setData] = useState([])
  async function getCountry() {
    await getAll(endpoints.countries).then((res) => {
      console.log(res.data);
      setData(res.data)
    })
  }
  useEffect(() => {
    getCountry()
  }, [])


  return (
    <>
      {
        data && data.map((e) => {
          return <Container>
            <Row>
              <Col>
                <Card key={e.id} style={{ margin: "20px", objectFit:"cover",  }} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={e.flagImg}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {e.name}/
                        {e.capital}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {e.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link to={`/countrydetail/${e.id}`}>Detail</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Col>
            </Row>
          </Container>
        })
      }
    </>
  )
}

export default Countries