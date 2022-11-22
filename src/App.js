import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
// import ContextProvider from './components/ContextProvider';
// import { UserProvider } from './components/userContext';

// import ReducerMultiple from './hooks/ReducerMultiple';
// import HOC from './components/HOC';
// import User from './components/User';
// import UseRefFocus from './hooks/UseRefFocus';
// import UseRefTimer from './hooks/UseRefTimer';
// import CustomHookTitle from './hooks/CustomHookTitle';
// import TempControl from './Practices/TempControl';
import QuizApp from './Practices/QuizApp';
import Home from './RoutesPages/Home';
import About from './RoutesPages/About';
import Navbar from './RoutesPages/Navbar';
import OrderSummary from './RoutesPages/OrderSummary';
import NoMatch from './RoutesPages/NoMatch';
import Products from './RoutesPages/Products';
import FeaturedProducts from './RoutesPages/FeaturedProducts';
import NewProducts from './RoutesPages/NewProducts';
// import RenderProps from './components/RenderProps';
// import DataFetching from './hooks/DataFetching';
// import ReducerCounter from './hooks/reducerCounter';
// import ReducerComplex from './hooks/reducerComplex';
// import HookIntervalCount from './hooks/EffectIntervalCount';
// import EffectCleanup from './hooks/EffectCleanup';
// import HookArray from './hooks/HookArray';
// import EffectConditional from './hooks/EffectConditional';
// import HookObj from './hooks/HookObj';
// import Table from './components/Table';
// import PureComponent from './PureComponent';
// import HookCounter from './hooks/HookCounter';
// import HookPrev from './hooks/HookPrev';
// import FragmentDemo from './components/FragmentDemo';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/functionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './NameList';
// import Stylesheet from './components/Stylesheet';
// import './appStyles.css'
// import styles from './appStyles.module.css'
//import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='products' element={<Products />}>
              <Route path='featured' element={<FeaturedProducts />} />
              <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='*' element={<NoMatch />} />
      </Routes>

      {/* <QuizApp /> */}
      {/* <TempControl /> */}
      {/* <UserProvider value='Malik'>
        <ContextProvider />
      </UserProvider> */}
      {/* <CustomHookTitle /> */}
      {/* <UseRefTimer /> */}
      {/* <UseRefFocus /> */}
      {/* <RenderProps 
          render={(count, incrementCount) => (
              <BabyComponent count={count} incrementCount={incrementCount}
          )}
      /> */}
      {/* <User name={(isLoggedIn) => isLoggedIn ? 'Malik' : 'Guest' } /> */}
      {/* <HOC name='Malik'/> */}
      {/* <ReducerMultiple /> */}
      {/* <ReducerComplex /> */}
      {/* <DataFetching /> */}
      {/* <ReducerCounter /> */}
      {/* <HookIntervalCount /> */}
      {/* <EffectCleanup /> */}
      {/* <EffectConditional /> */}
      {/* <HookArray /> */}
      {/* <HookObj /> */}
      {/* <HookPrev /> */}
      {/* <HookCounter /> */}
      {/* <PureComponent /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <EventBind></EventBind> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>success</h1> */}
      {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* {<ParentComponent />} */}
        {/* <ClassClick /> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name = "Bruce" heroName= "Batman"></Greet>
          <p>This is children props</p>
        <Greet name="Diana" heroName="Wonderwoman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" /> */}
        {/* <Hello /> */}
    </div>
  );
}

export default App;
