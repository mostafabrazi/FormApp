# FormApp 
is a mobile app that provides an animated form embedded in a ScrollView component.


<p align="center">
<img src="https://user-images.githubusercontent.com/16275632/185802913-ab797d1e-8de8-47ce-96d0-34136d48e8ef.png" width=30% height=30%>
<img src="https://user-images.githubusercontent.com/16275632/185802995-02186042-2399-49dd-af2b-c5b8a5c2b8d2.png" width=30% height=30%>
<img src="https://user-images.githubusercontent.com/16275632/185803413-9c286591-6661-4fc0-8f23-280723cf5072.png" width=30% height=30%>
</p>
### To install the app, please follow the steps below:
1- Clone this directory using this command in you favorite folder on your machine and change directory to `FormApp`
```
cd [YOUR_FAVORITE_FOLDER]
git clone git@github.com:mostafabrazi/FormApp.git
cd [YOUR_FAVORITE_FOLDER]/FormApp
```

2- Install node packages
```
yarn
```

3- Start metro server (with a chache clear especially after any added changes and after first run)
```
yarn start -reset--cache
```

4- Install pods for iOS app
```
pod install
```

5- Run iOS app
```
npx react-native run-ios
```
or Android app
```
npx react-native run-android
```

Note: For android app, add these lines to `android/gradle.properties` if you are using Java `java version "17.0.1" 2021-10-19 LTS`
```
org.gradle.jvmargs=-Xmx4096m -XX:MaxPermSize=4096m -XX:+HeapDumpOnOutOfMemoryError
org.gradle.jvmargs=-Xmx1536M --add-exports=java.base/sun.nio.ch=ALL-UNNAMED --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-exports=jdk.unsupported/sun.misc=ALL-UNNAMED
```

Here we go, our app is up and running !
