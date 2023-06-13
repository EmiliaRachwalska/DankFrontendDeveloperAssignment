import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    input: {
      borderWidth: 1, 
      borderColor:"#808080",
      borderRadius:5,
      marginTop: 50, 
      marginBottom:30,
      padding:8, 
      width:300,
      flexDirection: 'row',
      alignSelf:"center"
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      height: 40,
    },
    icon1: {
      color: '#999',
    },
    icon2: {
      color: '#999',
      verticalAlign:"middle",
      paddingRight:5
    },
    text: {
      flex: 1,
      textAlign: 'center',
      color: '#333',
      fontWeight: 'bold',
      fontSize:22,
      marginLeft:-60
    },
    text2: {
      color: '#333',
      fontWeight: 'bold',
      fontSize:15,
    },
    topview: {
      backgroundColor:"#FFFFFF",
      paddingTop:50,
      elevation:4
    },
    background:{
      backgroundColor:"#f2f2f2",
      height:"100%"
    },
    addButton: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 15,
      alignSelf: 'flex-end',
      marginBottom: 15,
      width:100
    },
    addButtonText: {
      color: '#000000',
    },
    addtagcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor:"#FFFFFF",
      elevation:4
    },
    
    bottomview: {
      backgroundColor:"#FFFFFF",
      marginTop:40,
      elevation:4,
      padding:15
    },
    tagcontainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      marginTop: 8,
      marginBottom:10
    },
    tag: {
      marginVertical: 8,
      marginHorizontal: 5,
      fontSize:18,
      borderWidth:1,
      borderRadius:2,
      borderColor:'#cccccc',
      padding:5
    },
    saveButton: {
      backgroundColor: '#b3b3b3',
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 10,
      alignSelf: 'center',
      width:150,
      alignItems:'center'
    },
    removeButton: {
      paddingTop:17,
      width:50,
      height:55,
      alignItems:'center'
    },
    saveButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    saveButtonPressed: {
      backgroundColor: '#262626',
    },
  });

export default styles;