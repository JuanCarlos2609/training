export const LoaderStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    // backgroundColor: theme.palette.common.loaderBackground,
    opacity: '0.8 !important',
    zIndex: (theme) => theme.zIndex.drawer + 2,
  },
};
