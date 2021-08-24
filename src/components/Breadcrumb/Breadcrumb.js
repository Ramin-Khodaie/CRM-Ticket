import { Breadcrumbs, Link, makeStyles, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyle = makeStyles(() => ({
  icon: {},
  link: {
    padding: "0px",
    marginLeft: "15px",
  },
}));
export default function Breadcrumb({ page }) {
  const classes = useStyle();
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator="-"
      style={{ marginTop: "100px" }}
    >
      <Link color="secondary" href="/" underline="none">
        {/* <HomeIco     /> */}
        <Typography className={classes.link}>Home</Typography>
      </Link>
      <Link
        color={`${page ? "inherit" : "secondary"}`}
        underline="none"
        href={`/${page}`}
        // onClick={(e) => e.preventDefault()}
        style={{ pointerEvents: "none" }}
      >
        {page}
      </Link>
    </Breadcrumbs>
  );
}
