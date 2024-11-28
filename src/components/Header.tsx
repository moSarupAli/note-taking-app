
import { AppBar, Toolbar, Typography } from '@mui/material';
import { logo } from '../constants/constant';

const Header: React.FC = () => {

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <img src={ logo } alt='logo' style={{ marginRight: 10 }} />
        <Typography>Taking Note</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
