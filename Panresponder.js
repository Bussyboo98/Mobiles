import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, TouchableOpacity } from 'react-native';  
import { FontAwesome} from"@expo/vector-icons"
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width



class SwipeCards extends React.Component {
    constructor() {
        super()
        this.position = new Animated.ValueXY()
        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })
        this.rotateAndTranslate = {
            transform: [{
              rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
         }
         this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
         })
         this.nopeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
         })
         this.nextCardOpacity = this.position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0, 1],
        extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0.8, 1],
        extrapolate: 'clamp'
        })
        this.state = {
           currentIndex: 0
        }
    }

    componentWillMount() {
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 120) {
                  Animated.spring(this.position, {
                    toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
                  }).start(() => {
                    this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                      this.position.setValue({ x: 0, y: 0 })
                    })
                  })
                  
                } else if (gestureState.dx < -120) {
                  Animated.spring(this.position, {
                    toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
                  }).start(() => {
                    this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                      this.position.setValue({ x: 0, y: 0 })
                    })
                  })
                }
            
            }
            
        });

    }

    renderFoods = () => {
        

            return this.props.Foods.map((item, i) => {
                if (i < this.state.currentIndex) {
                  return null;
                } else if (i == this.state.currentIndex) {
                    return (
                        
                        <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={i}
                        style={[
                          this.rotateAndTranslate,
                          {
                            height: SCREEN_HEIGHT - 120,
                            width: SCREEN_WIDTH,
                            padding: 10,
                            position: "absolute"
                          }
                        ]}
                      >
                          
                        <Animated.View
                            style={{
                            // opacity: this.likeOpacity,
                            transform: [{ rotate: "-0deg" }],
                            position: "absolute",
                            top: 500,
                            left: 290,
                            zIndex: 1000,
                            backgroundColor:'white',
                            borderRadius:'100%',
                            padding:'7px'
                            }}
                        >
                            <TouchableOpacity
                            style={{
                                color: "white",
                                fontSize: 32,
                                fontWeight: "800",
                                padding: 7
                            }}
                            >
                            <FontAwesome name="heart" size={25} color={'purple'}/>
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View
                            style={{
                            // opacity: this.likeOpacity,
                            transform: [{ rotate: "-0deg" }],
                            position: "absolute",
                            top: 410,
                            left: 290,
                            zIndex: 1000,
                            backgroundColor:'white',
                            borderRadius:'100%',
                            padding:'7px'
                            }}
                        >
                            <TouchableOpacity
                            style={{
                                color: "white",
                                fontSize: 32,
                                fontWeight: "800",
                                padding: 10
                            }}
                            >
                            <FontAwesome name="close" size={25} color={'red'}/>
                            </TouchableOpacity>
                        </Animated.View>
                       
                        <Animated.View
                            style={{
                            // opacity: this.likeOpacity,
                            transform: [{ rotate: "-0deg" }],
                            position: "absolute",
                            top: 600,
                            left: 30,
                            zIndex: 1000,
                            backgroundColor:'white',
                            borderRadius:'100%',
                            padding:'7px'
                            }}
                        >
                            <TouchableOpacity
                            style={{
                                color: "white",
                                fontSize: 32,
                                fontWeight: "800",
                                padding: 7
                            }}
                            >
                            <FontAwesome name="arrow-left" size={25} color={'grey'}/>
                            </TouchableOpacity>
                        </Animated.View>
                       
                        <Animated.View
                            style={{
                            // opacity: this.likeOpacity,
                            transform: [{ rotate: "-0deg" }],
                            position: "absolute",
                            top: 600,
                            left: 160,
                            zIndex: 1000,
                            backgroundColor:'white',
                            borderRadius:'100%',
                            padding:'7px'
                            }}
                        >
                            <TouchableOpacity
                            style={{
                                color: "white",
                                fontSize: 32,
                                fontWeight: "800",
                                padding: 7
                            }}
                            >
                            <FontAwesome name="home" size={25} color={'grey'}/>
                            </TouchableOpacity>
                        </Animated.View>
                       

                        <Animated.View
                            style={{
                            // opacity: this.likeOpacity,
                            transform: [{ rotate: "-0deg" }],
                            position: "absolute",
                            top: 600,
                            left: 290,
                            zIndex: 1000,
                            backgroundColor:'white',
                            borderRadius:'100%',
                            padding:'7px'
                            }}
                        >
                            <TouchableOpacity
                            style={{
                                color: "white",
                                fontSize: 32,
                                fontWeight: "800",
                                padding: 7
                            }}
                            >
                            <FontAwesome name="arrow-right" size={25} color={'grey'}/>
                            </TouchableOpacity>
                        </Animated.View>
                       

                        
                        <Image
                          style={{
                            flex: 1,
                            height: null,
                            width: null,
                            resizeMode: "cover",
                            borderRadius: 20
                          }}
                          source={item.uri}
                        />
                      </Animated.View>
                  );
                } else {
                  return (
                    <Animated.View
                    key={item.id} style={[{
                    opacity: this.nextCardOpacity,
                    transform: [{ scale: this.nextCardScale }],
                    height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
                    }]
                }>
                      <Image
                        style={{
                          flex: 1,
                          height: null,
                          width: null,
                          resizeMode: "cover",
                          borderRadius: 20
                        }}
                        source={item.uri}
                      />
                    </Animated.View>
                  );
                }
            }).reverse();
            
        
    };

    render() {
       
        return (

            <View style={{ flex: 1 }}>
                <View style={{ height: 70 }} />
                <View style={{ flex: 1 }}>
                    {this.renderFoods()}
                </View>
                <View style={{ height: 70 }} />
            </View>
        );
    }

}

export default SwipeCards