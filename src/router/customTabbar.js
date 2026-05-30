import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const ICONS = {
  Home: require('../assets/icons/home.png'),
  // Plan: require('../assets/icons/plan.png'),
  Work: require('../assets/icons/work.png'),
  Account: require('../assets/icons/settings.png')
};

export const getRouteIcon = routeName => {
  return ICONS[routeName] || ICONS.Home;
};

const { width } = Dimensions.get('window');
const TAB_COUNT = 3;
const TAB_WIDTH = (width - 90) / TAB_COUNT;

const CustomTabBar = ({ state, navigation }) => {
  const translateX = useSharedValue(state.index * TAB_WIDTH);

  const scales = Array(TAB_COUNT)
    .fill(0)
    .map((_, i) => useSharedValue(i === state.index ? 1.3 : 1));

  useEffect(() => {
    translateX.value = withTiming(state.index * TAB_WIDTH, { duration: 300 });
    scales.forEach((scale, index) => {
      scale.value = withTiming(index === state.index ? 1.3 : 1, {
        duration: 300
      });
    });
  }, [state.index]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }]
  }));

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Animated.View style={[styles.indciatorWrapper, indicatorStyle]}>
          <LinearGradient
            // colors={['#2bc0e4', '#eaecc6' ]}
            colors={['#f7a136', '#ffd089']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.indicator}
          />
        </Animated.View>

        {state.routes.map((route, index) => {
          const iconStyle = useAnimatedStyle(() => ({
            transform: [
              {
                scale: scales[index].value
              }
            ]
          }));

          const isFocused = state.index === index;
          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };
          const iconBase = getRouteIcon(route.name);

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabButton}
            >
              <Animated.View style={[iconStyle]}>
                <Image
                  source={iconBase}
                  resizeMode='stretch'
                  style={[
                    {
                      // tintColor: isFocused ? '#2bc0e4' : '#8aa7b3',
                      tintColor: isFocused ? '#fff' : '#f7a136',
                      width: 26,
                      height: 26
                    }
                  ]}
                />
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 30,
    // left: 45,
    // right: 45,
    width: Dimensions.get('window').width - 90,
    height: 70,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: 'transparent',
    // shadowColor: 'rgba(0,0,0,0.8)',
    shadowColor: 'rgba(247, 161, 54, 0.35)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 15,
    overflow: 'hidden'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  //burdan itibaren animasyon
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#252628',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    // overflow: 'hidden',
    height: 70
  },
  indciatorWrapper: {
    position: 'absolute',
    width: TAB_WIDTH,
    height: '100%',
    top: 0,
    borderRadius: 30,
    overflow: 'hidden'
  },
  indicator: {
    flex: 1,
    borderRadius: 30,
    opacity: 0.6
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
