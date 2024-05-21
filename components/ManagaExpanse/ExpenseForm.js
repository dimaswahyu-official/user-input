import { View,StyleSheet,Text } from 'react-native';

import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button'

function ExpenseForm({onCancel, onSubmit, submitButtonLabel}) {
const [inputValues, setInputValues] = useState({
  amount:'',
  date:'',
  desctription:'',
})

  function inputChangedHandler(inputIdentifier,enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier] : enteredValue
      }
    })

  }

  function submitHandler(){

  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}> Your Expense</Text>
      <View style={styles.inputRow}>
      <Input style={styles.rowInput}
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangedHandler.bind(this, 'amount'),
          value: inputValues.amount,
        }}
      />
      <Input style={styles.rowInput}
        label="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangedHandler.bind(this, 'date'),
          value: inputValues.date,
        }}
      />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues.desctription,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
         {submitButtonLabel}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form:{
    marginTop: 40
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    color:'white',
    marginVertical:24,
    textAlign:'center'
  },
  inputRow:{
    flexDirection:'row',
    justifyContent:'space-between'

  },
  rowInput:{
    flex:1,

  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },

})
