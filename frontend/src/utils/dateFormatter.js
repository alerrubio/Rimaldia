export var longDate = (date) => {
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

export var ultraShortDate = (date) => {
    if (date){
        return new Date(date)
        .toLocaleDateString(
            "es-MX",{  
                day:'numeric', 
                month:'numeric', 
                year:'numeric'
            }
            );
    }
}