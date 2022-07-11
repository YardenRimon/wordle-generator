import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.css";

import { Stack } from "@mui/material";
import Image from "next/image";

const Header = ({ handleOpenPlayerStatistics }) => {
  return (
    <div className={styles.header}>
      <IconButton aria-label="Info" size="large">
        <InfoRoundedIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="download" size="large">
        <DownloadRoundedIcon fontSize="inherit" />
      </IconButton>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Image
          src={`/israel.png`}
          alt="flag"
          width={"50%"}
          height={"50%"}
          sx={{ marginLeft: 3 }}
          display={"block"}
        ></Image>
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          ISRADLE
        </Typography>
      </Stack>

      <IconButton
        aria-label="statistics"
        size="large"
        onClick={handleOpenPlayerStatistics}
      >
        <BarChartRoundedIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="Settings" size="large">
        <SettingsRoundedIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};
export default Header;
