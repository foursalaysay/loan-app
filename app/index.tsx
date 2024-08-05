// app/App.tsx
import { Href, Redirect } from 'expo-router';
import React from 'react';



const Index = () => {
    const redirectPage = "/dashboard" as Href;
    const loginPage = "/login" as Href;

    const fetchUser = async () => {
      const user = await getUser();
    }
    if(!user){
        <Redirect href={loginPage}/>
    }
  return (
    <Redirect href={redirectPage} />
  );
};

export default Index;
