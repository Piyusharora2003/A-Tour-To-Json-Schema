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

export const pages = [
    {
    pageCategory:"Theory",
    Title:"JSON Objects",
    Description:`<p style="box-sizing: border-box; margin: 1rem 0px 2rem; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: ; font-variant-east-asian: ; font-variant-alternates: ; font-variant-position: ; font-weight: 400; font-stretch: ; font-size: 16px; line-height: ; font-family: Inter, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-optical-sizing: ; font-kerning: ; font-feature-settings: ; font-variation-settings: ; color: rgb(27, 27, 27); letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal;  text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><a href="https://developer.mozilla.org/en-US/docs/Glossary/JSON" style="box-sizing: border-box; text-decoration: underline; color: var(--text-link); text-decoration-skip-ink: auto; width: fit-content;">JSON</a><span>&nbsp;</span>is a text-based data format following JavaScript object syntax, which was popularized by<span>&nbsp;</span><a href="https://en.wikipedia.org/wiki/Douglas_Crockford" class="external" target="_blank" style="box-sizing: border-box; text-decoration: underline; color: var(--text-link); width: fit-content;">Douglas Crockford</a>. Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.</p><p style="box-sizing: border-box; margin: 1rem 0px 2rem; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: ; font-variant-east-asian: ; font-variant-alternates: ; font-variant-position: ; font-weight: 400; font-stretch: ; font-size: 16px; line-height: ; font-family: Inter, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-optical-sizing: ; font-kerning: ; font-feature-settings: ; font-variation-settings: ; color: rgb(27, 27, 27); letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal;  text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue — JavaScript provides a global<span>&nbsp;</span><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON" style="box-sizing: border-box; text-decoration: underline; color: var(--text-link); text-decoration-skip-ink: auto; width: fit-content;">JSON</a><span>&nbsp;</span>object that has methods available for converting between the two.</p><p><span style="color: rgb(27, 27, 27); font-family: Inter, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">A JSON string can be stored in its own file, which is basically just a text file with an extension of<span>&nbsp;</span></span><code style="box-sizing: border-box; border-radius: var(--elem-radius); font-family: var(--font-code); font-size: var(--type-smaller-font-size); background: var(--code-background-inline); padding: 0.125rem 0.25rem; width: fit-content; color: rgb(27, 27, 27); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">.json</code><span style="color: rgb(27, 27, 27); font-family: Inter, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal;text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">, and a<span>&nbsp;</span></span><a href="https://developer.mozilla.org/en-US/docs/Glossary/MIME_type" style="box-sizing: border-box; text-decoration: underline; color: var(--text-link); text-decoration-skip-ink: auto; width: fit-content; font-family: Inter, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; ">MIME type</a><span style="color: rgb(27, 27, 27); font-family: Inter, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal;  text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span>&nbsp;</span>of<span>&nbsp;</span></span><code style="box-sizing: border-box; border-radius: var(--elem-radius); font-family: var(--font-code); font-size: var(--type-smaller-font-size); background: var(--code-background-inline); padding: 0.125rem 0.25rem; width: fit-content; color: rgb(27, 27, 27); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">application/json</code><span style="color: rgb(27, 27, 27); font-family: Inter, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal;  text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">.</span></p>`,
    exampleSnippet:{
        "productId": 1,
        "productName": "A green door",
        "price": 12.50,
        "tags": [ "home", "green" ]
      }
},{
    pageCategory:"Question",
    title:"Basic Product Schema 1",
    description: "Create a basic product JSON schema which atleast contains the following charcterstics: Title(String), cost(INTEGER), type(Object)",
    examples:[{
        input:"1",
        output:"False",
        explaination: "Type of product should be (Object)"
    },{
        input:{
            "title": "iphone 11",
            "description": "this is a good iphone ",
            "cost":25000,
            "type": {
                "pid": 110124,
                "category":"Mobile"
            },
        },
        output:"True",
    },{
        input:{
            "title": "iphone 11",
            "description": "this is a good iphone ",
            "cost":"s2394",
            "type": {
                "pid": 110124,
                "category":"Mobile"
            },
        },
        output:"false",
        explaination:"Cost should be an integer"
    }],
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
            output:true
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
},
{
    pageCategory:"Question",
    title:"Basic Product Schema 2",
    description: "Create a product JSON schema which atleast contains the following charcterstics: NAME(String), COST(INTEGER >= 0), ProductID(Integer,required)",
    examples:[{
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
    }],
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
}]
