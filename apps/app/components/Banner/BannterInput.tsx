import { Box, debounce, makeStyles, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';

export interface SampleTextHeight {
  text: string;
  height: string;
}

const useStyles = makeStyles((theme) => ({
  editor: {
    height: 'auto',
    resize: 'none',
    border: 'none',
  },
}));

const initialSampleTextHeight: SampleTextHeight = {
  text: '',
  height: '0',
};

export const BannerInputText = (props: {
  onDataChanged: (d: SampleTextHeight) => void;
}) => {
  const classes = useStyles();
  const [data, setData] = useState<SampleTextHeight>(() => ({
    ...initialSampleTextHeight,
  }));

  const updateProperty = (
    key: keyof SampleTextHeight,
    value: string | number
  ) => {
    setData((prev) => {
      const updated = {
        ...prev,
        [key]: value,
      };
      props.onDataChanged(updated);
      return updated;
    });
  };

  const updateText = debounce((v: string) => updateProperty('text', v), 300);
  const updateHeight = debounce(
    (v: string) => updateProperty('height', v),
    300
  );

  useEffect(() => {
    props.onDataChanged(data);
    return;
  }, [data]);

  return (
    <Box padding="1rem" style={{ display: 'flex' }}>
      <TextField
        style={{ width: '100%' }}
        className={`${classes.editor}`}
        variant="outlined"
        defaultValue={data.text || ''}
        onChange={(e) => updateText(e.target.value)}
      />

      <TextField
        style={{ width: '100%' }}
        className={`${classes.editor}`}
        variant="outlined"
        defaultValue={data.height || 0}
        onChange={(e) => updateHeight(e.target.value)}
        type="number"
      />
    </Box>
  );
};
