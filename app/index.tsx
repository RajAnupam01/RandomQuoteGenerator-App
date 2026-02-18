import { useState } from "react";
import { Text, View ,StyleSheet,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type quote = {
  id: number,
  text:string,
  author:string
}

const quotes:quote[] = [
  { id: 1, text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { id: 2, text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { id: 3, text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { id: 4, text: "Action is the foundational key to success.", author: "Pablo Picasso" },
  { id: 5, text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { id: 6, text: "What we think, we become.", author: "Buddha" },
  { id: 7, text: "Well begun is half done.", author: "Aristotle" },
  { id: 8, text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { id: 9, text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { id: 10, text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { id: 11, text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { id: 12, text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { id: 13, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { id: 14, text: "Wherever you go, go with all your heart.", author: "Confucius" },
  { id: 15, text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" }
];


export default function Index() {

  const [quote, setQuote] = useState<quote | null>(null)

  const generateRandomQuote = ():void =>{
    const randomIndex = Math.floor(Math.random()*quotes.length)
    setQuote(quotes[randomIndex])
  }

  return (
    <SafeAreaView style={{flex:1}} >
      <View style={styles.container}>
        <Text style={styles.title}>Random Quote Generator</Text>
        <View style={styles.card}>
        {quote ? (
          <>
          <Text style={styles.quoteText}>{quote.text}</Text>
          <Text style={styles.author}>{quote.author}</Text>
          </>
        ): (
        
        <Text style={styles.placeholder} >
            Tap the below to generate the random quotes.
        </Text>
      )}
      </View>
      <TouchableOpacity style={styles.button} onPress={generateRandomQuote} >
        <Text style={styles.buttonText} >Generate Quote</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0f172a',
    padding:20
  },
  title:{
    fontSize:24,
    color:'white',
    fontWeight:'bold',
    marginBottom:20
  },
  card:{
   backgroundColor: "pink",
    padding:25,
    minWidth:'90%',
    marginBottom:30,
    borderRadius:12
  },
  quoteText:{
    fontSize:18,
    color:'black',
    textAlign:'center',
    marginBottom:20
  },
  author:{
    fontSize:14,
     color:'black',
     textAlign:'right'
  },
  placeholder:{
    fontSize:18,
    color:'black',
    textAlign:'center'
  },
  button:{
    backgroundColor:'pink',
    paddingVertical:12,
    paddingHorizontal:25,
    marginTop:20,
    borderRadius:8
  },
  buttonText:{
    color: "#0f172a",
    fontWeight: "bold",
    fontSize:16,
  }
})