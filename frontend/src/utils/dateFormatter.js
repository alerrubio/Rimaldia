export var longDate = (date) => {
    console.log(date);
    if (date){
        return new Date(date)
        .toLocaleDateString(
            "es-MX",{ 
                weekday:'long', 
                day:'numeric', 
                month:'long', 
                year:'numeric', 
                hour:'numeric', 
                minute:'numeric' }
                );
    }
}

export var shortDate = (date) => {
    if (date){
        return new Date(date)
        .toLocaleDateString(
            "es-MX",{ 
                weekday:'long', 
                day:'numeric', 
                month:'long', 
                year:'numeric'
            }
            );
    }
}