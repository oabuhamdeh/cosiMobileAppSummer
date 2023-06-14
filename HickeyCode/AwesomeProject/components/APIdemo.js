import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';

const Movie = ({ title, releaseYear }) => (
  <View style={styles.movieContainer}>
    <Text style={styles.movieTitle}>{title}</Text>
    <Text style={styles.movieYear}>{releaseYear}</Text>
  </View>
);

const APIdemo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API Demo</Text>

      <FlatList
        data={data.slice(0, 2)}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Movie title={item.title} releaseYear={item.releaseYear} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  movieContainer: {
    backgroundColor: 'lightblue',
    marginBottom: 8,
    padding: 8,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieYear: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default APIdemo;