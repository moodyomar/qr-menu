import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box >
      <BottomNavigation style={styles.stickToBottom}
        sx={{ boxShadow: 3 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="תפריט" icon={<MenuIcon />} />
        <BottomNavigationAction label="ראשי" icon={<HomeIcon />} onClick={() => {
           window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
        }} />
        <BottomNavigationAction label="אהבתי" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Box>
  );
}

const styles = {
  stickToBottom: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
  },
};