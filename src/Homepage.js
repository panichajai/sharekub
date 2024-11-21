import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: '90%',
        paddingTop: '20px',
      }}
      >
      <Grid container spacing={2} alignItems="center" justifyContent="center" >
        <Grid item xs={12} md={8}>
          <TextField
            id="outlined-basic"
            label="หัวข้อ"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' }, }}>
          <Button variant="text" sx={{ width: '232px', whiteSpace: 'nowrap' }}>
            Sharekub | About Me
          </Button>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <TextField
            id="outlined-multiline-static"
            label="แชร์ครับ"
            multiline
            rows={20}
            defaultValue="เริ่มด้วยการใส่หัวข้อเรื่อง ก่อนแชร์ครับ"
            fullWidth
            InputProps={{
              sx: { color: 'text.disabled' }
            }}
          />
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' }, alignSelf: 'flex-start' }}>
          <Box sx={{ padding: '10px', borderRadius: '8px' }}>
            <Typography variant="h6" gutterBottom></Typography>
            <Typography variant="body1" paragraph>
              Sharekub เป็นแพลตฟอร์มที่แบ่งปันความรู้แบบ Real-Time ซึ่งทำงานได้บน Platform Website...
            </Typography>
            <Typography variant="body2">
              Coding: Sharekub เขียนด้วย React.js โดยใช้ฐานข้อมูลของ MongoDB สามารถเข้าไปศึกษาดู Source Code เพิ่มเติมได้ที่ About Me
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
