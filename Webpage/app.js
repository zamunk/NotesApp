new Vue( 
    {
        el: '#app',
        data:{
            myNotes: {}
        },
        mounted(){
            axios.get('../notes.json')
            .then((response)=> {
              this.myNotes=response.data;
            })
        }
    });