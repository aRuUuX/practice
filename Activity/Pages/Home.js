import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Rect, Text as SvgText } from 'react-native-svg';

// Sample emotional distress ratings data
const emotionalDistressData = [
  { label: 'Low', value: 3 },
  { label: 'Moderate', value: 6 },
  { label: 'High', value: 9 },
  { label: 'Very High', value: 12 },
];

const Home = () => {
  // Constants for bar graph rendering
  const barHeight = 40; // Height of each bar
  const barMargin = 10; // Margin between bars
  const maxValue = Math.max(...emotionalDistressData.map(item => item.value)); // Maximum value for scaling
  const barWidth = 300; // Width of the bar graph

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Emotional Distress Ratings</Text>

      <Svg width={barWidth} height={(barHeight + barMargin) * emotionalDistressData.length}>
        {emotionalDistressData.map((item, index) => (
          <View key={index}>
            <Rect
              x={0}
              y={index * (barHeight + barMargin)}
              width={(item.value / maxValue) * barWidth}
              height={barHeight}
              fill="#007AFF"
            />
            <SvgText
              x={(item.value / maxValue) * barWidth + 10}
              y={index * (barHeight + barMargin) + barHeight / 2 + 5}
              fontSize="14"
              fill="black"
            >
              {item.label} ({item.value})
            </SvgText>
          </View>
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;
