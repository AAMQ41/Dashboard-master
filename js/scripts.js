    
    
    // Toggle the side navigation  
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");

    toggleButton.onclick = function () {
        el.classList.toggle("toggled");
    };

    $(document).ready(function() {
        $('#table').DataTable( {
            "ajax": "json/data.json",
            "columns": [
                { "data": "name" },
                { "data": "address" },
                { "data": "city" },
                { "data": "age" },
                { "data": "last visit" },
                { "data": "orders" }
            ]
        } );
    } );
    
