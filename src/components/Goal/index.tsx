import { View, Text, FlatList, ListRenderItem, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { Styles as styles } from '../../styles/styles'
type ItemR = {
    id: string,
    text: string
}
export default function index(props: any) {
    function tryTouch(key: ItemR) {
        console.log(key.id);
        props.selectedGoal(key.id)
    }

    let goal = props.goal
    const renderItem: ListRenderItem<ItemR> = ({ item, index }) => (
        <Pressable android_ripple={{ color: '#210644' }} onPress={() => tryTouch(item)}>
            <View style={styles.goalItem} >

                <Text>{item.text} - {item.id}</Text>
            </View>
        </Pressable>
    )
    return (
        <View style={styles.GoalsContainer}>
            <View style={styles.targetGoal}>
                <Text> gOAL component</Text>
            </View>
            <FlatList
                data={goal}
                renderItem={renderItem}
            /></View>
    )
}