import { Box, makeStyles } from '@material-ui/core';
import { Device } from '../../shared/Device';
import { PageElementProps } from '../../shared/PageElementProps';
import { FC } from 'react';
import { SampleTextHeight } from './BannterInput';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1rem',
    backgroundColor: 'lightgreen',
    height: '30px',
  },
}));

// do not remove PageElementProps to avoid collission later, we need this interface in the full app for integration
export const BannerBox: FC<
  { data: SampleTextHeight; device?: Device } & PageElementProps
> = (props) => {
  const classes = useStyles();
  const className = `${props.className} ${classes.root}`;
  return (
    <Box
      className={className}
      style={{ height: `${props.data?.height}rem`, padding: '1 rem' }}
      id={props.id}
      onMouseMove={props.onMouseMove}
      onDoubleClick={props.onDoubleClick}
      onClick={props.onClick}
    >
      {props.data?.text} {props.data?.height} rem
    </Box>
  );
};
