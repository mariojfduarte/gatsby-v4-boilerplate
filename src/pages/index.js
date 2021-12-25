import React from "react"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import { Container, Grid, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { LANG_SWITCHER } from "@copy/translations"
import Typography from "@mui/material/Typography"
import Copyright from "../components/Copyright"
import ProTip from "../components/ProTip"
import { setMode } from "../redux/store"
import Link from "../components/Link"
import styled from "@emotion/styled"
import SEO from "@components/SEO"

const Index = () => {
  const dispatch = useDispatch()
  const { mode } = useSelector(state => state)
  const { locale } = useIntl()

  const copy = LANG_SWITCHER[locale]

  return (
    <CustomContainer maxWidth="sm">
      <SEO
        title="title"
        description="description"
        //image={image}
      />
      <Grid container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              Gatsby example {copy.en}
            </Typography>
          </Grid>
          <Grid item xs={12} className="ptb15">
            <Link to="/about" color="secondary">
              Go to the about page
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Test
                  variant="outlined"
                  onClick={() =>
                    dispatch(setMode(mode === "dark" ? "light" : "dark"))
                  }
                >
                  toggle mode
                </Test>
              </Grid>
              <Grid item>
                <Test
                  variant="outlined"
                  onClick={() => changeLocale(locale === "pt" ? "en" : "pt")}
                >
                  toggle lang
                </Test>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ProTip />
            <Copyright />
          </Grid>
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

const Test = styled(Button)`
  color: ${p => p.theme.palette.tertiary.main};
  margin-top: 10px;
`

export default Index
