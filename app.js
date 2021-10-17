
var unorder_item = document.getElementById('unorder')



firebase.database().ref('todo').on('child_added',function(smit){
    var data = smit.val()
    console.log(data.todo_item)

    var lst_item = document.createElement('li')
    var list_text = document.createTextNode(data.todo_item)
    lst_item.appendChild(list_text)
    console.log(lst_item)
    unorder_item.appendChild(lst_item)

    var edit = document.createElement('button')
    // var edit_text = document.createTextNode('Edit')
    edit.setAttribute('onclick','edit(this)')
    edit.setAttribute('class','edit_btn fas fa-edit')

    var delete_2 = document.createElement('button')
    var delete_text_2 = document.createTextNode('Delete')
    delete_2.setAttribute('class','edit_btn')
    delete_2.setAttribute('onclick','delete_todo(this)')
    delete_2.setAttribute('id',data.key_item)
    // console.log
    // edit.appendChild(edit_text)
    delete_2.appendChild(delete_text_2)
    lst_item.appendChild(edit)
    lst_item.appendChild(delete_2)


})





function add_todo(){
    var val = document.getElementById('inp')
    var val = document.getElementById('inp')
    console.log(val.value)

    var lst_item = document.createElement('li')
    var list_text = document.createTextNode(val.value)
    lst_item.appendChild(list_text)
    console.log(lst_item)
    unorder_item.appendChild(lst_item)

    

    var key =  firebase.database().ref('/Todo').push().getKey()
    console.log(key)
    
     var obj  = {
         todo_item : val.value,
         key_ITEM : key
     }  
    
     console.log(obj)
    
     firebase.database().ref('/Todo/'+key).set(obj)
    
    // var key = 12
    
    // firebase.database().ref(`/USER/${key}`).set(obj)


    // firebase.database().ref('/USER/' + key).set(obj)

    var edit = document.createElement('button')
    var edit_text = document.createTextNode('Edit')
    edit.setAttribute('onclick','edit(this)')
    edit.setAttribute('class','edit_btn')

    var delete_2 = document.createElement('button')
    var delete_text_2 = document.createTextNode('Delete')
    delete_2.setAttribute('class','edit_btn')
    delete_2.setAttribute('onclick','delete_todo(this)')
    edit.appendChild(edit_text)
    delete_2.appendChild(delete_text_2)
    lst_item.appendChild(edit)
    lst_item.appendChild(delete_2)
    val.value=''

}

function edit(e){
    var val = e.parentNode.childNodes[0].nodeValue
    var inp = prompt("Enter Value",val)
    e.parentNode.childNodes[0].nodeValue = inp
}

function delete_todo(e){
    e.parentNode.remove()
    firebase.database().ref('/todo'+ e.id).remove()
}

function delete_all_todo(){
    unorder_item.innerHTML=''
}





// datbase=> send data
// //generate key
// firebase.database().ref().push()

// //make itself key
// firebase.database().ref().set()

// get key...+ push key... and object..
// firebase.database().re().push().getKey()


// get data from database...
// firebase.database().ref().on('value',)


// delete_data
// firebase.database().ref().















// var unorder_item = document.getElementById('unorder')

// firebase.database().ref('Todo').on('child_added',function(smit){
//     var data = smit.val()
//     console.log(data.key_ITEM)

//     var lst_item = document.createElement('li')
//     var list_text = document.createTextNode(data.todo_item)
//     lst_item.appendChild(list_text)
//     console.log(lst_item)
//     unorder_item.appendChild(lst_item)

//     var edit2 = document.createElement('button')
   
//     edit2.setAttribute('onclick','edit(this)')
//     edit2.setAttribute('class','edit_btn fas fa-edit')
//     edit2.setAttribute('id',data.key_ITEM)

//     var delete_2 = document.createElement('button')
//     var delete_text_2 = document.createTextNode('Delete')
//     delete_2.setAttribute('class','edit_btn')
//     delete_2.setAttribute('onclick','delete_todo(this)')
//     delete_2.setAttribute('id',data.key_ITEM)
//     // edit.appendChild(edit_text)
//     delete_2.appendChild(delete_text_2)
//     lst_item.appendChild(edit2)
//     lst_item.appendChild(delete_2)


// })


// function add_todo(){
//     var val = document.getElementById('inp')
//     // console.log(val.value)

//    var key =  firebase.database().ref('/Todo').push().getKey()
// //    console.log(key)
//     var obj  = {
//         todo_item : val.value,
//         key_ITEM : key
//     }  

//     // console.log(obj)
//     firebase.database().ref('/Todo/'+key).set(obj)
// }

// function edit(e){
//     var val = e.parentNode.childNodes[0].nodeValue
//     var inp = prompt("Enter Value",val)
//     e.parentNode.childNodes[0].nodeValue = inp

//     firebase.database().ref('/Todo/').child(e.id).set({
//         todo_item:inp,
//         key_ITEM:e.id})
// }

// function delete_todo(e){

//     console.log(e.parentNode)
//     firebase.database().ref('/Todo/'+e.id).remove()
//     e.parentNode.remove()

// }

// function delete_all_todo(){

//     firebase.database().ref('/Todo/').remove()
//     unorder_item.innerHTML=''
// }