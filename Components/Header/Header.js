import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
const modals = [
  { title: "Info", icon: InfoRoundedIcon },
  { title: "Download", icon: DownloadRoundedIcon },
  { title: "statistics", icon: BarChartRoundedIcon },
  { title: "Settings", icon: SettingsRoundedIcon },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="Info" size="small">
              <InfoRoundedIcon fontSize="inherit" />
            </IconButton>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="download" size="small">
              <DownloadRoundedIcon fontSize="inherit" />
            </IconButton>
          </Stack>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              src={`/israel.png`}
              alt="flag"
              width={30}
              height={20}
            ></Image>
            ISRADLE
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="statistics" size="small">
              <BarChartRoundedIcon fontSize="inherit" />
            </IconButton>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="Settings" size="small">
              <SettingsRoundedIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
