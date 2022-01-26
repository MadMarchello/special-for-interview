import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Text, View, ScrollView } from 'react-native';

import VideoSign from '../../VideoSign';

const Page = ({
    data
}) => {
    console.log("\n\nДанные от сервера: \n", data.response);

    let listVideoItems = data.response.searchedVideoSign;

    //console.log(listVideoItems.length);

    if (listVideoItems.length === 0) {
        return (
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: '2%' }}>
                <Text> Элементы не найдены </Text>
            </View>
        )
    } else {

        const video = listVideoItems.map(item => {
            return (
                <VideoSign key={"name_sign_" + item.name} item={item} />
            )
        });

        return (
            <>
                <Text> Найденные слова: </Text>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                        {
                            video
                        }
                    </View>

            </>
        )
    }
}


export default Page;
