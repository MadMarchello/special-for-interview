import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Text, View } from 'react-native';
import SearchSignForm from './SearchSignForm'
import Page from './FindsPage/Page'

const EnterWordComponent = () => {
  const [data, setData] = useState({
    url: null,
    request: null
  });

  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData =  async () => {
      try {
        const result = await axios
          .post(data.url, data.request)
          .then((res) => {
            setResponse((prevState) => ({
              ...prevState,
              request: data.request,
              response: res.data
            }));
            setIsLoading(false);
          })
      } catch (error) {
        console.log(error);
      }
    }
    if (data.url !== null) {
      fetchData();
    }
  }, [data])

  return (
    <View>
      <SearchSignForm setData={setData} setIsLoading={setIsLoading} style={{flex: 1}}/>
      {
        response && (
          isLoading ? 
          <Text style={{
            textAlign: 'center',}}> Загрузка </Text> : <Page data={response} />
        )
      }
    </View>
  )
}
//<Page data={response} />
export default EnterWordComponent;
