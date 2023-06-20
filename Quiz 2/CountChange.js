import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';

/*import CoinCount from './CoinCount';*/

const App = () => {
    const [change,setChange] = useState(0)

    const [t1,setT1] = useState(1)
    const [t2,setT2] = useState(2)
    const [t3,setT3] = useState(2)
    const [total,setTotal] = useState(0)

    const updateTotal = (val) => {
        setChange(change+val);
    }
    return (
        <View style={{ 
            flexDirection: "column"
        }}>
            <Text style={{
                fontWeight: 500,
                fontSize: 50
            }}>
                Distance of (x,y,z) from (0,0,0)
            </Text>
            <Text style={{
                fontWeight: 400,
                fontSize: 20
            }}>
                Write the code for this app which calculates <br>
                </br>
                d = Math.sqrt(x*x+y*y+z*z) <br>
                </br>
                1 <br></br>
                2 <br></br>
                2
            </Text>
            <Button
                    title="Calculate Distance"
                    onPress = {() => {
                                         setTotal(Math.sqrt((t1*t1)+(t2*t2)+(t3*t3)));
                                     }
                            }
                />
            <Text style={{
                fontWeight: 400,
                fontSize: 20
            }}>
                distance to (1,2,2) is d = {total}
            </Text>
        </View>
    )
  }


export default App;