import { Box, Container, Grid } from '@mui/material';
import { NameCheckboxs } from '../../Melecules/engineerInfo/CheckboxList';
import { LeftInfoComponent } from './LeftInfoComponent';
import { RightInfoComponent } from './RightInfoComponent';

export const EngineerInfo = () => {
  return (
    <Container
      sx={{
        width: '100%',
        maxWidth: '1800px',
        minHeight: '800px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '24px !important',
        margin: '24px auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box sx={{ mb: 3 }}>
        <NameCheckboxs />
      </Box>

      <Container
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          flex: 1,
          padding: '0 !important',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '20px',
          }}
        >
          <LeftInfoComponent />
        </Box>
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '20px',
          }}
        >
          <RightInfoComponent />
        </Box>
      </Container>
    </Container>
  );
};
