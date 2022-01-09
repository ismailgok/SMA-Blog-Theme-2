var input = document.getElementById('toggleswitch');
var outputtext = document.getElementById('status');
const asd = document.getElementById('asd')


input.addEventListener('change',function(){
        if(this.checked) {
          asd.style.color = "#000 !important"
        }
});
