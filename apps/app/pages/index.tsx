import { Box } from '@material-ui/core';
import { useState } from 'react';
import { SimpleText, SimpleTextDef } from '../components/SimpleText';
import { SimpleTextModifier } from '../components/SimpleTextModifier';
import { BannerBox } from '../components/Banner/BannerBox';
import {
  BannerInputText,
  SampleTextHeight,
} from '../components/Banner/BannterInput';

export const Index = () => {
  const [data, setData] = useState<SimpleTextDef>();
  const [bannerData, setBannerData] = useState<SampleTextHeight>();
  return (
    <Box>
      <SimpleTextModifier onDataChanged={(d) => setData(d)} />
      <SimpleText data={data} />
      <BannerInputText
        onDataChanged={(d) => setBannerData(d)}
      ></BannerInputText>
      <BannerBox data={bannerData} />
    </Box>
  );
};

export default Index;
