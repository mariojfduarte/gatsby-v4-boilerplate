import React, { useEffect } from "react"
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
import { Provider, useSelector, useDispatch } from "react-redux"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme } from "@mui/material/styles"
import store, { setMode } from "@redux/store"

import themeDark from "@theme/theme-dark"
import theme from "@theme/theme"

const TopLayout = props => {
  return (
    <Provider store={store}>
      <TopTheme>{props.children}</TopTheme>
    </Provider>
  )
}

const TopTheme = props => {
  const dispatch = useDispatch()

  const mode = useSelector(state => {
    let _mode = state.mode
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("mode")

      if (savedMode) {
        _mode = savedMode
      }
    }

    return _mode
  })

  useEffect(() => {
    dispatch(setMode(mode))
  }, [mode])

  return (
    <ThemeProvider
      theme={responsiveFontSizes(
        createTheme(mode === "dark" ? themeDark : theme)
      )}
    >
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}

export default TopLayout
