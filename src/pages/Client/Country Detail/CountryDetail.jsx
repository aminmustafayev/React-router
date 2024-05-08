import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect, useState } from 'react';
import { getById } from '../../../API'
import { endpoints } from '../../../API/base';
import { Link, useParams } from 'react-router-dom';



const CountryDetail = () => {
  let {id}=useParams()

  const [country, setCountry] = useState({}); 
  const [data, setData] = useState([])
  async function getCountry() {
    await getById(endpoints.countries,id).then((res) => {
      console.log(res.data);
      setCountry(res.data)
    })
  }
  useEffect(() => {
    getCountry()
  }, [])
  console.log(country)

  return (
  <>
  <Card key={country?.id} style={{ margin: "20px", objectFit:"cover",  }} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={country?.flagImg}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {country?.name}/
                        {country?.capital}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {country?.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link to={"/countries"}>Go Back</Link>
                    </Button>
                  </CardActions>
                </Card>
  </>
  )
}

export default CountryDetail