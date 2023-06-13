import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

function App() {
  const [searchText, setSearchText] = useState('');
  const [saveButtonPressed, setSaveButtonPressed] = useState(false);
  const [savedTags, setSavedTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [notSelectedTags, setNotSelectedTags] = useState<string[]>([
    'Java',
    'Python',
    'JavaScript',
    'Html',
    'React',
    'C++',
    'SQL',
    'VueJS'

  ]);

// the X button removes all selected tags and puts them back into not selected
  const removeTags = () => {
    setNotSelectedTags((prevTags) => [...prevTags, ...selectedTags]);
    setSelectedTags([]);
  };

// sets text entered by a user as a searchText
  const filterTags = (text: string) => {
    setSearchText(text);
  };

// makes a list of suggested tags based on what user writes in the input
  const availableTags = notSelectedTags.filter((tag) => tag.startsWith(searchText));

// enables user to select and deselect a tag by clicking on it
  const clickTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
      setNotSelectedTags([...notSelectedTags, tag]);
    } else {
      setSelectedTags([...selectedTags, tag]);
      setNotSelectedTags(notSelectedTags.filter((t) => t !== tag));
    }
  };

// enables user to add their own, new tag
  const addNewTag = () => {
    if (searchText && !selectedTags.includes(searchText)) {
      setSelectedTags([...selectedTags, searchText]);
      setSearchText('');
    }
  };

// puts selected tags into saved tags
  const saveTags = () => {
    setSavedTags([...savedTags, ...selectedTags]);
    setSelectedTags([]);
  };

// displays an alert that shows all already saved tags
  useEffect(() => {
    if (savedTags.length > 0) {
      Alert.alert('Saved Tags', savedTags.join(', '));
    }
  }, [savedTags]);

  
  return (
    <View style={styles.background}>
      <View style={styles.topview}>
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.removeButton,]} onPress={removeTags} activeOpacity={0.5}>
            <FontAwesome onPress={removeTags} name="times" size={17} style={styles.icon1} />
          </TouchableOpacity>
        <Text style={styles.text}>Add skills</Text>
        </View>
        <View style={styles.input}>
          <MaterialIcons name="search" size={19} style={styles.icon2}/>
          <TextInput
            onChangeText={filterTags}
            value={searchText}
            placeholder="Start typing to search"
          />
        </View>
      </View>
      
      {searchText ? (
          <View style={styles.addtagcontainer}>
            <Text>{searchText}</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={addNewTag}
            >
              <Text style={styles.addButtonText}>Add Tag</Text>
            </TouchableOpacity>
          </View>
        ) : null}

      <View style={styles.bottomview}>
        <Text style={styles.text2}>Selected tags:</Text>
        <View style={styles.tagcontainer}>
          {selectedTags.map((item) => (
            <Text
              key={item}
              style={styles.tag}
              onPress={() => clickTag(item)}
            >
              <FontAwesome style={styles.icon1} name="close" size={20} color="#999999"/>
              {item}
            </Text>
          ))}
        </View>

        <View>
          <Text style={styles.text2}>Add suggested tags:</Text>
            <View style={styles.tagcontainer}>
              {availableTags.map((item) => (
                <Text
                  key={item}
                  style={styles.tag}
                  onPress={() => clickTag(item)}
                >
                  {item}
                </Text>
              ))}
            </View>
        </View>
          
        <TouchableOpacity
          style={[
            styles.saveButton,
            saveButtonPressed && styles.saveButtonPressed,
          ]}
            onPress={saveTags}
            activeOpacity={0.6}
            onPressIn={() => setSaveButtonPressed(true)}
            onPressOut={() => setSaveButtonPressed(false)}
            disabled={selectedTags.length === 0}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;


