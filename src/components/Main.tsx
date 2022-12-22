import { View, Button } from 'react-native';
import React from 'react'
import { Styles as styles } from '../styles/styles';
import InputComponent from './InputComponent/Main';
import Goals from './Goal'
export default function Main() {
  type ItemR = {
    id: string
    text: string
  }
  const [courseContent, setCourseContent] = React.useState<ItemR[]>([])
  const [openModalBtn, setOpenModalBtn] = React.useState<Boolean>(false)
  function create(key: any) {
    setCourseContent(prev => [...prev, key])
    closeModalEv()
  }
  function toDelItem(key: string) {
    setCourseContent(courseContent.filter(item => item.id != key))
    courseContent.length == 1 ? setCourseContent([]) : ''
  }

  function openModal() {
    setOpenModalBtn(true)
  }
  function closeModalEv() {
    setOpenModalBtn(false)
  }
  return (
    <View style={styles.container}>
      
      <Button title='Start' onPress={openModal} />
      <InputComponent 
      closeModalEv={closeModalEv} 
      visibleModal={openModalBtn} 
      test={create} />

      {
        courseContent &&
        <Goals goal={courseContent} selectedGoal={toDelItem} />
      }

    </View>
  )
}