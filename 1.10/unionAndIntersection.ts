{
    //union type

    type Laptop = {
        display: string;
        ram: string;
        storage: string;
        battery: string;
        keyboard: string;
        processor: string; 
    }

    type Desktop = {
        monitor: string;
        mobo: string;
        processor: string;
        storage: string;
        ram: string;
        keyboard: string;
    }

    type PC = Laptop | Desktop;  //union types : it is used for choosing either one of the types


    type Iphone = {
        ios: string;
        bionic: boolean;
        camera: boolean;
        steelBody: boolean;
        battery: boolean;
    }


    type Android = {
        android: boolean;
        snapdragon: boolean;
        camera: boolean;
        steelBody: boolean;
        battery: boolean;
        charger: boolean;
        customizable: boolean;
    }

    type normalMobile = Android & Iphone; // this is used for combine two different types into one type

    




}