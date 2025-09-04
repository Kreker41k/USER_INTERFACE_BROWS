document.getElementById("Extensions").addEventListener('click', function(){
    document.getElementById('Menu').classList.toggle('open');
});

const NewExtensions = document.getElementById("NewExtensions");
const url = 'https://chromewebstore.google.com/?utm_source=ext_app_menu';

NewExtensions.onclick = function() {
    window.open(url, '_blank');
};

const Extension_container = document.getElementById('Extension_container');

let MarkerItem = null;

Extension_container.addEventListener('click', function(event){

    const ClickedItem = event.target;

    if (ClickedItem.classList.contains('Extension')){

        ClickedItem.classList.toggle('marked');

        if (ClickedItem.classList.contains('marked')) {

            document.querySelectorAll('.Extension').forEach(item => {
                if (item !== ClickedItem) {
                    item.classList.remove('marked');
                }
            })
        }
    }
});

document.getElementById('Close').addEventListener('click', function(){

    if (document.getElementById('Menu').classList.toggle('open')){

        document.getElementById('Menu').classList.toggle('Menu');
    }
})