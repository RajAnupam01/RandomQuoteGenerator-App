import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";

type GetQuote = {
  id: number,
  quote: 'string',
  author: 'string'
}

export default function Index() {

  const [quote, setQuote] = useState<GetQuote | null>(null)
  const [loading, setLoading] = useState<boolean | false>(false)
  const [error, setError] = useState<string | null>(null)


  const generateQuotes = async () => {
    setLoading(true);
    setQuote(null);
    setError(null)
    try {
      const response = await fetch('https://dummyjson.com/quotes/random')

      if (!response.ok) {
        setError("Failed to Fetch Joke Api");
        return
      }

      const data: GetQuote = await response.json()
      setQuote(data)
    } catch (error) {
      setError("Network Problem")
    } finally {
      setLoading(false)
    }
  }
  let content;
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <View style={styles.container}>
        <Text style={styles.title}>Random Quote Generator</Text>
        <View style={styles.card}>
          {!loading && !error && !quote && <Text style={styles.placeholder} >Click the below button to generate random quotes via Api</Text>}
          {loading && <ActivityIndicator size="large" />}
          {!loading && quote && <>
            <Text style={styles.quoteText} >{quote.quote}</Text>
            <Text style={styles.author} >{quote.author}</Text>
          </>}
          {!loading && error && <Text>{error}</Text>}
        </View>
        <TouchableOpacity style={styles.button} onPress={generateQuotes}  >
          <Text style={styles.buttonText} >Generate Quote</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    padding: 20
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    backgroundColor: "pink",
    padding: 25,
    minWidth: '90%',
    marginBottom: 30,
    borderRadius: 12
  },
  quoteText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20
  },
  author: {
    fontSize: 14,
    color: 'black',
    textAlign: 'right'
  },
  placeholder: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 20,
    borderRadius: 8
  },
  buttonText: {
    color: "#0f172a",
    fontWeight: "bold",
    fontSize: 16,
  }
})