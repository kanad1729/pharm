import React, { Component } from 'react';
import Web3 from 'web3';
import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar';
import Main from './Main';
import './App.css';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AboutPage from './About.js';

class DashboardPage extends Component {

  //inbuilt function will load the specified data when website will load
  async componentWillMount() {
    await this.loadWeb3()
    // console.log(window.web3)
    await this.loadBlockchainData()
  }

  // this function is to create connection with blockchain using web3
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  //this func we r writing bcause to load nessesary data at time loading at first
  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    // console.log(accounts)
    this.setState({account: accounts[0]}) 

    //console.log(Marketplace.abi, Marketplace.networks[5777].address)
    // const abi = Marketplace.abi
    // const address = Marketplace.networks[5777].address
    // const marketplace = web3.eth.Contract(abi, address)
    const networkId = await web3.eth.net.getId() //here we r just fetching network id dynamically. we'll use this id to fetch address of contract 
    const networkData =  Marketplace.networks[networkId] //from network id here 5777
    
    if(networkData) {
      const marketplace =  web3.eth.Contract(Marketplace.abi, networkData.address) // here we are actually instanciating contract by passing 2 parameters to it i.e abi and contract address 
      this.setState({ marketplace })
      // const productCount = await marketplace.methods.productCount().call()
      // this.setState({productCount})

      const drugCount = await marketplace.methods.drugCount().call()
      this.setState({drugCount})

      // for(var i=1; i<=productCount; i++){

      //   const product = await marketplace.methods.products(i).call()
      //   this.setState({
      //     products: [...this.state.products, product]
      //   })

      // }
      // console.log(productCount.toString())

      for(var j=1; j<=drugCount; j++){

        const drug = await marketplace.methods.drugs(j).call()
        this.setState({
          drugs: [...this.state.drugs, drug]
        })

      }
     

     
      this.setState({ loading: false})
      // console.log(this.state.products)
     
    }
    else {
      window.alert('Marketplace contract not deployed to detected network.')
    }

  }

  //its a construct like other programming lang. and we are passing props bcoz 
  //using props we can read out state of one component into another one here
  //we set state into app.js component and we are using it into Navbar.js component that's so.
  
  constructor(props){
    super(props)
    this.state = {
      account: '', //here we are setting state to empty but we are going to update this
                    // i.e some inititalizing our variable under constructure like other programming languages
    
      // productCount: 0,
      drugCount: 0,
      // products: [],
      drugs: [],
      serchedDrug: [],
      loading: true
    }
    
    // this is binding to component
    // this.createProduct = this.createProduct.bind(this)
    // this.purchaseProduct = this.purchaseProduct.bind(this)

    //drug function binding
    this.createDrug = this.createDrug.bind(this)
    this.postDrugData = this.postDrugData.bind(this)
    this.searchData = this.searchData.bind(this)
  }

  
  // createProduct(name, price){
  //   this.setState({ loading: true })
  //   this.state.marketplace.methods.createProduct(name, price).send({ from: this.state.account }).once('receipt', (receipt)=>{
  //    this.setState({ loading: false })
  //   })

  // }

  // purchaseProduct(id, price){
  //   this.setState({ loading: true })
  //   this.state.marketplace.methods.purchaseProduct(id).send({ from: this.state.account, value:price }).once('receipt', (receipt)=>{
  //   this.setState({ loading: false })
  //   })

  // }

  createDrug(role, name, price, remark, content, mnfDate, expDate){
    this.setState({ loading: true })
    this.state.marketplace.methods.createDrug(role, name, price, remark, content, mnfDate, expDate).send({ from: this.state.account }).once('receipt', (receipt)=>{
     this.setState({ loading: false })
    })

  }

  postDrugData(id){
    this.setState({ loading: true })
    this.state.marketplace.methods.postDrugData(id).send({ from: this.state.account }).once('receipt', (receipt)=>{
      this.setState({ loading: false })
     })

  }

  async searchData(id){
    const web3 = window.web3
    const networkId = await web3.eth.net.getId() //here we r just fetching network id dynamically. we'll use this id to fetch address of contract 
    const networkData =  Marketplace.networks[networkId] //from network id here 5777
    
      var flag
      const mplace =  web3.eth.Contract(Marketplace.abi, networkData.address) // here we are actually instanciating contract by passing 2 parameters to it i.e abi and contract address 
      this.setState({ mplace })

      const dCount = await mplace.methods.drugCount().call()
      this.setState({dCount})
    
      for(var j=1; j<=dCount; j++){

      var drug = await mplace.methods.drugs(j).call()
      var d = drug.id
      var did = d.toString()

      if(id.toString() == did){
      
        this.setState({
          serchedDrug: [...this.state.serchedDrug, drug]
        })
        flag = true
        break
      }
    }

    if(flag!=true){
      alert("not found")
    }


  }



  // purchaseProduct(id, price){

  //   this.setState({ loading: true })
  //   this.state.marketplace.methods.purchaseProduct(id).send({ from: this.state.account, value: price }).once('receipt', (receipt)=>{
        
  //     this.setState({ loading: false })
     
  //   })


  // }


  render() {
    return (
         
      <div>
        {/* here in Navbar component we r passing seted state of account i.e account address an we'll cathch in Navbae code using props and display */}
        
        <Navbar account={this.state.account} /> 

        <div className="container-fluid mt-5">
          <div className="row">
        
            <main role="main" className="col-lg-12 d-flex">
             
              {/* if all data is loaded then we'll show contents other wise hide using loading using turnary operatopr in js */}
                { this.state.loading
                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                  : <Main
                    // products = {this.state.products}
                     drugs = {this.state.drugs}
                     serchedDrug = {this.state.serchedDrug}
                    // //  createProduct = {this.createProduct}
                    // //  purchaseProduct = {this.purchaseProduct}
                     createDrug = {this.createDrug}
                     postDrugData = {this.postDrugData} 
                     searchData = {this.searchData}
                     />
                }
             
            </main>
           
          </div>
        </div>
      </div>
      
    );
  }
}

export default DashboardPage;