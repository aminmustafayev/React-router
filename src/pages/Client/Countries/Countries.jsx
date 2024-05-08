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
import { Grid } from '@mui/material';

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
    <Grid container style={{width:'80%', margin:"0 auto"}}   >
      {
        data && data.map((e) => {
          return (
            <Grid item xs={12} md={6} sm={12} lg={3} >
            <Card style={{minHeight:"450px", margin: "20px", objectFit:"cover",  }} >
              <CardActionArea>
                <CardMedia 
                sx={{ }}
                  component="img"
                
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
          </Grid>
        )
          
          
          
            
         
        })
      }
       </Grid>
    </>
  )
}

export default Countries