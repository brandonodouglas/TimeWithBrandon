import { Stack } from 'expo-router';
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Tabs } from 'expo-router/tabs'
export default function RootLayout() {
  return (
    <React.Fragment> 
      <StatusBar style="auto"/>
      {/* */}
      <Stack
      screenOptions={{
        title: 'TimeWithBrandon',
       
        headerStyle: {
          backgroundColor: '#b94b4bff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
          fontSize: 30
        },
      }}
    
      
      />
    </React.Fragment>
  );}