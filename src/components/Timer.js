import React, { useEffect, useState } from 'react' 
import { StyleSheet, Text, View } from 'react-native'
import { formatTimer } from '../utils/HelperFunctions'

export default function Timer({maxSeconds,descending,deadlineFunction}) {
  const [seconds, setSeconds] = useState(descending ? maxSeconds : 0)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const deadline = descending ? 0 : maxSeconds
      if (seconds == deadline) {
        clearTimeout(timeout)
        deadlineFunction();
        return
      }
      setSeconds(descending ? seconds - 1 : seconds + 1)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  },[seconds])
  return (
    <View>
      <Text>{formatTimer(seconds)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})