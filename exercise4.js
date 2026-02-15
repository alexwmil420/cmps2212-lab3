const box = document.querySelector('.box');

box.addEventListener('click', (event) => {

    // BUG: this.classList.add('active') throws an error
    
    /* Bug explanation:
        Arrow functions don't have their own 'this'. Instead, they inherit 'this' from 
        the surrounding lexical scope. In this case, 'this' does not refer to the 
        clicked element, so calling this.classList.add() throws an error.
    */ 

    // FIX:
    event.currentTarget.classList.add('active');

    /* Explanation:
       event.currentTarget returns the element the event listener
       is attached to (the .box element). This gives us the correct element
       reference without relying on 'this'.
    */
});
