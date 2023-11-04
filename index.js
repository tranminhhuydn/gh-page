//alert('hi hi','sms')
var
d = document,
q = '',
_table = 'dict'+q,
url = 'https://svapi-50a2.restdb.io/rest/'+_table,
opts={
    method:'GET',
    headers:{
        "content-type": "application/json",
        "cache-control": "no-cache",
        //"x-apikey": "e6e85fd3633031f5a53af7eff19548b9b901f"
        "x-apikey":"6544b79e8d9cf61246753309"
    }
}
 
d.q = d.querySelector
d.qAll = d.querySelectorAll
    
var
spinner = d.q ( '.spinner-border' )
xfetch =(url,opts,cb)=> {
    fetch(url,opts)
    .then(res=>res.json())
    .then(text=>{
      spinner
      .classList
      .add ('visually-hidden')
      
      cb && cb(text)
    })
    .catch(error=>{
        alert('error fetch')
        spinner
        .classList
        .add ('visually-hidden')
    })
}

var
t = d.q('textarea'),
clean=()=>{
    t.value = ''
},
xget = () =>{
   spinner
   .classList
   .remove('visually-hidden')
    
    clean()
    var
    opt1 = Object.assign({},opts)
    
    xfetch(url,opt1,text=>{
        var
        obj = text
        builtTable(obj)
        //return
        value = JSON
        .stringify(text)
        t.value = value
    })
 },
builtTable = (obj) =>{
    var
    fields =[],
    table = d.q('#table')
    for(var f in obj[0])
      fields.push(f)
    table.innerHTML= '<td>' + fields.join('</td><td>') + '</td>'
    
    var
    r = ''
    obj.map(e=>{
        var
        v = []
        for(var f in e)
        v.push(e[f])
        r += '<tr><td>' + v.join('</td><td>') + '</td></tr>'
    })
    table.innerHTML +=r
},
xpost = () =>{
   spinner
   .classList
   .remove('visually-hidden')
     
    var
    opt1 = Object.assign({},opts)
    opt1.method = 'POST'
    opt1.json = true
    opt1.body = t.value
   xfetch(url,opt1,text=>{
    value = JSON
    .stringify(text)
    t.value = value
   })
 },
xPut = () =>{
   spinner
   .classList
   .remove('visually-hidden')
     
    var
    opt1 = Object.assign({},opts)
    opt1.method = 'PUT'
    opt1.json = true
    opt1.body = t.value
    var
    obj = JSON.parse(t.value)
    url1 = url +'/'+ obj._id
   xfetch(url1,opt1,text=>{
    value = JSON
    .stringify(text)
    t.value = value
   })
},

xDelete = () =>{
   spinner
   .classList
   .remove('visually-hidden')
    
    var
    opt1 = Object.assign({},opts)
    opt1.method = 'DELETE'
    q ='/'+ t.value
    url1 = url + q
    
    xfetch(url1,opt1,text=>{
     value = JSON
     .stringify(text)
     t.value = value
    })
    
    q=''
 }


 