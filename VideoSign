import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Video } from 'expo-av';

import * as Config from '../config';
import LogoPlay from '../assets/img/play.svg'
import LogoPause from '../assets/img/pause.svg'
import Svg, { Path, Defs, ClipPath } from "react-native-svg"

const VideoSign = ({
    item
}) => {
    const video = React.useRef(null);

    const [status, setStatus] = React.useState({});
    const [videoStatus, setVideoStatus] = React.useState(false);
    
    const pressHandler = () => {
        console.log("ДЛИНА МАССИВА ", item, item.length);

        if (status.isPlaying) {
            video.current.pauseAsync();
            setVideoStatus(!videoStatus);
        } else {
            video.current.playAsync();
            setVideoStatus(!videoStatus);
        }
    }

    return (
        <View key={item.sources} style={{ position: "relative", alignItems: 'center'}}>
            <TouchableOpacity onPress={pressHandler} >
                <View style={{position: "absolute", zIndex: 2}}>
                    <VideoStatus videoStatus={videoStatus} />
                </View>
                <Video
                    ref={video}
                    source={{ uri: Config.Links.Sources + item.sources }}
                    muted={true}
                    resizeMode="cover"
                    //w230 h300
                    style={{ width: Config.ex.width / 1.7, height: Config.ex.height / 2 }}
                    isLooping
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)} />
            </TouchableOpacity>
            <Text> {item.name} </Text>
        </View>
    )
}

const VideoStatus = ({
    videoStatus
}) => {
    return (
        videoStatus ?
            <LogoPause
                style={{ height: 48, width: 48 }}
            /> :
            <LogoPlay
                style={{ height: 48, width: 48 }}
            />)
}

const SvgPlayLogo = () => {
    
}
export default VideoSign;
