import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    proform: {
      margin: 'auto',
      marginTop: 8,
      maxWidth: 600,
    },
    optional: {
      color: token.colorTextSecondary,
      fontStyle: 'normal',
    },
  };
});

export default useStyles;
