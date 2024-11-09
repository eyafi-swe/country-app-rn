## How I solved the problem
That was a taks to build an application with React Native. There were 7 parts of the application.

# Part 0 (Project setup)
Initially, I created the app using React Native CLI, I could have used Expo here, but I choose Bare React Native as it gives more freedom. I installed the necessary dependencies. I used TypeScript for type safety, used React Navigation Native for navigation, used Axios for data fetching, used redux toolkit for global state management, used async-storage to persist auth data. I personally do not use async-storage as it is slower and does not store data with encryption (mmkv is a faster solution with encryption).

# Part 1 (Authentication)
I implemented Login and Registration with simple string match functionality. I used Asyncstorage to store registration data and used Redux Toolkit reducer to store logged in flag globally and used this in Navigation.
I also implemented Logout feature with simple redux reducer.

# Part 2 (Display list of countries)
At first I designed the UI with the help of ChatGpt (as the ui is not the first focus and it was a rough ui). Then I created a hook 'useFetch' to fetch the data as my desire (by the currency code). I displayed the data with FlatList, implemented inifinity scroll with the default prop of FlatList and 'useFetch' hook.

# Part 3 (Filter and sort in countries screen)
I used a package 'react-native-drawer' to implement the Drawer feature, and created reusable components for drawer content (Filter and Order). Implemented OrderBy(ascending, descending) feature with a utility function.

# Part 4 (Display list of regions)
I used React Navigations route prop to get the parameter sent from the previous screen and used useFetch hook to fetch data with the parameter. Displayed the data and implemeted infinity scroll, orderBy(ascending, descending) feature as like before.

# Part 5 and 6 (Display list of cities with metadata)
Receving the parameter and fetching data as previous. Designed drawer content component for advance filtering and filtered the data using the same useFetch hook. Showing metadata on press the plus icon and used setTimeout for hiding the metadata after 30 seconds.

# Part 7 (Custom countries CRUD)
I created a slice in redux, designed the ui (List screen, Input screens, Summary Screen) with the help of ChatGPT and used redux reducers for CRUD operation.
