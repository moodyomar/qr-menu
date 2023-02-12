import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
    if (index === 1) {
      window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box>
      <BottomNavigation style={styles.stickToBottom}
        sx={{ boxShadow: 3 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction icon={<MenuIcon style={{ color: selectedIndex === 0 ? '#D39F47' : 'white' }} />} onClick={() => handleClick(0)} />
        <BottomNavigationAction icon={<HomeIcon style={{ color: selectedIndex === 1 ? '#D39F47' : 'white' }} />} onClick={() => handleClick(1)} />
        <BottomNavigationAction icon={<FavoriteIcon style={{ color: selectedIndex === 2 ? '#D39F47' : 'white' }} />} onClick={() => handleClick(2)} />
      </BottomNavigation>
    </Box>
  );
}

const styles = {
  stickToBottom: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    backgroundColor:"#1E1E1E",
  },
};
