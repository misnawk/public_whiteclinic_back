import { Box, Container, Grid } from '@mui/material';
import { NameCheckboxs } from '../../Melecules/engineerInfo/CheckboxList';
import { LeftInfoComponent } from './LeftInfoComponent';
import { RightInfoComponent } from './RightInfoComponent';

export const EngineerInfo = () => {
  return (
    <Container
      sx={{
        width: '2000px',
        height: '800px',
        border: '1px solid black',
        padding: '0 !important',
        margin: '0px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NameCheckboxs />

      <Container sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1 }}>
        <Box>
          <LeftInfoComponent />
        </Box>
        <Box>
          <RightInfoComponent />
        </Box>
      </Container>
    </Container>
  );
};
