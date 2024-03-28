// export const problems = [{
//     title:"",
//     desc: "",
//     examples:[{
//         input:"",
//         output:"",
//     }],
//     testcases:[{
//         input:"",
//         output:""
//     }],
//     editorial:{

//     }
// }]


export const newPages = [
    {
    title:"Json Objects",
    pageType: "Blog",
    content:[{
        type:"description",
        content:"JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON."
    },{
        type:"description",
        content:"JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue — JavaScript provides a global JSON object that has methods available for converting between the two."
    },{
        type:"Code",
        content:`{
    "productId": 1,
    "productName": "A green door",
    "price": 12.50,
    "tags": [ "home", "green" ]
}`
    },{
        type:"description",
        content:"A JSON string can be stored in its own file, which is basically just a text file with an extension of .json, and a MIME type of application/json."
    }]
    },{
        title:"What is Json Schema",
        pageType: "Blog",
        content:[{
            type:"description",
            content:"The instance is the JSON document that is being validated or described, and the schema is the document that contains the description."
        },{
            type:"description",
            content:"The most basic schema is a blank JSON object, which constrains nothing, allows anything, and describes nothing:"
        },{
            type:"Code",
            content:`{}`
        },{
            type:"description",
            content:"By adding validation keywords to the schema, you can apply constraints to an instance. For example, you can use the type keyword to constrain an instance to an object, array, string, number, boolean, null:            "
        },{
            type:"Code",
            content:`{
    "type": "string" 
}`
        },{
            type:"description",
            content:"JSON Schema is hypermedia-ready and ideal for annotating your existing JSON-based HTTP API. JSON Schema documents are identified by URIs, which can be used in HTTP link headers and within JSON Schema documents to allow for recursive definitions."
        }]
    },{
        title:"Create Your First Schema",
        pageType: "Blog",
        content:[{
            type:"description",
            content:"To create a basic schema definition, define the following keywords: "
        },{
            type:"description",
            content:"$schema: specifies which draft of the JSON Schema standard the schema adheres to. "
        },{
            type:"description",
            content:"$id: sets a URI for the schema. You can use this unique URI to refer to elements of the schema from inside the same document or from external JSON documents."
        },{
            type:"description",
            content:"title and description: state the intent of the schema. These keywords don’t add any constraints to the data being validated."
        },{
            type:"description",
            content:"type: defines the first constraint on the JSON data. In the product catalog example below, this keyword specifies that the data must be a JSON object."
        },{
            type:"Code",
            content:`{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/product.schema.json",
    "title": "Product",
    "description": "A product in the catalog",
    "type": "object"
}`
        },],
    },{
        title:"Build Your Schema",
        pageType:"Question",
        content:[
            {
                type:"description",
                content: "Create a product JSON schema which atleast contains the following charcterstics: NAME(String), COST(INTEGER >= 0), ProductID(Integer,required)",
            },
            {
                type:"Examples",
                content:[{
                    input:"1",
                    output:"False",
                    explaination: "Type of product should be (Object)"
                },{
                    input:{
                        "NAME": "iphone 11",
                        "description": "this is a good iphone ",
                        "COST":25000,
                        "ProductId": 102,
                    },
                    output:"True",
                    }]
            }
        ],
        testcases:[{
            input: {
                "title": "iphone 11",
                "description": "this is a good iphone ",
                "cost":25000,
                "type": {
                    "pid": 110124,
                    "category":"Mobile"
                }
            },
            output:false,
            explaination:"Product Id is a required property"
        },{
            input:"hello",
            output:false,
            explaination: "Input type is String, req 'Object' " 
        },{
            input:1,
            output:false,
            explaination: "Input type is Number, req 'Object' " 
            }],
        editorial:{
            notes:"available here ! "
        }
    }
];