// Objects are used to group similar properties and behaviour

const cirlce = {
    radius : 1,

    location :{
        x : 1,
        y : 3
    },

    isVisible = true,
    
    draw: function(){
        console.log('I am Draw Function')
    }
}

cirlce.draw()

// A function inside an object is referred as Method