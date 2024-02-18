import "./App.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queries/client";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./theme/mui";
import Router from "./routes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
