import React from "react"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Copyright from "../components/Copyright"
import ProTip from "../components/ProTip"
import Grid from "@mui/material/Grid"
import Link from "../components/Link"
import styled from "@emotion/styled"
import SEO from "@components/SEO"

const About = () => {
  return (
    <CustomContainer maxWidth="sm">
      <SEO title="about" canonicalUrl="https://example.com/about"></SEO>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby example
          </Typography>
        </Grid>
        <Grid item xs={12} className="ptb15">
          <Link to="/">Go to the main page</Link>
        </Grid>
        <Grid item xs={12}>
          <ProTip />
          <Copyright />
        </Grid>
      </Grid>
    </CustomContainer>
  )
}

const CustomContainer = styled(Container)`
  padding-top: 50px;

  .ptb15 {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`

export default About
