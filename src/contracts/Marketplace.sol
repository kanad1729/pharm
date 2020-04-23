pragma solidity >=0.4.21 <0.6.0;

contract Marketplace{

    string public name;
    uint public productCount = 0;
    uint public drugCount = 0;
    mapping(uint => Product) public products;
    mapping(uint => Drug) public drugs;

    struct Product{

        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
    }

    struct Drug{

        uint id;
        string role;
        string drugName;
        uint price;
        string remark;
        address payable owner;
    }

    event DrugCreated(

        uint id,
        string role,
        string drugName,
        uint price,
        string remark,
        address payable owner
    );

     event DrugDataPosted(

        uint id,
        string role,
        string drugName,
        uint price,
        string remark,
        address payable owner
    );

        
    event ProductCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased

    );

    constructor() public{

        name = "kanad";
    }

    function createDrug(string memory _role, string memory _name, uint _price, string memory _remark)public{

        //name validation
        require(bytes(_name).length > 0, "Drug must has a name.");

        drugCount++;

         //create the product
         drugs[drugCount] = Drug(drugCount, _role, _name, _price, _remark, msg.sender);

         //trigger an event to notify the product is created
         emit DrugCreated(drugCount, _role, _name, _price, _remark, msg.sender);


    }

    function postDrugData(uint _id) public {

        Drug memory _drug = drugs[_id];
        _drug.owner = msg.sender;

        drugs[_id] = _drug;

        emit DrugDataPosted(drugCount, _drug.role, _drug.drugName, _drug.price, _drug.remark, msg.sender);


    }



    function createProduct(string memory _name, uint _price) public{
        
        //name validation
        require(bytes(_name).length > 0);

        //price validation
        require(_price > 0);
        //increament the product count
        productCount++;

        //create the product
         products[productCount] = Product(productCount, _name,  _price, msg.sender, false);

         //trigger an event to notify the product is created
         emit ProductCreated(productCount, _name,  _price, msg.sender, false);

    }

    function purchaseProduct(uint _id) public payable{

        Product memory _product = products[_id];

        address payable _seller = _product.owner;

        //make shure that valid product id
        require(_product.id >0 && _product.id<=productCount);

        //make that anount is enough to purchase prduct
        require(msg.value>= _product.price);

        //make shure thaat product has not been purchased already
        require(!_product.purchased);

        //make sure seller is not buyer
        require(_seller != msg.sender); 

        _product.owner = msg.sender; //now the owner will be buyer who will call this fun. so msg.sender

        _product.purchased = true;

        //put back updated produt in mapping
        products[_id] = _product;

        //we need to pay paise or money to owner after purchasing
        address(_seller).transfer(msg.value);

        //trigger an event to notify the product is purchased
        emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true);

    }

    
    
}