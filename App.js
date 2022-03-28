import react,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform,TextInput, TouchableOpacity ,View,Text,StyleSheet} from 'react-native';
import Task from './components/Tasks';

export default function App() {
  const[task,setTask]=useState();
  const[taskItems,setTaskItems]=useState([]);

  const handleAddTask=()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }
  const completeTask=(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/*Tasks days*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
        {
          taskItems.map((item,index)=>{
            return(
              <TouchableOpacity onPress={()=>completeTask(index)}>
                  <Task text={item}/>
              </TouchableOpacity>
            )
            return <Task key={index} text={item}/>
          })
        }
          </View>
      </View>
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS==="ios"?"padding":"height"}
          style={styles.writeTaskWrapper}
          >
          <TextInput style={styles.input} plceholder={'write a task'} value={task} onChangeText={text=>setTask(text)}/>
          <TouchableOpacity onPress={()=>handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
  },
  items: {
    marginTop:30,
  },
  tasksWrapper: {
    paddingTop:80,
    paddingHorizontal:20,
  },
  writeTaskWrapper: {
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input: {
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    backgroundColor:'#FFF',
  },
  addWrapper: {
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText: {

  },
});
