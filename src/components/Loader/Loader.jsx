import { Backdrop, CircularProgress } from '@mui/material';
import { useLoader } from './hooks/useLoader';
import { LoaderStyles } from './LoaderStyles';

const Loader = () => {
  const { show } = useLoader();
  const style = LoaderStyles;
  return (
    <Backdrop open={show || false} sx={style.root}>
      <CircularProgress />
    </Backdrop>
  );
};

export { Loader };
