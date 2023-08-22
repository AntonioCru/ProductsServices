import React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

import './headerMenu.css'

// //BUTTOM NAVIGATION

export default function HeaderMenu() {
  const [value, setValue] = React.useState(0)
  return (
    <div className="header-menu">
      <Box className="container-menu">
        <BottomNavigation
          className="button-navigation"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction
            className="bottom-header"
            label="Productos"
            icon={<ProductionQuantityLimitsIcon />}
          />
          <BottomNavigationAction
            className="bottom-header"
            label="Localización"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            className="bottom-header"
            label="Servicios"
            icon={<MiscellaneousServicesIcon />}
          />
          <BottomNavigationAction
            className="bottom-header"
            label="Mi cuenta"
            icon={<PersonOutlineIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  )
}
