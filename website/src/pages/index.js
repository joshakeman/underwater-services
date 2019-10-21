import React from "react"
import { Link, graphql } from "gatsby"

//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2, 1),
    backgroundColor: 'white'
  },
  jumbotronWrapper: {
    position: 'relative'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    flexGrow: 1,
  },
  headerBacking: {
    backgroundColor: 'rgb(0,0,0,0.4)',
    padding: theme.spacing(4, 2),
    position:'absolute',
    top: '50%',
    left: '50%'
  }
}));

const IndexPage = ({ data }) => {
  console.log(data)
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.jumbotronWrapper}>
            {/* <Paper className={classes.paper}> */}
            <Img fluid={data.jumbotron.childImageSharp.fluid} alt="" className={classes.jumboImg} />
            <div className={classes.headerBacking}>
              <Typography variant="h2" className={classes.title}>
              We Really Know the Ropes!
              </Typography>
            </div>
            {/* </Paper> */}
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
query HomePageQuery {
  site {
    siteMetadata {
      title
    }
  },
  jumbotron:  file(relativePath: { eq: "seaLevelHeader.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
  
export default IndexPage