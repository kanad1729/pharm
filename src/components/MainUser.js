import React, { Component } from 'react';

import Web3 from 'web3';
import Marketplace from '../abis/Marketplace.json';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

class MainUser extends Component {

  render() {
    return (
      // <div id="content">
      //   <h1>Pharmacy Suplly Chain Management System on Blockchain</h1>

      //   <br/>
      //     <br/>

      //     <br/>
      //     <br/>

      //     <form onSubmit={(event) => {
      //       event.preventDefault()
      //       // const id = this.did.value
      //       const id = this.did.value

      //       this.props.searchData(id)

      //    }}>

      //       <div className="form-group mr-sm-2">
      //           <input
      //           id="productName"
      //           type="text"
      //           ref={(input) => { this.did = input }} //this is to fetch input from inp field
      //           className="form-control"
      //           placeholder="Enter Product ID"
      //           required />
      //       </div>


      //       <button type="submit" className="btn btn-primary" >Search Product</button>
      //   </form>

      //   <br/><br/>

      //    <h2>Searched product</h2>

      //   <table className="table">
      //     <thead>

      //       <tr>
      //           {/* <th scope="col">#</th> */}
      //           <th scope="col">Name</th>
      //           <th scope="col">Role</th>
                
      //           <th scope="col">Price</th>
      //           <th scope="col">Remark</th>
      //           {/* <th scope="col">Owner</th> */}
      //       </tr>
            
      //     </thead>

      //     <tbody id="productList">
      //       { this.props.serchedDrug.map((sdrug, key)=>{
      //         return(
      //           <tr key={key}>
      //               {/* <th scope="row">{sdrug.id.toString()}</th> */}
      //               <td >{sdrug.drugName}</td>
      //               <td >{sdrug.role}</td>
                    
      //               <td >{window.web3.utils.fromWei(sdrug.price.toString(), 'Ether')} Eth</td>
      //               <td >{sdrug.remark}</td>
      //               {/* <td >{sdrug.owner}</td> */}
                   
      //           </tr>
      //         )
      //       })}

        

      //     </tbody>

      //   </table>

      // </div>

                                       
<React.Fragment >


<CssBaseline />
<Container >




<div style={{paddingLeft:"30px", paddingRight:"30px", paddingTop:"50px"}}>
<h1 className="text-center">Search Product Data</h1>
  <div style={{paddingBottom:"50px", width:"500px"}}>
  
  <form onSubmit={(event) => {
            event.preventDefault()
            // const id = this.did.value
            const id = this.did.value

            this.props.searchData(id)

         }}>

            <div className="form-group mr-sm-2">
                <input
                id="productName"
                type="text"
                ref={(input) => { this.did = input }} //this is to fetch input from inp field
                className="form-control"
                placeholder="Enter Product ID"
                required />
            </div>

            <Button  type="submit" variant="contained" color="primary">
            Search Product
            </Button>
            {/* <button type="submit" className="btn btn-primary" >Search Product</button> */}
        </form>

  </div>
    <h1 className="text-center">Product Data</h1>
    <TableContainer component={Paper}>
  <Table  aria-label="customized table">
    <TableHead >
      <TableRow style={{backgroundColor:"#2c003e"}}  >
        {/* <TableCell style={{color:"#ffffff"}}>#</TableCell> */}
        <TableCell style={{color:"#ffffff"}}>Name</TableCell>
        <TableCell style={{color:"#ffffff"}}>Role</TableCell>
        <TableCell style={{color:"#ffffff"}}>Price</TableCell>
        <TableCell style={{color:"#ffffff"}}>Remark</TableCell>
        {/* <TableCell style={{color:"#ffffff"}}>Timestamp</TableCell>
        <TableCell style={{color:"#ffffff"}}>Owner</TableCell> */}
        
      </TableRow>
    </TableHead>
    <TableBody>

    { this.props.serchedDrug.map((sdrug, key)=>{
          return(

            <TableRow key={key}>
              <TableCell align='justify' scope="row">{sdrug.drugName}</TableCell>
              <TableCell align='justify'>{sdrug.role} </TableCell>
              <TableCell align='justify'>{window.web3.utils.fromWei(sdrug.price.toString(), 'Ether')} Eth</TableCell>
              <TableCell align='justify'>{sdrug.remark}</TableCell>
              {/* <TableCell align="right">{drug.remark}</TableCell>
              <TableCell align="right">{date+","+time}</TableCell>
              <TableCell align="right">{drug.owner}</TableCell> */}
          </TableRow>
          
          )
        })}

  
    </TableBody>
  </Table>
</TableContainer>
</div>


</Container>

</React.Fragment>

    );
  }
}
export default MainUser;