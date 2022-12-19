import { Button, TextInput, View, Modal, Image } from 'react-native';
import React from 'react'
import { Styles as styles } from '../../styles/styles';
type ItemR = {
    id: string
    text: string
}
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export default function Main(props: any) {
    const [inputContent, setInputContent] = React.useState<ItemR | any>()
    function goalInputHandler(entredText: string) {
        setInputContent({ text: entredText, id: uuidv4() + "1" })
    }
    let sendGoalEv = () => {
        props.test(inputContent)
        setInputContent('')
    }
    let closeModalEv = () => {
        props.closeModalEv(inputContent)
    }
    return (
        <Modal visible={props.visibleModal} animationType='slide'>
            <View style={styles.InputContainer}>
                <Image style={styles.image} source={require('../../../assets/images/target.png')} />
                <TextInput
                    style={styles.TextInput}
                    placeholder='Your course goal here'
                    value={inputContent}
                    onChangeText={goalInputHandler} ></TextInput>


                <View style={styles.btnContainer}>
                    <View style={styles.btnOneCnt}>
                        <Button title='Submit' onPress={sendGoalEv} color={"#5e0acc"} />
                    </View>
                    <View style={styles.btnOneCnt}>
                        <Button title='Cancel' color={'#f31282'} onPress={closeModalEv} />
                    </View>

                </View>
            </View>
        </Modal>
    )
}