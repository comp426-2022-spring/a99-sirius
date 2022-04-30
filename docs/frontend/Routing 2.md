## Front End Routing

Our Application is contained withing:

##### Browser Router / Redux Provider
````
<BrowserRouter>
    <Provider store={store}>
        <App>
    </Provider>
</BrowserRouter>
````

This allows to keep our UI in sync with the URL and to connect any desire component to our Redux store to access the global state of our application. 

##### Protected Routes

````
<ProtectedRoute children={} redirectPath={} authenticated={}>
    ....
</ProtectedRoute>
````
This component gives extra security to our application, it makes sure anyone that is not authenticated is redirected to the Sign in page.

#####
````
<Switch>
    <Route exact path="/login">
        <Login Container />
    </Route>
    <Route exact path="/dashboard">
        <ProtectedRoute>
            <Dashboard/>
        </ProtectedRoute>
    </Route path="/">
        <SignUpContainer/>
    <Route >
</Switch>
````

For more detailed information you can reference our code <a href="../../client/src/containers/App.js">here</a>