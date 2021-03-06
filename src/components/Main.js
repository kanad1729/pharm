import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


class Main extends Component {

  render() {

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();  
    return (
      
                                  
            <React.Fragment >


            <CssBaseline />
            <Container >




            <div style={{paddingLeft:"30px", paddingRight:"30px", paddingTop:"50px"}}>
            <h1 className="text-center">Add Data to Blockchain</h1>
              <div style={{paddingBottom:"50px", width:"500px"}}>
              
              <form onSubmit={(event) => {
                        event.preventDefault()
                        const role = this.publisherRole.value
                        const name = this.productName.value //stroring fetched inp value into name var and same thing is below
                        const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
                        const remark = this.productRemark.value
                        const content = this.productContent.value
                        const mnfDate = this.productMnfDate.value
                        const expDate = this.productExpDate.value 

                        this.props.createDrug(role, name, price, remark, content, mnfDate, expDate)

                    }}>

                        <div className="form-group mr-sm-2">
                            <input
                            id="productName"
                            type="text"
                            ref={(input) => { this.publisherRole = input }} //this is to fetch input from inp field
                            className="form-control"
                            placeholder="Enter User Role"
                            required />
                        </div>


                        <div className="form-group mr-sm-2">
                            <input
                            id="productName"
                            type="text"
                            ref={(input) => { this.productName = input }} //this is to fetch input from inp field
                            className="form-control"
                            placeholder="Enter Product Name"
                            required />
                        </div>
                        <div className="form-group mr-sm-2">
                            <input
                            id="productPrice"
                            type="text"
                            ref={(input) => { this.productPrice = input }}
                            className="form-control"
                            placeholder="Enter Product Price"
                            required />
                        </div>

                        <div className="form-group mr-sm-2">
                            <input
                            id="productName"
                            type="text"
                            ref={(input) => { this.productRemark = input }} //this is to fetch input from inp field
                            className="form-control"
                            placeholder="Enter Product Remark"
                            required />
                        </div>

                        <div className="form-group mr-sm-2">
                            <input
                            id="productName"
                            type="text"
                            ref={(input) => { this.productContent = input }} //this is to fetch input from inp field
                            className="form-control"
                            placeholder="Enter Product Contents"
                            required />
                        </div>

                        <div className="form-group mr-sm-2">
                            <input
                            id="productName"
                            type="text"
                            ref={(input) => { this.productMnfDate = input }} //this is to fetch input from inp field
                            className="form-control"
                            placeholder="Enter Manuf. Date(DD-MM-YYYY)"
                            required />
                        </div>

                        <div className="form-group mr-sm-2">
                            <input
                            id="productName"
                            type="text"
                            ref={(input) => { this.productExpDate = input }} //this is to fetch input from inp field
                            className="form-control"
                            placeholder="Enter Exp Date(DD-MM-YYYY)"
                            required />
                        </div>

                        <Button  type="submit" variant="contained" color="primary" onClick={() => {window.confirm('Please check data before uploading...')}} >
                          Add Product
                          </Button>
                         {/* <button type="submit" className="btn btn-primary" onClick={() => {window.confirm('Please check data before uploading...') } }>Add Product</button> */}
                    </form>
                

              </div>
                <h1 className="text-center">Blockchain Data</h1>
                <TableContainer component={Paper}>
              <Table  aria-label="customized table">
                <TableHead >
                  <TableRow style={{backgroundColor:"#2c003e"}}  >
                    <TableCell style={{color:"#ffffff"}}>#</TableCell>
                    <TableCell style={{color:"#ffffff"}}>Role</TableCell>
                    <TableCell style={{color:"#ffffff"}}>Name</TableCell>
                    <TableCell style={{color:"#ffffff"}}>Price</TableCell>
                    <TableCell style={{color:"#ffffff"}}>Contents</TableCell>
                    <TableCell style={{color:"#ffffff"}}>Manf. Date</TableCell>
                    <TableCell style={{color:"#ffffff"}}>Exp. Date</TableCell>
                    <TableCell style={{color:"#ffffff"}}>Remark</TableCell>
        
                    {/* <TableCell style={{color:"#ffffff"}}>Timestamp</TableCell> */}
                    
                    
                  </TableRow>
                </TableHead>
                <TableBody>

                { this.props.drugs.map((drug, key)=>{
                      return(

                        <TableRow key={key}>
                          <TableCell align='justify' scope="row">{drug.id.toString()}</TableCell>
                          <TableCell align='justify'>{drug.role} </TableCell>
                          <TableCell align='justify'>{drug.drugName}</TableCell>
                          <TableCell align='justify'>{window.web3.utils.fromWei(drug.price.toString(), 'Ether')} Rs.</TableCell>
                          <TableCell align='justify'>{drug.content}</TableCell>
                          <TableCell align='justify'>{drug.mnfDate}</TableCell>
                          <TableCell align='justify'>{drug.expDate}</TableCell>
                          <TableCell align='justify'>{drug.remark}</TableCell>
                          {/* <TableCell align='justify'>{date+","+time}</TableCell> */}
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
export default Main;