export function mask_phone_number(phone_number: string): string {
    var new_str = phone_number.replace(/\D/g, "");

    if (new_str.length > 10) {
        new_str = new_str.replace(/^(\d\d)(\d)(\d{4})(\d{4}).*/, "($1) $2 $3-$4");
    } else if (new_str.length > 6) {
        new_str = new_str.replace(/^(\d\d)(\d{4})(\d{1,4}).*/, "($1) $2-$3");
    } else if (new_str.length > 2) {
        new_str = new_str.replace(/^(\d\d)(\d{1,4})/, "($1) $2");
    } else {
        new_str = new_str.replace(/^(\d*)/, "($1");
    }
    return new_str;
}

export function mask_only_one_name(name: string): string{
    var new_str = name.replace(/\s/g, "");
    new_str = new_str.replace(/(?![a-zA-Z])\S/g, "");
    return new_str
}

export function mask_cnpj(name: string): string{
    var new_str = name.replace(/\D/g, "");

    if (new_str.length > 12){
        new_str = new_str.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2}).*/, "$1.$2.$3/$4-$5");
    } else if (new_str.length > 8){
        new_str = new_str.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})/, "$1.$2.$3/$4");
    } else if (new_str.length > 5){
        new_str = new_str.replace(/^(\d{2})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (new_str.length > 2){
        new_str = new_str.replace(/^(\d{2})(\d{1,3})/, "$1.$2");
    } else {
        new_str = new_str.replace(/^(\d*)/, "$1");
    }

    return new_str
}