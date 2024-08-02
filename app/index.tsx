import { View, Text } from 'react-native'
import React from 'react'
import { Href, Redirect } from 'expo-router'

const IndexPage = () => {

    const redirectPage = "/dashboard" as Href;

return (
    <Redirect href={redirectPage} />
)
}

export default IndexPage