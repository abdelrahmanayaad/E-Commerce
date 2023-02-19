import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BoldFontFamily,
  defaultFontFamily,
  FONTS,
} from '../../constants/Constants';
import Icon from 'react-native-vector-icons/AntDesign';
import {validate} from '../../utils/Validate';

// function validatePhone(phone) {
//   if (phone.length !== 11) {
//     return false;
//   }
//   // return Array.from(phone).every(char => char >= 0 && char <= 9);
//   return /^[0-9]+$/.test(phone);
// }

export default function InputValidation() {
  const [input, setInput] = useState({value: '', isValid: false, times: true});
  // const [times, setTimes] = useState(0);

  const updateInput = inputVal => {
    setInput({
      ...input,
      value: inputVal,
      // isValid: validatePhone(inputVal),
      isValid: validate(inputVal, [{key: 'isPhone'}]),
      // times: input.times,
    });
  };

  const onSubmitHandler = () => {
    if (!input.isValid) {
      // alert('You Entered Something Wrong');
      setInput({...input, times: false});
      return;
    }
    setInput({...input, times: false});
    // setTimes(1);
    // alert('You Entered ' + input);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputIconView}>
        <TextInput style={styles.TextInputStyle} onChangeText={updateInput} />
        <Icon
          name={input.times === true ? null : input.isValid ? 'check' : 'close'}
          color={input.isValid ? 'green' : 'red'}
          size={24}
        />
      </View>
      {input.times === true ? (
        <Text />
      ) : validate(input.value, [{key: 'isPhone'}]) === true ? (
        <Text style={{color: 'green', fontFamily: defaultFontFamily}}>
          Correct Phone
        </Text>
      ) : (
        <Text style={{color: 'red', fontFamily: defaultFontFamily}}>
          {input.value.length === 0 ? 'You must Enter Phone' : 'Wrong Phone'}
        </Text>
      )}
      <TouchableOpacity
        disabled={!input.isValid}
        style={[
          styles.button,
          {backgroundColor: input.isValid ? '#000' : '#bbb'},
        ]}
        onPress={onSubmitHandler}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  TextInputStyle: {
    fontFamily: BoldFontFamily,
    fontSize: FONTS.h5,
    flex: 1,
  },
  inputIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  button: {
    marginTop: 20,
    width: 120,
    height: 55,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  submit: {
    fontFamily: BoldFontFamily,
    fontSize: FONTS.h5,
    color: '#fff',
  },
});
