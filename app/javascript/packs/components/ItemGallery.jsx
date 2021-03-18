import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
//import Collapse from '@material-ui/core/Collapse';
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import axios from 'axios';
//import ItemGalleryStyle ftom './ItemGalleryStyle'

const useStyles = muiBaseTheme => ({
    card: {
      maxWidth: 300,
      margin: "auto",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    },
    media: {
      paddingTop: "56.25%",//177.777777777778
    },
    content: {
      textAlign: "left",
      padding: muiBaseTheme.spacing.unit * 3
    },
    divider: {
      margin: `${muiBaseTheme.spacing.unit * 3}px 0`
    },
    heading: {
      fontWeight: "bold"
    },
    subheading: {
      lineHeight: 1.8
    },
    avatar: {
      display: "inline-block",
      border: "2px solid white",
      backgroundColor: red[500],
      "&:not(:first-of-type)": {
        marginLeft: -muiBaseTheme.spacing.unit
      }
    }
  });

class ItemGallery extends React.Component {
  constructor(props) {
    super(props)
        this.state = {
            ItemGallerys: [],
            isLoading: true,
        }
        this.getItemGallerys= this.getItemGallerys.bind(this)  
      
  }
    //load ItemGalleryApp component after getter
  componentDidMount() {
    this.getItemGalleries()
  }
    //request items at index /api/v1/ItemGallerys
  getItemGalleries() {
      
    //if successful, load data into state
      axios
          .get('/api/v1/item_galleries') //or "/broken-end-point"
          .then(response => { 
              this.clearErrors()
              this.setState({ isLoading: true })
              const item_galleries = response.data  //bind to the data
              this.setState({ ItemGallerys })
              this.setState({ isLoading: false })
          })
          .catch(error => {
              this.setState({ isLoading: true })
              this.setState({
                  errorMessage: {
                      message:
                          'There was an error loading your ItemGallerys...',
                  },
              })
          })
    }   

    render (){
      const classes = useStyles();
      return (
        <>
        {!this.state.isLoading && (
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  C
                </Avatar>
              }
              title="Green shorts"
              />
            <CardMedia
              className={classes.media}
              image="../../assets/images/0a69bc16-6adc-4563-8aa1-958c32f66524.jpg"
              title="clothing img"
            />
            <CardContent>

            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
           )}
           {this.state.isLoading && <Spinner />}
           </>
    );
  }
}
    document.addEventListener('turbo:load', () => {
      const app = document.getElementById('item_galleries_load')
      app && ReactDOM.render(<ItemGalley/>, app)
    })
