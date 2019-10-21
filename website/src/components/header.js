import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#d4522b'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar( {siteTitle}) {
  const data = useStaticQuery(graphql`
    query AppBarQuery {
      site {
        siteMetadata {
          title
        }
      },
      icon: file(relativePath: { eq: "sealevel-icon.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const classes = useStyles();
  console.log(data.icon.childImageSharp.fluid)
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={data.icon.childImageSharp.fluid} alt="" />
          <Typography variant="h6" className={classes.title}>
            {siteTitle}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}