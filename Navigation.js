import { View, Text } from 'react-native'
import React from 'react'
import BottomDrawer from './components/BottomDrawer'

const Navigation = ({navigator}) => {
  return (
   <>
   {navigator}
   <BottomDrawer navigation={navigation} />


   </>
  )
}

export default Navigation