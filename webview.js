module.exports = (Franz) => {
    
    function getMessages() {
        let direct = 0;
        let indirect = 0;
        
        const franzData = document.querySelector("#FranzMessages").dataset;
        
        if (franzData) {
            direct = franzData.direct;
            indirect = franzData.indirect;
        }

        Franz.setBadge(direct, indirect);
    }

    Franz.loop(getMessages);
}
