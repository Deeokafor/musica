//this block handles the opening and closing of the mobile menu
const menu_button = document.querySelector('#menu_button');
const menu_button_name = menu_button.getAttribute('id');
const mobile_menu_list = document.getElementById('mobile_menu');
const mobile_menu_name = mobile_menu_list.getAttribute('id');

if (menu_button && mobile_menu_list) {
    console.log(`Both ${menu_button_name} and ${mobile_menu_name} are live`);
    menu_button.addEventListener('click', function () {
        mobile_menu_list.classList.remove('tw-invisible');
        console.log('menu open');
    });
} else {
    console.log(`Something is either wrong with ${menu_button} or ${mobile_menu_name} not alive`);
}

mobile_menu_list.addEventListener('click', function(){
    mobile_menu_list.classList.add('tw-invisible');
    console.log(`menu close`);
})


//this block of code handles tab-like opening of the different sections
const tabs = document.getElementsByClassName('tabs')

function getTabs() {
    const all_tabs = tabs;
    console.log(all_tabs[0]);
}

getTabs();