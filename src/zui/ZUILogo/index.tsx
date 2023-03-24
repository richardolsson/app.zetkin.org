import makeStyles from '@mui/styles/makeStyles';
import SvgIcon from '@mui/material/SvgIcon';
import { Box, Typography } from '@mui/material';

interface ZUILogoProps {
  size?: number;
  color?: 'inherit' | 'disabled' | 'action' | 'secondary' | 'primary' | 'error';
  htmlColor?: string;
  beta?: boolean;
}

const useStyles = makeStyles((theme) => ({
  beta: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(0.25),
    bottom: theme.spacing(-1.5),
    color: theme.palette.background.paper,
    fontSize: '0.5rem',
    fontWeight: 900,
    lineHeight: 1,
    padding: theme.spacing(0.25),
    position: 'absolute',
    right: theme.spacing(-0.5),
  },
  logoContainer: {
    position: 'relative',
  },
}));

const ZUILogo = ({
  size,
  color,
  htmlColor,
  beta,
}: ZUILogoProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.logoContainer}>
      <SvgIcon
        color={color}
        htmlColor={htmlColor}
        style={{ fontSize: size }}
        viewBox="0 0 39 32"
      >
        <path d="M11.8315 3.72506C12.8601 3.72506 13.694 2.89117 13.694 1.86253C13.694 0.833882 12.8601 0 11.8315 0C10.8028 0 9.96893 0.833882 9.96893 1.86253C9.96893 2.89117 10.8028 3.72506 11.8315 3.72506Z" />
        <path d="M18.4677 4.58636C19.6357 4.58636 20.5825 3.63953 20.5825 2.47156C20.5825 1.30358 19.6357 0.35675 18.4677 0.35675C17.2997 0.35675 16.3529 1.30358 16.3529 2.47156C16.3529 3.63953 17.2997 4.58636 18.4677 4.58636Z" />
        <path d="M25.2714 5.21903C26.435 5.21903 27.3783 4.27573 27.3783 3.11211C27.3783 1.94849 26.435 1.00519 25.2714 1.00519C24.1077 1.00519 23.1644 1.94849 23.1644 3.11211C23.1644 4.27573 24.1077 5.21903 25.2714 5.21903Z" />
        <path d="M32.282 6.10398C33.5947 6.10398 34.6589 5.03978 34.6589 3.72704C34.6589 2.41429 33.5947 1.3501 32.282 1.3501C30.9692 1.3501 29.905 2.41429 29.905 3.72704C29.905 5.03978 30.9692 6.10398 32.282 6.10398Z" />
        <path d="M24.8003 12.2789C26.223 12.2789 27.3763 11.1256 27.3763 9.70289C27.3763 8.28021 26.223 7.12689 24.8003 7.12689C23.3776 7.12689 22.2243 8.28021 22.2243 9.70289C22.2243 11.1256 23.3776 12.2789 24.8003 12.2789Z" />
        <path d="M15.4364 18.6213C16.9832 18.6213 18.2371 17.3674 18.2371 15.8206C18.2371 14.2739 16.9832 13.02 15.4364 13.02C13.8896 13.02 12.6357 14.2739 12.6357 15.8206C12.6357 17.3674 13.8896 18.6213 15.4364 18.6213Z" />
        <path d="M3.34079 27.0037C5.18582 27.0037 6.68151 25.508 6.68151 23.663C6.68151 21.818 5.18582 20.3223 3.34079 20.3223C1.49575 20.3223 6.10352e-05 21.818 6.10352e-05 23.663C6.10352e-05 25.508 1.49575 27.0037 3.34079 27.0037Z" />
        <path d="M13.3176 28.6455C15.2889 28.6455 16.8869 27.0475 16.8869 25.0762C16.8869 23.1049 15.2889 21.5068 13.3176 21.5068C11.3463 21.5068 9.74823 23.1049 9.74823 25.0762C9.74823 27.0475 11.3463 28.6455 13.3176 28.6455Z" />
        <path d="M23.671 30.2479C25.7174 30.2479 27.3763 28.5889 27.3763 26.5425C27.3763 24.4961 25.7174 22.8372 23.671 22.8372C21.6246 22.8372 19.9656 24.4961 19.9656 26.5425C19.9656 28.5889 21.6246 30.2479 23.671 30.2479Z" />
        <path d="M34.4481 32C36.6186 32 38.3781 30.2405 38.3781 28.07C38.3781 25.8995 36.6186 24.14 34.4481 24.14C32.2776 24.14 30.5181 25.8995 30.5181 28.07C30.5181 30.2405 32.2776 32 34.4481 32Z" />
      </SvgIcon>
      {beta && (
        <Typography className={classes.beta} variant="overline">
          Beta
        </Typography>
      )}
    </Box>
  );
};

export default ZUILogo;
