import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import {Cards,Chart,CountryPicker} from'./components'
import {fetchData} from './api'
class App extends React.Component{
  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
    const data=await fetchData();
    this.setState({data:data})
    console.log(data);
  }
  handleCountryChange=async(country)=>
  {console.log(country);
    if(country==="global"){
      const data=await fetchData();
    this.setState({data:data,country:""})
    }
    else{
    const fetchedData=await fetchData(country);
    console.log(fetchedData);
    this.setState({data:fetchedData,country:country})}
    //fetch the data  
    //set the state
  }
  render(){
    const{data,country}=this.state;
    return(
      <div className={styles.container}>
        <img src='https://i.ibb.co/7QpKsCX/image.png'/>
        <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
